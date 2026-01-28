
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
// Provider allows to connect redux store to react app. Provider works with context API
import { Provider } from 'react-redux';
import {store} from './src/store';

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;