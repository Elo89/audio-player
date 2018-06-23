import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import AudioPlayer from './containers/AudioPlayer';
import albumMock from './albumMock'
import reducers from './reducers/createReducers';
import configureStore from './reducers/configureStore';


class App extends Component {

  render() {
    const store = configureStore({ reducers });

    return (
      <Provider store={store}>
        <AudioPlayer albumMock={albumMock} />
      </Provider>
    );
  }
}

export default App;
