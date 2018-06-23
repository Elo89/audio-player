import styled from 'styled-components';

export const Img = styled.div`
  height: 200px;
  min-width: 200px;
  background: ${({ src }) => src && `url(${src})`};
  background-size: cover;
  margin-right: 20px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: #222;
  flex: 0 100% 0;
`;

export const Title = styled.div`
  color: #FFF;
  font-size: 18px;
`;

export const Author = styled.div`
  color: #FFF;
  font-size: 12px;
`;

export const Description = styled.div`
  color: #FFF;
  font-size: 9px;
`;
