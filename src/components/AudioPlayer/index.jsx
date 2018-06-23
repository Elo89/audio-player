import React from 'react';
import { isEmpty } from 'lodash';
import SongList from '../SongList';
import SongView from '../SongView';
import PlayIcon from './svgs/PlayIcon';
import PrevTrack from './svgs/PrevTrack';
import NextTrack from './svgs/NextTrack';
import VolumeIcon from './svgs/Volume';
import {
  PlayButton,
  PrevButton,
  NextButton,
  Timeline,
  VolumeSlider,
  CurrentTime,
  Wrapper,
  ActionButtons,
  RightActionButtons,
  InteractionElement,
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

    <Wrapper>

      <SongView currentTrack={currentTrack} />

      <InteractionElement>
        <ActionButtons>
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
        </ActionButtons>

        <Timeline
          type="range"
          min="0.00001"
          max={(refs.audio && refs.audio.duration) || 0}
          value={currentTime || 0}
          step="0.00001"
          onChange={setSongTime}
        />
      </InteractionElement>


      <RightActionButtons>
        <VolumeIcon />
        <VolumeSlider
          type="range"
          min="0.01"
          max="1"
          value={volume}
          onChange={setVolume}
          step="0.01"/>
      </RightActionButtons>
    </Wrapper>
  </div>
)


export default AudioPlayer;
