import Card from "../UI/Card";
import OTPlabel from "../../images/Screenshot 2023-03-05 at 01-23-43 Sign up • Instagram.png";
import Handler from "../Handler";
import SwitchType from "./SwitchType";
import AdditionalPage from "./Download";
const OTPVerification = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Card>
        <div className="flex justify-center">
          <img src={OTPlabel} alt="otp"></img>
        </div>
        <div className="flex justify-center">Just one more step</div>

        <div className="text-center">
          Enter the 6-digit code we sent to: 9334206593
        </div>

        <div className="relative m-auto w-[268px] my-[3px] rounded bg-[#fafafa]  border border-1">
          <input
            type="text"
            className="block px-2.5 pb-1.5 pt-5 w-full outline-none text-sm text-black-900 bg-[#fafafa] 
           peer"
            placeholder=" "
          />
          <label
            className="absolute 
            text-sm 
            text-[#8e8e8e]
            text-[10px]
             duration-300 
             transform -translate-y-4 scale-75 
             top-4 
             z-10 
             origin-[0] 
             left-2.5 
             peer-placeholder-shown:scale-100 
             peer-placeholder-shown:translate-y-0"
          >
            {"######"}
          </label>
        </div>

        <Handler buttonTitle={"Confirm"}></Handler>
        <div className="flex justify-center">Resend new code</div>
      </Card>
      <SwitchType
        staticLabel={"Have an account? "}
        buttonTitle={"Log in"}
      ></SwitchType>
      <AdditionalPage></AdditionalPage>
    </div>
  );
};

export default OTPVerification;
