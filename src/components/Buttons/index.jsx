import styled from 'styled-components';
import { white } from '../../variablesCss';

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  fill: ${white};

  &:focus {
    outline: 0;
  }

  &:disabled {
    fill: #666;
    cursor: not-allowed;
  }
`;

export const PlayButton = styled(Button)`
  border: ${({ play, isAudioPlayer }) => isAudioPlayer && play ? '1px' : '0'} solid ${white};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export const PrevButtonStyle = styled(Button)`
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export const NextButtonStyle = styled(Button)`
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export { default as PlayStopButton } from './PlayStopButton';
export { default as NextButton } from './NextButton';
export { default as PrevButton } from './PrevButton';
export { default as VolumeButton } from './VolumeButton';
