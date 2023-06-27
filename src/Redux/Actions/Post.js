// import axios from "axios";
// import { BASE_URL } from "../../Constants/api";
import { actionType } from "../Constants";
import { getDocs } from "firebase/firestore";
import { postsDB } from "../../Constants/firebase";

export const fetchInstagramPosts = () => {
  return (dispatch) => {
    getDocs(postsDB)
      .then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });

        dispatch({ type: actionType.FETCH_POST, payload: data });
      })
      .catch((err) => {
        console.log("error", err.message);
      });

    // axios
    //   .get("http://localhost:8001/posts", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     dispatch({ type: actionType.FETCH_POST, data: res.data });
    //   })
    //   .catch((err) => dispatch({ type: "ERROR", msg: "Unable to fetch data" }));
  };
};
