const initialState = {
  errorStatus: false,
  errorText: '',
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/SET-AUTH-ERROR': {
      return { ...state, errorText: action.error, errorStatus: true };
    }
    default:
      return state;
  }
};

export const setAuthError = error => ({ type: 'auth/SET-AUTH-ERROR', error });
