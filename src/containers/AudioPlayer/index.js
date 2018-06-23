import { compose, withStateHandlers, withProps, withHandlers } from 'recompose';
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
  withHandlers({
    playStop: ({
      refs,
      playStopAction,
      play,
      setCurrentTrackAction,
      currentTrack,
      playlist: {
        songList,
      },
    }) => (overridePlay) => {
      if (play || overridePlay) {
        refs.audio.pause();
      } else {
        refs.audio.play();
      }
      if (!isEmpty(currentTrack)) {
        setCurrentTrackAction({ currentTrack: songList[0], indexTrack: 0 });
      }
      playStopAction(overridePlay || !play);
    },
    setVolume: ({ refs, setVolumeAction }) => (event) => {
      refs.audio.volume = event.target.value;
      setVolumeAction(refs.audio.volume);
    },
    setSong: ({ songList, setCurrentTrackAction }) => (currentTrack, indexTrack) => {
      setCurrentTrackAction({ currentTrack, indexTrack });
    },
  }),
  withStateHandlers(
    {
      currentTime: 0,
    },
    {
      setCurrentTime: ({ nextSong, currentTrack }, { refs }) => () => {
        // console.log(refs.audio.currentTime >= refs.audio.duration);
        // if (refs.audio.currentTime >= (refs.audio.duration - 8)) {
        //   console.log('nextSong>>>>>>>>>>>>');
        //   return ({ currentTrack: currentTrack + 1});
        // }
        return ({
          currentTime: refs.audio && refs.audio.currentTime
        });
      },
      setSongTime: (_, { refs }) => (event) => {
        refs.audio.currentTime = event.target.value
        return ({
          currentTime: event.target && event.target.value
        });
      },
    },
  ),
)(PageWrapper);
