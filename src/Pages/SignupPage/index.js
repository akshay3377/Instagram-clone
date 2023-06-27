import FacebookRedirect from "../../Components/Childs/FacebookRedirect";
import InstagramLogo from "../../Components/Childs/SvgIcons/Instagramlogo";
import ORdivider from "../../Components/Childs/SvgIcons/ORDivider";
import { signup } from "../../Constants/signup";
import InputFields from "../../Components/Childs/InputField/InputField";
import { useState, useEffect } from "react";

const SignupPage = ({ handle, value, error, blur }) => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordButton, setPasswordButton] = useState(false);

  const toggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  useEffect(() => {
    value.password ? setPasswordButton(true) : setPasswordButton(false);
  }, [value.password]);
  return (
    <>
      <div className="mb-[40px]">
        <div className="">
          <InstagramLogo />
          <div className="flex justify-center items-center ">
            <p className="h-[40px] w-[240px] text-center text-[17px] font-medium mb-[20px] break-normal text-[#8e8e8e] leading-[20px]">
              {signup.HEADING}
            </p>
          </div>

          <FacebookRedirect fbButtonStyle="bg-[#0095f6] hover:bg-[#1877f2] text-white  " />
          <ORdivider />

          <div className="flex justify-center flex-col ">
            <InputFields
              placeholder="Phone number, username, or email"
              type="text"
              id="email"
              // touched={touched.email}
              value={value.email}
              handle={handle}
              error={error.email}
              blur={blur}
            />

            <InputFields
              placeholder="fullname"
              id="fullname"
              type="text"
              // touched={touched.fullname}
              value={value.fullname}
              handle={handle}
              error={error.fullname}
              blur={blur}
            />

            <InputFields
              placeholder="username"
              type="text"
              value={value.username}
              // touched={touched.username}
              id="username"
              handle={handle}
              error={error.username}
              blur={blur}
            />
            <InputFields
              id="password"
              placeholder="password"
              value={value.password}
              handle={handle}
              // touched={touched.email}
              error={error.password}
              blur={blur}
              passwordButton={passwordButton}
              type={passwordType}
              toggle={toggle}
            />
          </div>

          <div className="flex justify-center my-[20px] ">
            <p className=" w-[268px]  h-[80px]  text-center text-[12px] text-[#8e8e8e]">
              {signup.TITLE1}
              <a href={signup.LINK1}>&nbsp; Learn more</a>
              <br />
              <br />
              {signup.TITLE2}
              &nbsp;
              <a href={signup.LINK2}>Terms</a>, &nbsp;
              <a href={signup.LINK3}>Privacy Policy</a> &nbsp; and &nbsp;
              <a href={signup.LINK4}>Cookies Policy.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
