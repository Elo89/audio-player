import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:disabled {
    fill: #666;
    cursor: not-allowed;
  }
`;

export const PlayButton = styled(Button)`
  border: ${({ play, isAudioPlayer }) => isAudioPlayer && play ? '1px' : '0'} solid #FFF;
  border-radius: 50%;
  fill: #fff;
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export const PrevButtonStyle = styled(Button)`
  border: none;
  fill: #fff;
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export const NextButtonStyle = styled(Button)`
  border: none;
  fill: #fff;
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export { default as PlayStopButton } from './PlayStopButton';
export { default as NextButton } from './NextButton';
export { default as PrevButton } from './PrevButton';
export { default as VolumeButton } from './VolumeButton';
