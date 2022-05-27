const initialState = {
  request: [],
};

export const RequestHistoryReducer = (state = initialState, action) => {
  const MaxLengthArray = 14;
  switch (action.type) {
    case 'request/SET-TRY-REQUEST': {
      const newState = { ...state };
      if (newState.request.length === MaxLengthArray) {
        newState.request.pop();
      }
      const filterState = newState.request.filter(
        act => act.action !== action.request.action,
      );
      return { newState, request: [action.request, ...filterState] };
    }
    case 'request/DELETE-REQUEST': {
      return { ...state, request: state.request.filter(req => req !== action.request) };
    }
    default:
      return state;
  }
};

export const setRequest = request => ({ type: 'request/SET-TRY-REQUEST', request });
export const deleteRequest = request => ({ type: 'request/DELETE-REQUEST', request });
