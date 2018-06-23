import React from 'react';
import { Wrapper, IconsCel, TitleCel, ArtistCel, AlbumCel, Ul, Li } from './styles';
import PlusIcon from './svgs/Plus';

const SongList = ({ songList, setSong, playStop, play }) => (
  <Wrapper>
    <Ul>
      <Li>
        <IconsCel></IconsCel>
        <TitleCel>Title</TitleCel>
        <ArtistCel>Artist</ArtistCel>
        <AlbumCel>Album</AlbumCel>
      </Li>
      {songList.map(({ title, src, artist, album }, i) =>
      <Li
        key={src}
        onClick={() => {
          if (!play) {
            playStop(true);
          }
          setSong(songList[i], i);
        }}
        >
        <IconsCel><PlusIcon /></IconsCel>
        <TitleCel>{title}</TitleCel>
        <ArtistCel>{artist}</ArtistCel>
        <AlbumCel>{album}</AlbumCel>
      </Li>
    )}
  </Ul>
  </Wrapper>
);

export default SongList;
