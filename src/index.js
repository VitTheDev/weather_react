import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducers from './components/reducers';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(thunk));

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>{app}</Provider>,
  document.querySelector('#root')
);
