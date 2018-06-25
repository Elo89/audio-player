import {
  getCurrentTimeEvent,
  setVolumeEvent,
  getVolumeEvent,
  getDurationEvent,
} from '../../utils/eventUtils';

const fadeInOut = (refs, percentage, indexTrack, i, volume) => {
  return setTimeout(async () => {
    if (i <= volume) {
      setVolumeEvent(refs, indexTrack, (percentage - i) / 100);
      setVolumeEvent(refs, indexTrack + 1, i / 100);
      i = i + 1;
      return fadeInOut(refs, percentage, indexTrack, i, volume);
    }
    return null
  }, 40)
};

export default ({
  refs,
  indexTrack,
  volume,
  songList,
  setSong,
  playStop,
}) => {
  if (getCurrentTimeEvent(refs, indexTrack) > (getDurationEvent(refs, indexTrack) - 8)) {
    if (getVolumeEvent(refs, indexTrack) === (volume / 100)) {
      if (songList.length - 1 > indexTrack) {
        setSong(songList[indexTrack + 1], indexTrack + 1, 'overlap');
        playStop(true);
        fadeInOut(refs, volume, indexTrack, 1, volume);
      }
    }
  }
};
