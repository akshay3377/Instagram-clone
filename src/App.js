import Router from "./Routes/index.js";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// const auth = getAuth();

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("this is the user", user);
//   }
// });

import { useNavigate } from "react-router-dom";

const App = () => {
  // const auth = getAuth();

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log("this is the user", user);
  //   }
  // });

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
