import React, { Component } from 'react';

const SongList = ({ songList, setSong, playStop }) => (
  <ul>
    {songList.map(({ title, src }, i) =>
      <li
        key={src}
        onClick={() => {
          setSong(i);
          playStop(true)
        }}>{title}</li>
    )}
  </ul>
);

export default SongList;
