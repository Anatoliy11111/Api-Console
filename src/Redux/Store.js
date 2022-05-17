import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { AuthReducer } from 'Redux/reducers/authReducers/AuthReducer';

export const reducerRoot = combineReducers({
  AuthReducer,
});

export const store = legacy_createStore(reducerRoot, applyMiddleware(thunk));
