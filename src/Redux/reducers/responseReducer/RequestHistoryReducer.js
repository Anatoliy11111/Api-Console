const initialState = {
  request: [],
};

export const RequestHistoryReducer = (state = initialState, action) => {
  const MaxLengthArray = 14;
  switch (action.type) {
    case 'request/SET-TRY-REQUEST': {
      const newState = state;
      if (state.length === MaxLengthArray) {
        newState.pop();
      }
      return { ...newState, request: [...newState.request, action.request] };
    }
    default:
      return state;
  }
};

export const setRequest = request => ({ type: 'request/SET-TRY-REQUEST', request });
