import { actionType } from "../Constants";

export const signupReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_SIGNUP_REQUEST:
      return {
        // loading: true,
      };
    case actionType.USER_SIGNUP_SUCCESS:
      return { userInfo: action.payload };
    case actionType.USER_SIGNUP_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};





// import { actionType } from "../Constants";


// const initialState = {
//   userInfo: [],
//   error: "",
// };
// export const signupReducer = (state =initialState , action) => {
//   switch (action.type) {
//     case actionType.USER_SIGNUP_REQUEST:
//       return {
//         // loading: true,
//       };
//     case actionType.USER_SIGNUP_SUCCESS:
//       return { ...state, userInfo: action.payload };
//       // return { userInfo: action.data };
//     case actionType.USER_SIGNUP_ERROR:
//       return { ...state, error: action.payload };
//       // return { error: action.msg };
//     default:
//       return state;
//   }
// };
