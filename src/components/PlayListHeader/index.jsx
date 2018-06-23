import React from 'react';
import { Img, Flex, Title, Author, Description, PlayButton } from './styles';

const AlbumHeader = ({ title, author, photo, description, setSong, songList, playStop }) => (
  <Flex>
    <Img src={photo}/>
    <div>
      <Author>{author}</Author>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PlayButton onClick={() => {
          // setSong(songList[0], 0);
          playStop(true);
        }}>Play</PlayButton>
    </div>
  </Flex>

);

export default AlbumHeader;
