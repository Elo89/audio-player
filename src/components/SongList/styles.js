import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 320px);
  background: #222;
  color: #FFF;
  font-size: 12px;
`;

export const Cell = styled.div`
  height: 40px;
  border-bottom: 1px solid #666;
  display: flex;
  align-items: center;
`;

export const IconsCel = styled(Cell)`
  width: 10%;
  justify-content: space-between;
  padding-right: 20px;
`;

export const TitleCel = styled(Cell)`
  width: 40%;
`;

export const ArtistCel = styled(Cell)`
  width: 20%;
`;

export const AlbumCel = styled(Cell)`
  width: 30%;
`;

export const Li = styled.div`
  list-style: none;
  display: flex;
`;

export const Ul = styled.div`
  padding: 0 40px;
`;
