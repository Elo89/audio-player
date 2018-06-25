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
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />

    <AudioPlayer
      refs={refs}
      playStop={playStop}
      play={play}
      setSong={setSong}
      volume={volume}
      setVolume={setVolume}
      songList={songList}
      currentTrack={currentTrack}
      currentTime={currentTime}
      setCurrentTime={setCurrentTime}
      setSongTime={setSongTime}
      indexTrack={indexTrack}
    />

    <PlayListHeader
      title={title}
      author={author}
      photo={photo}
      description={description}
      playStop={playStop}
      play={play}
    />

    <SongList
      songList={songList}
      setSong={setSong}
      playStop={playStop}
      play={play}
      indexTrack={indexTrack}
      refs={refs}
      volume={volume}
      currentTrack={currentTrack}
      setCurrentTime={setCurrentTime}
    />
  </Wrapper>
)


export default PageWrapper;
