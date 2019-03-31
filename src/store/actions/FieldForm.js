import * as actionTypes from "../actions/actionTypes";

export const fillSuccessful = formData => {
  return {
    type: actionTypes.ADD_DETAIL,
    contactData: formData
  };
};
