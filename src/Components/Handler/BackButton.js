import { useNavigate } from "react-router-dom";

const BackButton = ({ buttonTitle, Handler, url }) => {
  const navigator = useNavigate();
  return (
    <div onClick={Handler} className="flex justify-center">
      <p
        onClick={() => {
          navigator(url);
        }}
        className="font-semibold text-[#262626]  text-[14px]  cursor-pointer hover:text-[#8e8e8e]"
      >
        {buttonTitle}
      </p>
    </div>
  );
};

export default BackButton;
