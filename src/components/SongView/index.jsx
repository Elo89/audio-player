import React from 'react';
import { Img, Flex, Title, Album } from './styles';

const SongView = ({ currentTrack: { title, photoAlbum, album } }) => (console.log(title),
  <Flex>
    <Img src={photoAlbum}/>
    <div>
      <Title>{title}</Title>
      <Album>{album}</Album>
    </div>
  </Flex>
);

export default SongView;
