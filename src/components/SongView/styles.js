import styled from 'styled-components';

export const Img = styled.div`
  height: 50px;
  width: 50px;
  background: ${({ src }) => src && `url(${src})`};
  background-size: cover;
  margin-right: 10px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 25%;

  @media only screen and (max-width: 600px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #333;
  }
`;

export const Title = styled.div`
  color: #FFF;
  font-size: 12px;
`;

export const Album = styled.div`
  color: #FFF;
  font-size: 9px;
`;
