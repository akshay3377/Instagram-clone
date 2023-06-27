import CrossButton from "../SvgIcons/Cross";
import Verified from "../SvgIcons/Verified";

const InputFields = ({
  id,
  value,
  placeholder,
  handle,
  type,
  touched,
  passwordButton,
  toggle,
  error,
}) => {
  return (
    <div className="flex justify-center flex-col m-auto mb-[6px] ">
      <div className="relative w-[268px] h-[38px] cursor-text relative ">
        <input
          id={id}
          type={type}
          onChange={handle}
          value={value}
          autoComplete="false"
          className="block px-2.5 pb-1 pt-2 w-full text-sm border border-1  bg-[#fafafa]  mb-[20px]  outline-none  rounded-sm  focus:border-[1] focus:border-[#828282] focus:ring-0  peer"
          placeholder=" "
        />
        <label className="absolute  text-[12px] text-[#828282]   duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2">
          {placeholder}
        </label>

        {passwordButton && (
          <div
            onClick={toggle}
            className="absolute top-2 right-8  text-[#262626] cursor-pointer font-bold text-[14px] hover:text-[#8e8e8e]"
          >
            {type === "password" ? "Show" : "Hide"}
          </div>
        )}

        {error &&(
          <div className="absolute top-1 right-1  ">
            {error ? <CrossButton /> : <Verified />}
          </div>
        )}
      </div>
    </div>
  );
};
export default InputFields;
