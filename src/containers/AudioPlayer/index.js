import { compose, withStateHandlers, withProps, withHandlers, lifecycle } from 'recompose';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import PageWrapper from '../../components/PageWrapper';
import {
  makeSelectIsPlayed,
  makeSelectVolume,
  makeSelectCurrentSong,
  makeSelectIndexTrack,
} from './selectors';
import {
  audioPlayerPlayStop,
  audioPlayerVolume,
  audioPlayerSetSong,
} from './actions';


class RefsStore {
  store(name, value) {
    this[name] = value;
  }
}

const fadeInOut = (refs, percentage, indexTrack, i, volume) => {
  return setTimeout(async () => {
    if (i <= volume) {
      refs[`audio-${indexTrack}`].volume = (percentage - i) / 100;
      refs[`audio-${indexTrack + 1}`].volume = i / 100;
      i = i + 1;
      return fadeInOut(refs, percentage, indexTrack, i, volume);
    }
    return null
  }, 40)
};

const mapStateToProps = createStructuredSelector({
  play: makeSelectIsPlayed(),
  volume: makeSelectVolume(),
  currentTrack: makeSelectCurrentSong(),
  indexTrack: makeSelectIndexTrack(),
});

const mapDispatchToProps = {
  playStopAction: audioPlayerPlayStop,
  setVolumeAction: audioPlayerVolume,
  setCurrentTrackAction: audioPlayerSetSong,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProps({ refs: new RefsStore() }),
  lifecycle({
    componentWillMount() {
      const { playlist: { songList }, setCurrentTrackAction } = this.props;
      setCurrentTrackAction({ currentTrack: songList[0], indexTrack: 0 })
    }
  }),
  withHandlers({
    playStop: ({ refs, playStopAction, play, indexTrack }) => (overridePlay) => {
      const isPlayed = overridePlay || !play;
      if (isPlayed) {
        refs[`audio-${indexTrack}`].play();
      } else {
        refs[`audio-${indexTrack}`].pause();
      }
      playStopAction(isPlayed);
    },
    setVolume: ({ refs, setVolumeAction, indexTrack }) => (value, crossFadeIndex) => {
      if (crossFadeIndex) {
        refs[`audio-${crossFadeIndex}`].volume = value;
      } else {
        refs[`audio-${indexTrack}`].volume = value;
        setVolumeAction(refs[`audio-${indexTrack}`].volume);
      }
    },
    setSong: ({
      songList,
      setCurrentTrackAction,
      refs,
      indexTrack,
    }) => (
      nextTrack,
      nextIndexTrack,
      status,
    ) => {
      if (status !== 'overlap') {
        refs[`audio-${indexTrack}`].pause();
      }
      refs[`audio-${nextIndexTrack}`].currentTime = 0;
      refs[`audio-${nextIndexTrack}`].play();

      setCurrentTrackAction({ currentTrack: nextTrack, indexTrack: nextIndexTrack });
    },
  }),
  withStateHandlers(
    {
      currentTime: 0,
    },
    {
      setCurrentTime: ({
        nextSong,
        currentTrack
      },
      {
        refs,
        setCurrentTrackAction,
        indexTrack,
        playlist: { songList },
        playStop,
        setSong,
        setVolume,
        volume,
      }) => () => {
        if (refs[`audio-${indexTrack}`].currentTime > (refs[`audio-${indexTrack}`].duration - 8)) {
          if (refs[`audio-${indexTrack}`].volume === (volume / 100)) {
            if (songList.length - 1 > indexTrack) {
              setSong(songList[indexTrack + 1], indexTrack + 1, 'overlap');
              playStop(true);
              fadeInOut(refs, volume, indexTrack, 1, volume);
            }
          }
        }
        return ({
          currentTime: refs[`audio-${indexTrack}`] && refs[`audio-${indexTrack}`].currentTime
        });
      },
      setSongTime: (_, { refs, indexTrack }) => (event) => {
        refs[`audio-${indexTrack}`].currentTime = event.target.value
        return ({
          currentTime: event.target && event.target.value
        });
      },
    },
  ),
)(PageWrapper);
