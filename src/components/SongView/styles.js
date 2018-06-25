import styled from 'styled-components';
import {
  white,
  darkGray,
  defaultPadding,
  mobileBreackpoint,
} from '../../variablesCss';

export const Img = styled.div`
  height: 50px;
  min-width: 50px;
  background: ${({ src }) => src && `url(${src})`};
  background-size: cover;
  margin-right: 10px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: ${defaultPadding};
  width: 25%;

  ${mobileBreackpoint} {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: ${darkGray};
  }
`;

export const Title = styled.div`
  color: ${white};
  font-size: 12px;

  {mobileBreackpoint} {
    font-size: 10px;
  }
`;

export const Album = styled.div`
  color: ${white};
  font-size: 9px;

  ${mobileBreackpoint} {
    font-size: 7px;
  }
`;
