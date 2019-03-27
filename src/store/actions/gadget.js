import * as actionTypes from "./actionTypes";

export const fetchTech = () => {
  return {
    type: actionTypes.FETCH_TECHNOLOGY
  };
};

export const addTech = techName => {
  return {
    type: actionTypes.ADD_TECHNOLOGY,
    techGadgetName: techName
  };
};

export const removeTech = techName => {
  return {
    type: actionTypes.REMOVE_TECHNOLOGY,
    techGadgetName: techName
  };
};
