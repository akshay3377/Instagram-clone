import { actionType } from "../Constants";
const initialState = {
  stories: [],
  // error: "",
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_STORIES:
      return { ...state, stories: action.payload };
    case actionType.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
