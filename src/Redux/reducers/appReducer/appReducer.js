const initialState = {
  preloader: false,
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'app/SET-IS-LOADING': {
      return { ...state, preloader: action.isLoading };
    }
    default:
      return state;
  }
};

export const setStatusLoading = isLoading => ({ type: 'app/SET-IS-LOADING', isLoading });
