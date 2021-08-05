import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';
import stores from './stores';

const Routes = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Routes;
