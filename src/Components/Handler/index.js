import LoadingIcon from "../Childs/SvgIcons/loadingIcon";

const Handler = ({
  buttonTitle,
  url,
  pageHandler,
  onClick,
  loading,
  disabled,
  buttonIcon,
}) => {
  return (
    <div className=" my-[10px] text-center">
      <button
        disabled={disabled}
        type="submit"
        onClick={onClick}
        className={` text-[#ffffff] font-bold rounded-md w-[268px] h-[32px] 
        ${
          disabled ? "bg-blue-300" : "bg-[#0095f6] hover:bg-[#1877f2]"
        }  text-[14px] `}
      >
        <div className="flex justify-center items-center ">
          <i className={buttonIcon + "mr-[6px] text-[20px]"}></i>

          {loading ? <LoadingIcon /> : <span>{buttonTitle}</span>}
        </div>
      </button>
    </div>
  );
};

export default Handler;
