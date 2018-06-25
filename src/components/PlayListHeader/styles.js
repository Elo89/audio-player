import styled from 'styled-components';
import { Button } from '../Buttons';
import { white, defaultPadding, mobileBreackpoint } from '../../variablesCss';

export const Img = styled.div`
  height: 200px;
  min-width: 200px;
  background: ${({ src }) => src && `url(${src})`};
  background-size: cover;
  margin-right: ${defaultPadding};

  ${mobileBreackpoint} {
    margin: 0 0 ${defaultPadding};
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: ${defaultPadding};
  background: transparent;
  flex: 0 100% 0;

  ${mobileBreackpoint} {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  color: ${white};
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  padding: 5px 0 10px;
`;

export const Author = styled.div`
  color: ${white};
  font-size: 10px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Description = styled.div`
  color: #BBB;
  font-size: 9px;
`;

export const PlayButton = styled(Button)`
  color: ${white};
  font-size: 12px;
  font-weight: bold;
  background: ${({ play }) => play ? 'red' : 'green'};
  border-radius: 30px;
  padding: 10px 40px;
  margin-top: 10px
  border: none;
`;
