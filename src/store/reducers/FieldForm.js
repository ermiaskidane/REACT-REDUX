import * as actionTypes from "../actions/actionTypes";

const initialState = {
  Data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DETAIL:
      const concatData = {
        ...action.contactData,
        id: new Date()
      };
      return {
        ...state,
        Data: state.Data.concat(concatData)
      };
    case actionTypes.DELETE_DETAILS:
      return {
        ...state,
        Data: state.Data.filter(result => result.id !== action.detailIndex)
      };
    default:
      return state;
  }
};

export default reducer;
