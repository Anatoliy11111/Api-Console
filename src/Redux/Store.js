import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { AppReducer } from 'Redux/reducers/appReducer/appReducer';
import { AuthReducer } from 'Redux/reducers/authReducers/AuthReducer';
import { RequestHistoryReducer } from 'Redux/reducers/responseReducer/RequestHistoryReducer';
import { ResponseReducer } from 'Redux/reducers/responseReducer/ResponseReducer';

export const reducerRoot = combineReducers({
  AppReducer,
  AuthReducer,
  ResponseReducer,
  RequestHistoryReducer,
});
let preloadedState;
let preloadedAuthState;
export const startState = localStorage.getItem('RequestHistoryReducer');
export const startAuthState = localStorage.getItem('AuthReducer');

if (startState) {
  preloadedState = JSON.parse(startState);
}
if (startAuthState) {
  preloadedAuthState = JSON.parse(startAuthState);
}

export const store = legacy_createStore(
  reducerRoot,
  {
    ...reducerRoot,
    RequestHistoryReducer: preloadedState,
    AuthReducer: preloadedAuthState,
  },
  applyMiddleware(thunk),
);

store.subscribe(() => {
  localStorage.setItem(
    'RequestHistoryReducer',
    JSON.stringify(store.getState().RequestHistoryReducer),
  );
  localStorage.setItem('AuthReducer', JSON.stringify(store.getState().AuthReducer));
});
