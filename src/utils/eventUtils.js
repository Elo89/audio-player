
export const getAudioEvent = (refs, indexTrack) =>
  refs[`audio-${indexTrack}`];

export const setCurrentTimeEvent = (refs, indexTrack, value) =>
  refs[`audio-${indexTrack}`].currentTime = value;

export const getCurrentTimeEvent = (refs, indexTrack) =>
  refs[`audio-${indexTrack}`].currentTime;

export const getDurationEvent = (refs, indexTrack) =>
  refs[`audio-${indexTrack}`].duration;

export const setVolumeEvent = (refs, indexTrack, value) =>
  refs[`audio-${indexTrack}`].volume = value;

export const getVolumeEvent = (refs, indexTrack) =>
  refs[`audio-${indexTrack}`].volume;

export const playEvent = (refs, indexTrack) =>
  refs[`audio-${indexTrack}`].play();

export const pauseEvent = (refs, indexTrack) =>
  refs[`audio-${indexTrack}`].pause();
