import React from 'react';
import { Img, Flex, Title, Author, Description, PlayButton } from './styles';

const AlbumHeader = ({
  title,
  author,
  photo,
  description,
  playStop,
  play,
}) => (
  <Flex>
    <Img src={photo}/>
    <div>
      <Author>{author}</Author>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PlayButton
        onClick={() => playStop()}
        play={play}
      >
        {play ? 'Stop' : 'Play'}
      </PlayButton>
    </div>
  </Flex>

);

export default AlbumHeader;
