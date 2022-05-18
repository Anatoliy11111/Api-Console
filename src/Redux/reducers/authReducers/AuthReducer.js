const initialState = {
  errorStatus: false,
  errorText: '',
  isLogin: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/SET-AUTH-ERROR': {
      return { ...state, errorText: action.error, errorStatus: true };
    }
    case 'auth/SET-AUTH-STATUS-IS-LOGIN': {
      return { ...state, isLogin: action.isLogin };
    }
    default:
      return state;
  }
};

export const setAuthError = error => ({ type: 'auth/SET-AUTH-ERROR', error });
export const isAuthStatus = isLogin => ({
  type: 'auth/SET-AUTH-STATUS-IS-LOGIN',
  isLogin,
});
