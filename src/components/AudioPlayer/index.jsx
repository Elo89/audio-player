import React from 'react';
import { isEmpty } from 'lodash';
import SongList from '../SongList';
import PlayIcon from './svgs/PlayIcon';
import PrevTrack from './svgs/PrevTrack';
import NextTrack from './svgs/NextTrack';
import {
  PlayButton,
  PrevButton,
  NextButton,
  Timeline,
  CurrentTime,
} from './styles';

const AudioPlayer = ({
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

    <audio
      ref={(audio) => refs.store('audio', audio)}
      volume={volume}
      preload="metadata"
      src={currentTrack && !isEmpty(currentTrack) ? currentTrack.src : ''}
      autoPlay={play}
      onTimeUpdate={() => play && setCurrentTime()}
      >
      Your browser does not support the audio element.
    </audio>

    <div>
      <PrevButton onClick={() => setSong(songList[indexTrack - 1], indexTrack - 1)}>
        <PrevTrack />
      </PrevButton>
      <PlayButton
        onClick={() => playStop()}
        play={play}
      >
        <PlayIcon />
      </PlayButton>
      <NextButton onClick={() => setSong(songList[indexTrack + 1], indexTrack + 1)}>
        <NextTrack />
      </NextButton>

      <Timeline
        type="range"
        min="0.00001"
        max={(refs.audio && refs.audio.duration) || 0}
        value={currentTime || 0}
        step="0.00001"
        onChange={setSongTime}
      />

      <div>
        <label>Volume:</label>
        <input
          type="range"
          min="0.01"
          max="1"
          value={volume}
          onChange={setVolume}
          step="0.01"/>
      </div>
    </div>
  </div>
)


export default AudioPlayer;