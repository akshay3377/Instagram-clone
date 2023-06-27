import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../../Constants/api";
import { actionType } from "../Constants";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

export const userSignupAction = (userInfo) => {
  const auth = getAuth();

  return (dispatch) => {
    dispatch({
      type: actionType.USER_SIGNUP_REQUEST,
    });
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: userInfo.fullname,
        })
          .then((res) => {
            console.log("updated", res.user);
          })
          .catch((error) => {});

        // sendEmailVerification(res.user)

        // .then((res) => console.log("Email verification sent"))
        // .catch((error) =>
        //   console.log("Error sending email verification:", error.message)
        // );

        dispatch({ type: actionType.USER_SIGNUP_SUCCESS, payload: res.user });
        // verifyEmail(res.user);
        sessionStorage.setItem(
          "userAuthToken",
          JSON.stringify(res.user.accessToken)
        );
      })
      .catch((error) => {
        dispatch({
          type: actionType.USER_SIGNUP_ERROR,
          payload: error.message,
        });
      });

    // axios
    //   .post(BASE_URL + ENDPOINTS.SIGNUP, userInfo)
    //   .then((res) => {
    //     dispatch({ type: actionType.USER_SIGNUP_SUCCESS, data: res.data });
    //     localStorage.setItem("userAuthToken", JSON.stringify(res.data));
    //   })
    //   .catch((err) =>
    //     dispatch({ type: actionType.USER_SIGNUP_ERROR, msg: err })
    //   );
  };
};
