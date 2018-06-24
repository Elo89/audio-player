import { compose, withStateHandlers, withProps, withHandlers, lifecycle } from 'recompose';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import PageWrapper from '../../components/PageWrapper';
import fadeInOutAndOverlap from './overlapAndFade';
import {
  getAudioEvent,
  setCurrentTimeEvent,
  getCurrentTimeEvent,
  setVolumeEvent,
  getVolumeEvent,
  playEvent,
  pauseEvent,
} from '../../utils/eventUtils';
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
        playEvent(refs, indexTrack);
      } else {
        pauseEvent(refs, indexTrack);
      }
      playStopAction(isPlayed);
    },
    setVolume: ({ refs, setVolumeAction, indexTrack }) => (value, crossFadeIndex) => {
      if (crossFadeIndex) {
        setVolumeEvent(refs, crossFadeIndex, value);
      } else {
        setVolumeEvent(refs, indexTrack, value);
        setVolumeAction(getVolumeEvent(refs, indexTrack));
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
        pauseEvent(refs, indexTrack);
      }
      setCurrentTimeEvent(refs, nextIndexTrack, 0)
      playEvent(refs, nextIndexTrack);

      setCurrentTrackAction({ currentTrack: nextTrack, indexTrack: nextIndexTrack });
    },
  }),
  withStateHandlers(
    {
      currentTime: 0,
    },
    {
      setCurrentTime: (_,
      {
        refs,
        indexTrack,
        playlist: { songList },
        playStop,
        setSong,
        volume,
      }) => () => {
        // FADE IN FADE OUT STARTER
        fadeInOutAndOverlap({ refs, indexTrack, volume, songList, setSong, playStop })

        return ({
          currentTime: getAudioEvent(refs, indexTrack) && getCurrentTimeEvent(refs, indexTrack)
        });
      },
      setSongTime: (_, { refs, indexTrack }) => (event) => {
        setCurrentTimeEvent(refs, indexTrack, event.target.value);
        return ({
          currentTime: event.target && event.target.value
        });
      },
    },
  ),
)(PageWrapper);
