import { actionType } from "../Constants";
const initialState = {
  post: [],
  // error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_POST:
      return { ...state, post: action.payload };
    case actionType.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
