import styled from 'styled-components';

export const Img = styled.div`
  height: 200px;
  min-width: 200px;
  background: ${({ src }) => src && `url(${src})`};
  background-size: cover;
  margin-right: 20px;

  @media only screen and (max-width: 600px) {
    margin: 0 0 20px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: transparent;
  flex: 0 100% 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  color: #FFF;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  padding: 5px 0 10px;
`;

export const Author = styled.div`
  color: #FFF;
  font-size: 10px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Description = styled.div`
  color: #BBB;
  font-size: 9px;
`;

export const PlayButton = styled.button`
  color: #FFF;
  font-size: 12px;
  font-weight: bold;
  background: green;
  border-radius: 30px;
  padding: 10px 40px;
  margin-top: 10px
  border: none;
`;
