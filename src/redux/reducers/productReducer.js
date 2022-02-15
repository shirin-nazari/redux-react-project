import { ActionTypes } from "../contans/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
  ],
};
//action distactyre
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return state;

    default:
      return state;
  }
};
