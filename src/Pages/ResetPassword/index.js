import Card from "../../Components/UI/Card";
import Handler from "../../Components/Handler";
import BackButton from "../../Components/Handler/BackButton";
import { useState } from "react";
import InputFields from "../../Components/Childs/InputField/InputField";
import ORdivider from "../../Components/Childs/SvgIcons/ORDivider";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/layout/Footer";
import { resetPassword } from "../../Constants/resetpassword";
// import axios from "axios";
// import { BASE_URL, ENDPOINTS } from "../../Constants/api";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Toast from "../../Components/Toast";
import { toast } from "react-toastify";

const ResetPaswordForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const handleForgotEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        toast.success("An email sent to your account!");
        setEmail("");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="h-[60px]  border border-1 flex items-center">
        <div className="pl-[160px] ">
          <img
            className="h-[28px]"
            src={"/images/instagram-text-icon.png"}
            alt="resetinstalogo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>

      <div className="flex justify-center mb-[60px] mt-[40px]">
        <Card>
          <div className="flex justify-center  mt-[14px]">
            <img src={"/images/lock.png"} alt="lock"></img>
          </div>

          <div className="flex justify-center">
            <p className="text-center font-semibold text-[#262626] text-[16px] mb-[10px]">
              {resetPassword.HEADING}
            </p>
          </div>

          <div className="flex justify-center mb-[10px]">
            <p className="w-[300px] text-center text-[14px] text-[#8e8e8e]">
              {resetPassword.SUB_HEADING}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center ">
              <InputFields
                id="forgetEmail"
                value={email}
                handle={handleForgotEmail}
                placeholder={"Email"}
                type={"text"}
              />
            </div>

            <div className="my-[14px]">
              <Handler
                buttonTitle={resetPassword.SEND_LOGIN_LINK_BUTTON_TITLE}
              />
            </div>
            <Toast />
          </form>

          <div className="flex justify-center">
            <a
              href={resetPassword.ALTERNATE_LINK}
              className="text-center text-[12px] text-[#00376b]"
            >
              {resetPassword.ALTERNATE_TITLE}
            </a>
          </div>
          <ORdivider />

          <div className="mb-[80px] ">
            <BackButton url="/signup" buttonTitle="Create New Account" />
          </div>

          <Card>
            <div className="py-[16px] bg-[#fafafa]">
              <BackButton url="/" buttonTitle="Back to Login" />
            </div>
          </Card>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPaswordForm;
