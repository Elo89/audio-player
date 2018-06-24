import React from 'react';
import SongView from '../SongView';
import VolumeIcon from './svgs/Volume';
import MuteVolumeIcon from './svgs/MuteVolume';
import {
  getAudioEvent,
  getDurationEvent,
} from '../../utils/eventUtils';
import {
  PlayStopButton,
  PrevButton,
  NextButton,
} from '../Buttons';
import {
  Timeline,
  VolumeSlider,
  Wrapper,
  ActionButtons,
  RightActionButtons,
  InteractionElement,
} from './styles';

const AudioPlayer = ({
  playStop,
  play,
  setSong,
  volume,
  setVolume,
  songList,
  currentTrack,
  currentTime,
  setCurrentTime,
  refs,
  setSongTime,
  indexTrack,
}) => (
  <Wrapper>

    <SongView currentTrack={currentTrack} />

    <InteractionElement>
      <ActionButtons>
        <PrevButton
          setSong={setSong}
          songList={songList}
          indexTrack={indexTrack}
        />
        <PlayStopButton
          play={play}
          playStop={playStop}
        />
        <NextButton
          setSong={setSong}
          songList={songList}
          indexTrack={indexTrack}
        />
      </ActionButtons>

      <Timeline
        type="range"
        min="0.00001"
        max={(getAudioEvent(refs, indexTrack) && getDurationEvent(refs, indexTrack)) || 0}
        value={currentTime || 0}
        step="0.00001"
        onChange={setSongTime}
      />
    </InteractionElement>

    <RightActionButtons>
      <VolumeIcon />
      <MuteVolumeIcon />
      <VolumeSlider
        type="range"
        min="0.01"
        max="1"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        step="0.01"/>
    </RightActionButtons>
  </Wrapper>
);


export default AudioPlayer;
