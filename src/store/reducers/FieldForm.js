import * as actionTypes from "../actions/actionTypes";

const initialState = {
  Data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DETAIL:
      return {
        ...state,
        Data: state.Data.concat(action.contactData)
      };
    default:
      return state;
  }
};

export default reducer;
