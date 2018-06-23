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
  currentTrack: {},
  indexTrack: null,
});

export default handleActions({
  [audioPlayerPlayStop]: (state, { status }) => {
    return state.set('play', status)
  },
  [audioPlayerVolume]: (state, { volume }) => state.set('volume', volume),
  [audioPlayerSetSong]: (state, { song, indexTrack }) =>
    state.set('currentTrack', song).set('indexTrack', indexTrack),
}, { initialState });
