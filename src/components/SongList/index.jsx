import React, { Component } from 'react';

const SongList = ({ songList, setSong, playStop, play }) => (
  <ul>
    {songList.map(({ title, src }, i) =>
      <li
        key={src}
        onClick={() => {
          console.log('rtyuytyu', i);
          playStop(true);
          setSong(songList[i], i);
        }}
      >
        {title}
      </li>
    )}
  </ul>
);

export default SongList;
