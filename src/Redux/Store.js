import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { AuthReducer } from 'Redux/reducers/authReducers/AuthReducer';
import { RequestHistoryReducer } from 'Redux/reducers/responseReducer/RequestHistoryReducer';
import { ResponseReducer } from 'Redux/reducers/responseReducer/ResponseReducer';

export const reducerRoot = combineReducers({
  AuthReducer,
  ResponseReducer,
  RequestHistoryReducer,
});
let preloadedState;
export const startState = localStorage.getItem('RequestHistoryReducer');

if (startState) {
  preloadedState = JSON.parse(startState);
}

export const store = legacy_createStore(
  reducerRoot,
  { ...reducerRoot, RequestHistoryReducer: preloadedState },
  applyMiddleware(thunk),
);

store.subscribe(() => {
  localStorage.setItem(
    'RequestHistoryReducer',
    JSON.stringify(store.getState().RequestHistoryReducer),
  );
});
