import styled from 'styled-components';

export const PlayButton = styled.button`
  background: ${({ play }) => play ? 'red' : 'blue'};
  height: 40px;
  width: 40px;
`;

export const PrevButton = styled.button`
  background: green;
  height: 40px;
  width: 40px;
`;

export const NextButton = styled.button`
  background: yellow;
  height: 40px;
  width: 40px;
`;

export const CurrentTime = styled.div`
  width: ${({ percentage }) => percentage}%;
  background: red;
  height: 10px;
`;

export const Timeline = styled.input`
  -webkit-appearance: none;
  width: 300px;
  height: 8px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
`;
