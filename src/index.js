import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import Routes from './routes.js';
import reducers from './reducers';
import promise from 'redux-promise';
import { useScroll } from 'react-router-scroll';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={Routes} render={applyRouterMiddleware(useScroll())}/>
  </Provider>
  , document.querySelector('.container'));
