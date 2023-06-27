import { actionType } from "../Constants";

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case actionType.USER_LOGIN_SUCCESS:
      return { ...state, userInfo: action.payload };
    case actionType.USER_LOGIN_ERROR:
      return { ...state, error: action.payload };
    case actionType.USER_LOGOUT_SUCCESS:
      return { userInfo: action.payload };
    default:
      return state;
  }
};

// import { actionType } from "../Constants";

// const initialState = {
//   userInfo: null,
//   loading: false,
//   error: null,
// };

// export const userLoginReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionType.USER_LOGIN_REQUEST:
//       return { ...state, loading: true };
//     case actionType.USER_LOGIN_SUCCESS:
//       return { ...state, userInfo: action.payload };
//     case actionType.USER_LOGIN_ERROR:
//       return { ...state, error: action.payload, loading: false };
//     case actionType.USER_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };
