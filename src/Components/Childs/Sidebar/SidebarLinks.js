import { Link } from "react-router-dom";
import Profile from "../../Childs/SvgIcons/Profile";
import {
  MessageIcon,
  HomeIcon,
  SearchIcon,
  ExploreIcon,
  NotificationIcon,
  AddIcon,
  ReelIcon,
} from "../SvgIcons";
import UploadImageModal from "../Modals/uploadImage";
import { useState } from "react";
import UploadImage from "../Modals/uploadImage";
import ImageUploader from "../Modals/uploadImage";

const SidebarLink = () => {
  const [showImageUploader, setShowUploaderImage] = useState(false);

  const sideBarLinkContent = [
    { label: "Home", path: "dashboard", components: HomeIcon },
    {
      label: "Search",
      path: "search",
      components: SearchIcon,
      open: "postdata",
    },
    { label: "Explore", path: "explore", components: ExploreIcon },
    { label: "Reels", path: "reels", components: ReelIcon },
    { label: "Messages", path: "messages", components: MessageIcon },
    {
      label: "Notifications",
      path: "notifications",
      components: NotificationIcon,
    },
    // { label: "Create", path: "create", components: AddIcon },
    { label: "Profile", components: Profile },
  ];

  return (
    <div>
      {sideBarLinkContent?.map((item, index) => (
        <Link
          onClick={() => {
            console.log("akshayfwrv");
          }}
          to={item.path}
          key={index}
          className="flex items-center  mb-[10px]  p-2  mr-[10px] text-base font-normal text-gray-900 rounded-full   hover:bg-gray-50 "
        >
          <div className="xl:mr-[20px] transform transition hover:scale-110">
            <item.components />
          </div>
          <div className=" hidden xl:block font-bold">{item.label}</div>
        </Link>
      ))}

      {
        <div
          className="flex items-center  mb-[10px]  p-2  mr-[10px] text-base font-normal text-gray-900 rounded-full   hover:bg-gray-50 "
          onClick={() => {
            setShowUploaderImage(true)
          }}
        >
          <div className="xl:mr-[20px] transform transition hover:scale-110">
            <AddIcon />
          </div>
          <div className=" hidden xl:block font-bold">Create</div>
        </div>
      }

      {showImageUploader && <ImageUploader>{"akshay"}</ImageUploader>}
    </div>
  );
};

export default SidebarLink;
