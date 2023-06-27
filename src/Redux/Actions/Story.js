// import axios from "axios";
// import { BASE_URL } from "../../Constants/api";
import { actionType } from "../Constants";
import { storiesDB  , user} from "../../Constants/firebase";
import { getDocs } from "firebase/firestore";

export const fetchInstagramStories = () => {
  return (dispatch) => {
    getDocs(storiesDB)
      .then((snapshot) => {
        let book = [];
        snapshot.docs.forEach((doc) => {
          book.push({ ...doc.data(), id: doc.id });
        });
        // console.log(book);
        dispatch({ type: actionType.FETCH_STORIES, payload: book });
      })
      .catch((err) => {
        console.log("error", err.message);
      });



      getDocs(user)
      .then((snapshot) => {
        let book = [];
        snapshot.docs.forEach((doc) => {
          book.push({ ...doc.data(), id: doc.id });
        });
        console.log("extraaaa" , book);
        // dispatch({ type: actionType.FETCH_STORIES, payload: book });
      })
      .catch((err) => {
        console.log("error", err.message);
      });



      // export const user = collection(databaseConnection, "users");
    // axios
    //   .get("http://localhost:8000/stories")
    //   .then((res) => {
    //     console.log("redux story", res);
    //     dispatch({ type: actionType.FETCH_STORIES, data: res.data });
    //   })
    //   .catch((err) => dispatch({ type: "ERROR", msg: "Unable to fetch data" }));
  };
};

