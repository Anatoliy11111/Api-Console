import Sendsay from 'sendsay-api';

import { isAuthStatus, setAuthError, setRequest, setResponse } from 'Redux/reducers';

const sendsay = new Sendsay({
  apiUrl: 'https://api.sendsay.ru/general/api/v100/json',
  auth: {
    login: 'canatolij@list.ru',
    sublogin: 'x_1652800416165752',
    password: 'jo4Joogee',
  },
});

export const isAuth = values => async dispatch => {
  sendsay
    .login({
      login: values.email,
      sublogin: values.sublogin,
      password: values.password,
    })
    .then(() => {
      dispatch(isAuthStatus(true));
    })
    .catch(rej => {
      dispatch(setAuthError(`${rej.id}, ${rej.explain}`));
    });
};

export const requestWithField = action => async dispatch => {
  sendsay
    .request(JSON.parse(action))
    .then(res => {
      dispatch(setRequest(JSON.parse(action)));
      dispatch(setResponse(res));
    })
    .catch(rej => {
      dispatch(setRequest(JSON.parse(action)));
      dispatch(setResponse(rej));
    });
};
