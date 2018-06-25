import styled from 'styled-components';
import { white, gray, defaultPadding, mobileBreakpoint } from '../../variablesCss';

export const Wrapper = styled.div`
  height: calc(100vh - 320px);
  background: transparent;
  color: ${white};
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
  padding-right: ${defaultPadding};

  ${mobileBreakpoint} {
    width: 20%;
  }
`;

export const IconsCellHead = styled(IconsCell)`
  text-transform: uppercase;
  font-size: 10px;
  color: ${gray};
`;

export const TitleCell = styled(Cell)`
  width: 40%;

  ${mobileBreakpoint} {
    width: 80%;
  }
`;

export const TitleCellHead = styled(TitleCell)`
  text-transform: uppercase;
  font-size: 10px;
  color: ${gray};
`;

export const ArtistCell = styled(Cell)`
  width: 20%;

  ${mobileBreakpoint} {
    display: none;
  }
`;

export const ArtistCellHead = styled(ArtistCell)`
  text-transform: uppercase;
  font-size: 10px;
  color: ${gray};
`;

export const AlbumCell = styled(Cell)`
  width: 30%;

  ${mobileBreakpoint} {
    display: none;
  }
`;

export const AlbumCellHead = styled(AlbumCell)`
  text-transform: uppercase;
  font-size: 10px;
  color: ${gray};
`;

export const Li = styled.div`
  list-style: none;
  display: flex;
  cursor: pointer;

  &:hover {
    background: rgba(130, 130, 130, .1);
  }

  &:first-child {
    background: none;
  }
`;

export const Ul = styled.div`
  padding: 0 ${defaultPadding};
`;
