import React, { useState } from "react";
import { SelectDatepicker } from "react-select-datepicker";
import { Formik } from "formik";
const DateOfBirth = ({ formData, dvalue, children }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-[12px]">
      <div className="flex justify-center my-[20px]">
        <img src={"/images/birthday.png"} alt="dob"></img>
      </div>
      <p className="text-center mb-[16px]">Add your date of birth</p>
      <div className="text-[14px] flex justify-center">
        This won't be part of your public profile.
      </div>
      <p className="text-center  text-[14px] text-[#0095f6] mb-[10px]">
        Why do I need to provide my date of birth?
      </p>

      <div className="flex justify-center mb-[10px]">{children}</div>

      <p className="text-center text-[12px]  text-[#8e8e8e] mb-[12px]">
        You need to enter the date you were born on
      </p>

      <div className="flex justify-center mb-[20px] m-auto text-center text-[#8e8e8e] text-[12px] w-[300px]">
        Use your own date of birth, even if this account is for a business, pet
        or something else
      </div>
    </div>
  );
};

export default DateOfBirth;
