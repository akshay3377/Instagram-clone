import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../../Constants/api";
import { actionType } from "../Constants";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";



export const userLoginAction = (userInfo) => {
  const auth = getAuth();
  return (dispatch) => {
    dispatch({ type: actionType.USER_LOGIN_REQUEST });

    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((res) => {
        dispatch({ type: actionType.USER_LOGIN_SUCCESS, payload: res.user });

        sessionStorage.setItem(
          "userAuthToken",
          JSON.stringify(res.user.accessToken)
        );
      })
      .catch((error) =>
        dispatch({
          type: actionType.USER_LOGIN_ERROR,
          payload: `Wrong credentials. Try again`,
        })
      );

    // axios
    //   .post(BASE_URL + ENDPOINTS.LOGIN, userInfo)
    //   .then((res) => {
    //     dispatch({ type: actionType.USER_LOGIN_SUCCESS, data: res.data });
    //     console.log(res.data)
    //     localStorage.setItem("userAuthToken", JSON.stringify(res.data.token));
    //   })
    //   .catch((error) => {
    //     dispatch({
    //       type: actionType.USER_LOGIN_ERROR,
    //       msg: error.response.data.error,
    //     });
    //   });
  };
};

export const userLogoutAction = () => {
  return (dispatch) => {
    dispatch({ type: actionType.USER_LOGOUT_SUCCESS, payload: null });
    sessionStorage.removeItem("userAuthToken");
  };
};


export const loginWithFacebook = () => {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({ type: actionType.USER_LOGIN_SUCCESS, payload: res.user });
        sessionStorage.setItem(
          "userAuthToken",
          JSON.stringify(res.user.accessToken)
        );
      })
      .catch((err) => {
        dispatch({
          type: actionType.USER_LOGIN_ERROR,
          payload: `Wrong credentials. Try again`,
        });
      });
  };
};

// export const userLogoutAction = () => {
//   const auth = getAuth();
//   return (dispatch) => {
//     signOut(auth)
//       .then((res) => {
//         dispatch({ type: actionType.USER_LOGOUT_SUCCESS, payload: null });
//         console.log("akshay")
//         sessionStorage.removeItem("userAuthToken");
//       })
//       .catch((err) => {
//         console.log(err.message)
//         console.log("error akjhsy")
//       });
//   };
// };

// const EmailVerification = () => {
//   const handleSendVerificationEmail = () => {
//     const user = firebase.auth().currentUser;
//     user
//       .sendEmailVerification()
//       .then(() => {
//         // Email verification sent successfully
//         console.log('Email verification sent');
//       })
//       .catch((error) => {
//         // Handle error
//         console.log('Error sending email verification:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Email Verification</h2>
//       <button onClick={handleSendVerificationEmail}>Send Verification Email</button>
//     </div>
//   );
// };

// export default EmailVerification;
