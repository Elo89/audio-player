import React from 'react';
import PrevTrack from './PrevTrack';
import { PrevButtonStyle } from '../index';

const PrevButton = ({
  indexTrack,
  setSong,
  songList,
  ...rest,
}) => (
  <PrevButtonStyle
    onClick={() => setSong(songList[indexTrack - 1], indexTrack - 1, 'prev')}
    disabled={indexTrack === 0}
  >
    <PrevTrack />
  </PrevButtonStyle>
)


export default PrevButton;
