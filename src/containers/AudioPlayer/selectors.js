import { createSelector } from 'reselect';

const selectAudioPlayerDomain = () => state => state.get('audioPlayer');

export const makeSelectIsPlayed = () => createSelector(
  selectAudioPlayerDomain(),
  audioPlayer => audioPlayer.get('play'),
);

export const makeSelectVolume = () => createSelector(
  selectAudioPlayerDomain(),
  audioPlayer => audioPlayer.get('volume'),
);

export const makeSelectCurrentSong = () => createSelector(
  selectAudioPlayerDomain(),
  audioPlayer => audioPlayer.get('currentTrack'),
);

export const makeSelectIndexTrack = () => createSelector(
  selectAudioPlayerDomain(),
  audioPlayer => audioPlayer.get('indexTrack'),
);
