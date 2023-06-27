import React , {useState} from "react";
import MoreLogoutIcon from "../SvgIcons/Logout";

import { useDispatch } from "react-redux";
import { userLogoutAction } from "../../../Redux/Actions/Login";

function ModalComponent({ children, shown, close }) {
  return shown ? (
    <div
      className=" fixed top-0 left-0 right-0 bottom-0 z-50"
      onClick={() => {
        close();
      }}
    >
      <div className="absolute bottom-12 left-6">
        <div
          className="border-0 w-[200px] my-6 rounded-lg shadow-lg relative flex flex-col  bg-white"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </div>
  ) : null;
}

// -----------------------LOGOUT MODAL-----------------------------------

const LogoutModal = () => {
  const dispatch = useDispatch();

  const [modalShown, toggleModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          toggleModal(!modalShown);
        }}
      >
        <div className="flex">
          <MoreLogoutIcon />
          <div className="hidden xl:block ">More</div>
        </div>
      </button>
      <ModalComponent
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <>
          <button
            onClick={() => {
              dispatch(userLogoutAction());
       
            }}
            className="text-black-500 background-transparent font-bold px-6 py-2"
            type="button"
          >
            Log out
          </button>
        </>
      </ModalComponent>
    </>
  );
};

export default LogoutModal;
