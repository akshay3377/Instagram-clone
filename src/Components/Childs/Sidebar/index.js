import SidebarLink from "./SidebarLinks";
import { Outlet } from "react-router-dom";
import InstaIcon from "../SvgIcons/instagram";
import LogoutModal from "../Modals/LogoutModal";

const SideBar = () => {
  return (
    <div className="flex justify-center ">
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 hidden md:block z-40 h-screen xl:w-60 transition-transform -translate-x-full sm:translate-x-0 border border-r-1"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <div className="flex items-center pl-2.5 mb-5">
            <div className="my-[25px]">
              <img
                className="h-[29px] w-[103px] hidden xl:block"
                src={"/images/instagram-text-icon.png"}
                alt="logo"
              ></img>
              <div className="block xl:hidden p-2 hover:bg-gray-50 rounded-full ml-[-10px]">
                <InstaIcon />
              </div>
            </div>
          </div>

          <SidebarLink />
          <div className="absolute left-6 bottom-8  ">
            <LogoutModal />
          </div>
        </div>
      </aside>

      <Outlet />
    </div>
  );
};

export default SideBar;
