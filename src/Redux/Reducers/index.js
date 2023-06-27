import { storyReducer } from "./storiesReducer";
import { postReducer } from "./postsReducer";
import { signupReducer } from "./signupReducer";
import { userLoginReducer } from "./loginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  storyReducer,
  postReducer,
  signupReducer,
  userLoginReducer,
});
export default rootReducer;
