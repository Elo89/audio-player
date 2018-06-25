import React from 'react';
import NextTrack from './NextTrack';
import { NextButtonStyle } from '../index';

const NextButton = ({
  indexTrack,
  setSong,
  songList,
  ...rest,
}) => (
  <NextButtonStyle
    onClick={() => setSong(songList[indexTrack + 1], indexTrack + 1, 'next')}
    disabled={indexTrack === songList.length - 1}
  >
    <NextTrack { ...rest } />
  </NextButtonStyle>
)


export default NextButton;
