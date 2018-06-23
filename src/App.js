import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import AudioPlayer from './containers/AudioPlayer';
import playlistMock from './playlistMock'
import reducers from './reducers/createReducers';
import configureStore from './reducers/configureStore';


class App extends Component {

  render() {
    const store = configureStore({ reducers });

    return (
      <Provider store={store}>
        <AudioPlayer playlist={playlistMock} />
      </Provider>
    );
  }
}

export default App;
