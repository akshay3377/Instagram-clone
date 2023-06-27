import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import axios from "axios";
export const firebaseConfig = {
  apiKey: "AIzaSyD1Mcd-6bdOgpCjHPp-lOGaIPnCZ-pmWFg",
  authDomain: "react-app-d93f6.firebaseapp.com",
  projectId: "react-app-d93f6",
  storageBucket: "react-app-d93f6.appspot.com",
  messagingSenderId: "627126429377",
  appId: "1:627126429377:web:51ffdd14ee6d9c7f869640",
};

initializeApp(firebaseConfig);

const databaseConnection = getFirestore();

const auth = getAuth();

async function getIdToken() {
  const token = await auth.currentUser.getIdToken();
  return token;
}

export const postsDB = collection(databaseConnection, "posts");
export const storiesDB = collection(databaseConnection, "stories");


export const user = collection(databaseConnection, "users");
// const getUserPosts = async (userId) => {
//   try {
//     const token = await getIdToken();

//     const res = await axios.get(`/users/${userId}/posts`, {
//       headers: { Authorization: "Bearer " + token },
//     });

//     if (res.status === 200) {
//       return res.data;
//     }
//   } catch (err) {
//     throw err;
//     // dispathch state error to be whatwever
//   }
// };
