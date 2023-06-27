import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  email: Yup.string("Enter your Email/Phone Number")
    .required("Email/Phone Number is required")
    .test("test-name", "Enter Valid Phone/Email", function (value) {
      const emailRegex =
        /^([a-zA-Z0-9_\.\-\!\#\$\%\^\&\*?\'\<\>])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9\-])+$/;
      const phoneRegex = /^[0-9]{10}$/;
      let isValidEmail = emailRegex.test(value);
      let isValidPhone = phoneRegex.test(value);
      if (!isValidEmail && !isValidPhone) {
        return false;
      }
      return true;
    }),
  username: Yup.string().required(),
  password: Yup.string().min(8).required(),
});
