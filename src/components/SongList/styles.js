import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 320px);
  background: transparent;
  color: #FFF;
  font-size: 12px;
`;

export const Cell = styled.div`
  height: 40px;
  border-bottom: 1px solid #666;
  display: flex;
  align-items: center;
`;

export const IconsCell = styled(Cell)`
  width: 10%;
  justify-content: space-between;
  padding-right: 20px;

  @media only screen and (max-width: 600px) {
    width: 20%;
  }
`;

export const IconsCellHead = styled(IconsCell)`
  text-transform: uppercase;
  font-size: 10px;
  color: #AAA;
`;

export const TitleCell = styled(Cell)`
  width: 40%;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const TitleCellHead = styled(TitleCell)`
  text-transform: uppercase;
  font-size: 10px;
  color: #AAA;
`;

export const ArtistCell = styled(Cell)`
  width: 20%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ArtistCellHead = styled(ArtistCell)`
  text-transform: uppercase;
  font-size: 10px;
  color: #AAA;
`;

export const AlbumCell = styled(Cell)`
  width: 30%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const AlbumCellHead = styled(AlbumCell)`
  text-transform: uppercase;
  font-size: 10px;
  color: #AAA;
`;

export const Li = styled.div`
  list-style: none;
  display: flex;
`;

export const Ul = styled.div`
  padding: 0 20px;
`;
