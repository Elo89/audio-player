import React from 'react';
import PlayIcon from './PlayIcon';
import StopIcon from './StopIcon';
import { PlayButton } from '../index';

const PlayStopButton = ({
  play,
  playStop,
  ...rest,
}) => (
  <PlayButton
    isAudioPlayer={!!playStop}
    onClick={() => playStop && playStop()}
    play={play}
    >
    {!play ?
      <PlayIcon { ...rest } />
      :
      <StopIcon { ...rest } />
    }
  </PlayButton>
)


export default PlayStopButton;
