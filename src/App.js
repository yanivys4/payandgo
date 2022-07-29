import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import StackContainer from '../src/screens/StackContainer';

const App = () => {
  return (
    <Provider store={store}>
      <StackContainer/>
    </Provider>
  );
}

export default App;
