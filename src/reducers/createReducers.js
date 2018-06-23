import { combineReducers } from 'redux-immutable';
import audioPlayerReducer from '../containers/AudioPlayer/reducer';

export default function createReducer() {
  return combineReducers({
    audioPlayer: audioPlayerReducer,
  });
}
