import { ActionTypes } from "../contans/action-types";

const initialState = {
  products: [],
};
//action distactyre
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
