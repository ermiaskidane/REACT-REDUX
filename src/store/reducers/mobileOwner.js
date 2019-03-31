import * as actionTypes from "../actions/actionTypes";

const initialState = {
  owner: [
    {
      name: "ermias",
      type: "huawei"
    },
    {
      name: "natu",
      type: "samsung"
    },
    {
      name: "kokobe",
      type: "iphone"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OWNER_MOBILE:
      return {
        ...state.owner
      };
    default:
      return state;
  }
};

export default reducer;
