import Card from "../../Components/UI/Card";
import AdditionalPage from "../../Components/Childs/Download";
import Handler from "../../Components/Handler";
import InstagramLogo from "../../Components/Childs/SvgIcons/Instagramlogo";
import InputFields from "../../Components/Childs/InputField/InputField";
import ORdivider from "../../Components/Childs/SvgIcons/ORDivider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../Redux/Actions/auth";

import SwitchType from "../../Components/Handler/SwitchType";
import FacebookRedirect from "../../Components/Childs/FacebookRedirect";
import { ROUTES } from "../../Routes/routes";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [submitButton, setSubmitButton] = useState(true);

  const [passwordType, setPasswordType] = useState("password");
  const [passwordButton, setPasswordButton] = useState(false);

  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const login = useSelector((state) => state.userLoginReducer);
  const { userInfo, loading, error } = login;

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo]);

  const toggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { email, password };
    dispatch(userLoginAction(payload));
  };

  useEffect(() => {
    email && password.length > 7
      ? setSubmitButton(false)
      : setSubmitButton(true);
  }, [email, password]);

  useEffect(() => {
    password ? setPasswordButton(true) : setPasswordButton(false);
  }, [password]);

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-[14px]">
        <Card>
          <div className="mb-[20px]">
            <InstagramLogo />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center flex-col m-auto ">
              <InputFields
                id="username"
                value={email}
                handle={handleUsername}
                placeholder={"Phone number, username, or email"}
                type={"text"}
              />
              <InputFields
                id="password"
                value={password}
                handle={handlePassword}
                placeholder={"Password"}
                passwordButton={passwordButton}
                type={passwordType}
                toggle={toggle}
              />
            </div>
            <Handler
              disabled={submitButton}
              loading={loading}
              buttonTitle="Log in"
            />
          </form>
          <div className="mb-[24px]">
            <ORdivider />
          </div>

          <div className="mb-[10px]">
            <FacebookRedirect fbButtonStyle="text-[#385185] " />
          </div>

          {error ? (
            <span className="flex justify-center m-auto text-center  h-[36px] w-[268px] text-[14px] my-[20px] text-[#ed4956]">
              {error}
            </span>
          ) : (
            ""
          )}

          <p
            onClick={() => {
              navigate(ROUTES.PASSWORD_RESET);
            }}
            className="text-center text-[12px] mb-[20px] text-[#00376b] cursor-pointer"
          >
            Forgotten your password ?
          </p>
        </Card>

        <SwitchType
          path={ROUTES.SIGNUP}
          staticLabel="Don't have an account? "
          buttonTitle="Sign up"
        />
        <AdditionalPage />
      </div>
    </>
  );
};

export default LoginPage;
