import React from 'react';
import VolumeIcon from './VolumeIcon';
import MuteIcon from './MuteIcon';
import { Button } from '../index';

const VolumeButton = ({
  setVolume,
  volume,
  ...rest,
}) => (
  <Button
    onClick={() => volume > 0 ? setVolume(0) : setVolume(1)}
  >
    {volume ?
        <VolumeIcon { ...rest } />
      :
        <MuteIcon { ...rest } />
    }
  </Button>
)


export default VolumeButton;
