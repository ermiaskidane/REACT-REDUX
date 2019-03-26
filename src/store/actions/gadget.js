import * as actionTypes from "./actionTypes";

export const fetchTech = () => {
  return {
    type: actionTypes.FETCH_TECHNOLOGY
  };
};

export const addTech = () => {
  return {
    type: actionTypes.ADD_TECHNOLOGY
  };
};

export const removeTech = () => {
  return {
    type: actionTypes.REMOVE_TECHNOLOGY
  };
};
