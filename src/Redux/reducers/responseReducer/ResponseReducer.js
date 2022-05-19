const initialState = [];

export const ResponseReducer = (state = initialState, action) => {
  const MaxLengthArray = 14;
  switch (action.type) {
    case 'response/SET-TRY-RESPONSE': {
      const newState = state;
      if (state.length === MaxLengthArray) {
        newState.pop();
      }
      return [action.obj, ...newState];
    }
    default:
      return state;
  }
};

export const setResponse = obj => ({ type: 'response/SET-TRY-RESPONSE', obj });
