import * as actionTypes from "../actions/actionTypes";

export const fillSuccessful = formData => {
  return {
    type: actionTypes.ADD_DETAIL,
    contactData: formData
  };
};

export const removeDetail = indexDetail => {
  return {
    type: actionTypes.DELETE_DETAILS,
    detailIndex: indexDetail
  }
}
