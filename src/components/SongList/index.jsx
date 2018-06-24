import React from 'react';
import { isEmpty } from 'lodash';
import PlusIcon from './svgs/PlusIcon';
import PlayIcon from './svgs/PlayIcon';
import {
  Wrapper,
  IconsCellHead,
  TitleCellHead,
  ArtistCellHead,
  AlbumCellHead,
  IconsCell,
  TitleCell,
  ArtistCell,
  AlbumCell,
  Ul,
  Li,
} from './styles';

const SongList = ({
  songList,
  setSong,
  playStop,
  play,
  indexTrack,
  refs,
  volume,
  currentTrack,
  setCurrentTime,
}) => (
  <Wrapper>
    <Ul>
      <Li>
        <IconsCellHead></IconsCellHead>
        <TitleCellHead>Title</TitleCellHead>
        <ArtistCellHead>Artist</ArtistCellHead>
        <AlbumCellHead>Album</AlbumCellHead>
      </Li>
      {songList.map(({ title, src, artist, album }, i) => (
        <Li
          key={src}
          onClick={() => {
            if (!play) {
              playStop(true);
            }
            setSong(songList[i], i);
          }}
          >
          {(indexTrack === i || indexTrack === i - 1 || indexTrack === i + 1) &&
            <audio
              ref={(audio) => refs.store(`audio-${i}`, audio)}
              volume={(indexTrack === i) ? volume : null}
              preload="auto"
              src={src}
              autoPlay={(indexTrack === i) && play}
              onTimeUpdate={() => play && setCurrentTime()}
            >
              Your browser does not support the audio element.
            </audio>
          }
          <IconsCell>
            {indexTrack === i ?
              <PlayIcon
                width="14px"
                fill="#fff"
              />
            :
              <div />
            }
            <PlusIcon />
          </IconsCell>
          <TitleCell>{title}</TitleCell>
          <ArtistCell>{artist}</ArtistCell>
          <AlbumCell>{album}</AlbumCell>
        </Li>
      )
    )}
  </Ul>
  </Wrapper>
);

export default SongList;
