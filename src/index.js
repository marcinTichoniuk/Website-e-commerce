import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './context';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root'));

serviceWorker.unregister();
