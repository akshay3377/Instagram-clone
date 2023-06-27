import HomePage from "../Pages/HomePage/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../Components/Childs/SvgIcons/loginForm";
import SideBar from "../Components/Childs/Sidebar";
import Dashboard from "../Pages/Dashboard";
import ImagesStories from "../Components/Childs/Story";
import { PrivateRoutes, PublicRoutes } from "./layout";
import DefaultPage from "../Pages/Default/index.js";
import SignupForm from "../Components/Pagination";
import { ROUTES } from "./routes.js";
import PostsDetails from "../Components/Childs/Modals/PostsModal.js";
import Explore from "../Pages/Explore";
import PostModal from "../Components/PostModal";
import ResetPaswordForm from "../Pages/ResetPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginForm />} />
          <Route path={ROUTES.SIGNUP} element={<SignupForm />} />
          <Route
            path={ROUTES.PASSWORD_RESET}
            element={<ResetPaswordForm />}
          />
          <Route path={ROUTES.DEFAULT} element={<DefaultPage />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<SideBar />}>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.SEARCH} />
            <Route path={ROUTES.EXPLORE} element={<Explore />} />
            <Route path="post/:id" element={<PostModal />} />
            <Route path={ROUTES.REELS} />
            <Route path={ROUTES.STORY} element={<ImagesStories />} />
            <Route path={ROUTES.MESSAGES} />
            <Route path={ROUTES.NOTIFICATIONS} />
            {/* <Route path={ROUTES.CREATE} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
