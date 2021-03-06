import { handleActions } from 'redux-actions-helpers';
import { fromJS } from 'immutable';
import {
  audioPlayerPlayStop,
  audioPlayerVolume,
  audioPlayerSetSong,
} from './actions';

const initialState = fromJS({
  play: false,
  volume: 100,
  currentTrack: null,
  indexTrack: 0,
});

export default handleActions({
  [audioPlayerPlayStop]: (state, { status }) => {
    return state.set('play', status)
  },
  [audioPlayerVolume]: (state, { volume }) => state.set('volume', volume),
  [audioPlayerSetSong]: (state, { currentTrack, indexTrack }) =>
    state.set('currentTrack', currentTrack).set('indexTrack', indexTrack),
}, { initialState });
