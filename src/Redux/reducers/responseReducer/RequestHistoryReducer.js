const initialState = [];

export const RequestHistoryReducer = (state = initialState, action) => {
  const MaxLengthArray = 14;
  switch (action.type) {
    case 'request/SET-TRY-REQUEST': {
      const newState = state;
      if (state.length === MaxLengthArray) {
        newState.pop();
      }
      return [action.request, ...newState];
    }
    default:
      return state;
  }
};

export const setRequest = request => ({ type: 'request/SET-TRY-REQUEST', request });
