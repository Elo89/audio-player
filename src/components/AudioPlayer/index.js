import { compose, withStateHandlers, withProps } from 'recompose';
import AudioPlayer from './AudioPlayer.jsx';

class RefsStore {
  store(name, value) {
    this[name] = value;
  }
}

export default compose(
  withProps({ refs: new RefsStore() }),
  withStateHandlers(
    {
      play: false,
      volume: 100,
      tracks: null,
      currentTrack: 0,
      currentTime: 0,
    },
    {
      playStop: ({ play }, { refs }) => (overridePlay) => {
        if (play) {
          refs.audio.pause();
        } else {
          refs.audio.play();
        }
        return ({ play: overridePlay || !play });
      },
      setVolume: (_, { refs }) => (event) => {
        refs.audio.volume = event.target.value;
        return ({ volume: event.target.value });
      },
      setSong: (_, { songList }) => (currentTrack) => ({ currentTrack }),
      setCurrentTime: ({ nextSong, currentTrack }, { refs }) => () => {

        console.log(refs.audio.currentTime >= refs.audio.duration);
        if (refs.audio.currentTime >= (refs.audio.duration - 8)) {
          console.log('nextSong>>>>>>>>>>>>');
          return ({ currentTrack: currentTrack + 1});
        }
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
)(AudioPlayer);
