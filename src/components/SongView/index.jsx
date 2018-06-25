import React from 'react';
import { Img, Flex, Title, Album } from './styles';

const SongView = ({ currentTrack: { title, photo, album } }) => (
  <Flex>
    <Img src={photo}/>
    <div>
      <Title>{title}</Title>
      <Album>{album}</Album>
    </div>
  </Flex>
);

export default SongView;
