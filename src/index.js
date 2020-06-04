import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware  from 'redux-thunk'
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import ErrorBoundary from './containers/ErrorBoundary'

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <ErrorBoundary>
          <App/>
      </ErrorBoundary> 
    </Provider>
  </Fragment>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();