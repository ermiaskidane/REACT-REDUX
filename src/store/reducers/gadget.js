import * as actionTypes from "../actions/actionTypes";

const initialState = {
  gadgets: {
    samsung: 3,
    iphone: 2,
    huawei: 1
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TECHNOLOGY:
      return {
        ...state
      };
    case actionTypes.ADD_TECHNOLOGY:
      return {
        ...state,
        gadgets: {
          ...state.gadgets,
          [action.techGadgetName]: state.gadgets[action.techGadgetName] + 1
        }
      };
    case actionTypes.REMOVE_TECHNOLOGY:
      return {
        ...state,
        gadgets: {
          ...state.gadgets,
          [action.techGadgetName]: state.gadgets[action.techGadgetName] - 1
        }
      };
    default:
      return state;
  }
};

export default reducer;
