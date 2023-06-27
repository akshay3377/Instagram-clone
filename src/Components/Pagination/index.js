import { useState } from "react";
import SignupPage from "../../Pages/SignupPage";
import DateOfBirth from "../../Pages/SignupPage/Birthday";
import Card from "../UI/Card";
import SwitchType from "../Handler/SwitchType";
import Footer from "../layout/Footer";
import AdditionalPage from "../Childs/Download";
import Handler from "../Handler";
import { useFormik } from "formik";
import { formValidationSchema } from "../../Constants/YupValidation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignupAction } from "../../Redux/Actions/registerUserAction";
import { SelectDatepicker } from "react-select-datepicker";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";
import { toast } from "react-toastify";
const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(page - 1);
  const [value, setValue] = useState(new Date());
  const initialValues = {
    email: "",
    fullname: "",
    username: "",
    password: "",
    // dob: value,
  };

  const [disable, setDisable] = useState(true);
  const targetDate = new Date().getFullYear() - 5;
  const user = new Date(value).getFullYear();

  useEffect(() => {
    user < targetDate ? setDisable(false) : setDisable(true);
  }, [value]);

  const signUp = useSelector((state) => state.signupReducer);
  const { userInfo, loading, error } = signUp;

  const onDateChange = (date) => setValue(date);

  useEffect(() => {
    if (userInfo) navigate("/dashboard");
    if (error) toast.error(error);
  }, [userInfo, error]);

  const {
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
    handleSubmit,
    dirty,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    // validateOnChange : false,
    onSubmit: (values) => {
      dispatch(userSignupAction(values));
      // console.log({ ...values, dob: value });
    },
  });

  return (
    <div className="flex justify-center items-center flex-col m-auto mt-[14px]">
      <Card>
        <form onSubmit={handleSubmit}>
          {page === 0 && (
            <SignupPage
              handle={handleChange}
              blur={handleBlur}
              touched={touched}
              value={values}
              error={errors}
            />
          )}

          {page === 1 && (
            <DateOfBirth>
              {
                <SelectDatepicker
                  hideLabels
                  id="dob"
                  selectedDate={value}
                  onDateChange={onDateChange}
                />
              }
            </DateOfBirth>
          )}

          <div className="mb-[40px]">
            {page === 0 && (
              <Handler
                disabled={!(isValid && dirty)}
                // loading={loading}
                onClick={nextPage}
                buttonTitle="Sign Up"
              />
            )}

            {page === 1 && (
              <Handler
                buttontype={"submit"}
                disabled={!(isValid && dirty) || disable}
                // loading={loading}
                pageHandler={nextPage}
                buttonTitle="next"
              />
            )}

            {page === 1 && (
              <Handler
                buttontype={"submit"}
                // loading={loading}
                onClick={previousPage}
                buttonTitle="Go Back"
              />
            )}
          </div>
          <Toast />
        </form>
      </Card>
      <div>
        <SwitchType
          path="/login"
          staticLabel="Have an account? "
          buttonTitle="Log in"
        />
      </div>
      <AdditionalPage />
      <Footer />
    </div>
  );
};

export default SignupForm;
