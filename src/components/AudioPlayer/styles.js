import styled from 'styled-components';

export const Button = styled.button`
  &:focus {
    outline:0;
  }
`;

export const PlayButton = styled(Button)`
  background: transparent;
  border: ${({ play }) => play ? '1px' : '0'} solid #FFF;
  border-radius: 50%;
  fill: #fff;
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export const PrevButton = styled(Button)`
  background: transparent;
  border: none;
  fill: #fff;
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export const NextButton = styled(Button)`
  background: transparent;
  border: none;
  fill: #fff;
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export const CurrentTime = styled.div`
  width: ${({ percentage }) => percentage}%;
  background: red;
  height: 10px;
`;

export const Timeline = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin: 10px 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;

export const VolumeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin-left: 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  height: 80px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const RightActionButtons = styled(ActionButtons)`
  padding: 0 20px;
  width: 25%;
`;

export const InteractionElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
