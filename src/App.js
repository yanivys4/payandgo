import React,{useEffect} from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import StackContainer from '../src/screens/StackContainer';
import AuthMiddleware from './screens/AuthMiddelware';

const App = () => {

  return (
    <Provider store={store}>
      <AuthMiddleware>
        <StackContainer/>
      </AuthMiddleware>
    </Provider>
  );
}

export default App;
