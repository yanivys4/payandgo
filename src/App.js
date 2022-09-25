import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import StackContainer from '../src/screens/StackContainer';
import AuthMiddleware from './screens/AuthMiddelware';
import {REACT_APP_AUTH0_DOMAIN,REACT_APP_AUTH0_CLIENT_ID} from "@env";


const App = () => {
  console.log(REACT_APP_AUTH0_DOMAIN);
  return (
    <Provider store={store}>
      <AuthMiddleware>
        <StackContainer/>
      </AuthMiddleware>
    </Provider>
  );
}

export default App;
