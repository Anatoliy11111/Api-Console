import Sendsay from 'sendsay-api';

import { isAuthStatus, setAuthError } from 'Redux/reducers';

const sendsay = new Sendsay({});

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
    .catch(res => {
      dispatch(setAuthError(`${res.id}, ${res.explain}`));
    });
};
