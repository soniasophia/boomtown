import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { itemsReducer } from './reducer';

export default createStore(
  combineReducers({
      items: itemsReducer
  }),

  composeWithDevTools(
    applyMiddleware(
    thunk,
    logger
    )
  )
);
