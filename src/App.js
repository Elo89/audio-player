import React, { Component } from 'react';
import AudioPlayer from './components/AudioPlayer';
import songListMock from './songListMock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AudioPlayer songList={songListMock} />
      </div>
    );
  }
}

export default App;
