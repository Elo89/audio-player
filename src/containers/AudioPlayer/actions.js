import { createAction } from 'redux-actions-helpers';

// Play / Stop
export const audioPlayerPlayStop = createAction('APP/AUDIOPLAYER/STATUS', status => ({ status }));

export const audioPlayerVolume = createAction('APP/AUDIOPLAYER/VOLUME', volume => ({ volume }));

export const audioPlayerSetSong = createAction('APP/AUDIOPLAYER/CURRENTSONG', (song, indexTrack) => ({ song, indexTrack }));
