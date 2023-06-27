import { Branding } from "../../../Constants/facebookButton";
import FacebookSvg from "../SvgIcons/facebook";

import { useDispatch } from "react-redux";
import { loginWithFacebook } from "../../../Redux/Actions/auth";
const FacebookRedirect = ({ fbButtonStyle }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(loginWithFacebook());
  };

  return (
    <div className="flex justify-center">
      <button
        className={
          fbButtonStyle + "h-[34px] w-[268px] rounded-md text-[14px] font-bold"
        }
        onClick={() => {
          handleSubmit();
        }}
      >
        {" "}
        <FacebookSvg /> {Branding.BRAND_TITLE}
      </button>
    </div>
  );
};

export default FacebookRedirect;
