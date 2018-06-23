import React from 'react';
import SongList from '../SongList';
import AudioPlayer from '../AudioPlayer';
import PlayListHeader from '../PlayListHeader';
import { Wrapper } from './styles';

const PageWrapper = ({
  playStop,
  play,
  setSong,
  volume,
  setVolume,
  playlist: {
    songList,
    title,
    author,
    photo,
    description,
  },
  currentTrack,
  currentTime,
  setCurrentTime,
  refs,
  setSongTime,
  indexTrack,
}) => currentTrack && (
  <Wrapper>
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

    <PlayListHeader
      title={title}
      author={author}
      photo={photo}
      description={description}
      setSong={setSong}
      songList={songList}
      playStop={playStop}
    />

    <SongList
      songList={songList}
      setSong={setSong}
      playStop={playStop}
      play={play}
      indexTrack={indexTrack}
    />
  </Wrapper>
)


export default PageWrapper;
