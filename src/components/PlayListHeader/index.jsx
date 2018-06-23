import React, { Component } from 'react';
import { Img, Flex, Title, Author, Description } from './styles';

const AlbumHeader = ({ title, author, photo, description }) => (
  <Flex>
    <Img src={photo}/>
    <div>
      <Author>{author}</Author>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  </Flex>
);

export default AlbumHeader;
