import Sendsay from 'sendsay-api';

import {
  authData,
  isAuthStatus,
  setAuthError,
  setRequest,
  setResponse,
  setStatusLoading,
} from 'Redux/reducers';

const sendsay = new Sendsay({
  apiUrl: 'https://api.sendsay.ru/general/api/v100/json',
});

export const isAuth = values => dispatch => {
  dispatch(setStatusLoading(true));
  sendsay
    .login({
      login: values.email,
      sublogin: values.sublogin,
      password: values.password,
    })
    .then(() => {
      dispatch(isAuthStatus(true));
      dispatch(
        authData({
          login: values.email,
          sublogin: values.sublogin,
          password: values.password,
        }),
      );
    })
    .catch(rej => {
      dispatch(setAuthError(`${rej.id}, ${rej.explain}`));
    })
    .finally(() => dispatch(setStatusLoading(false)));
};

export const requestWithField = (action, authData) => dispatch => {
  dispatch(setStatusLoading(true));
  sendsay.auth = authData;
  sendsay
    .request(JSON.parse(action))
    .then(res => {
      dispatch(setRequest(JSON.parse(action)));
      dispatch(setResponse(res));
    })
    .catch(rej => {
      // dispatch(setRequest(JSON.parse(action)));
      dispatch(setResponse(rej));
    })
    .finally(() => dispatch(setStatusLoading(false)));
};
