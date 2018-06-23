import React from 'react';
import { isEmpty } from 'lodash';
import SongList from '../SongList';
import AudioPlayer from '../AudioPlayer';

const PageWrapper = ({
  playStop,
  play,
  setSong,
  volume,
  setVolume,
  songList,
  currentTrack,
  currentTime,
  setCurrentTime,
  refs,
  setSongTime,
  indexTrack,
}) => (
  <div>
    <AudioPlayer
      playStop={playStop}
      play={play}
      setSong={setSong}
      volume={volume}
      setVolume={setVolume}
      songList={songList}
      currentTrack={currentTrack}
      currentTime={currentTime}
      setCurrentTime={setCurrentTime}
      refs={refs}
      setSongTime={setSongTime}
      indexTrack={indexTrack}
    />

    <SongList
      songList={songList}
      setSong={setSong}
      playStop={playStop}
      play={play}
    />
  </div>
)


export default PageWrapper;
