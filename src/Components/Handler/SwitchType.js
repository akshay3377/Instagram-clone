import Card from "../UI/Card";

import { useNavigate } from "react-router-dom";

const SwitchType = ({ staticLabel, path, buttonTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="my-[10px]">
      <Card>
        <p className="text-center text-[14px] font-light py-5">
          {staticLabel}
          <span
            className="cursor-pointer text-[#0095f6] font-bold"
            onClick={() => {
              navigate(path);
            }}
          >
            {buttonTitle}
          </span>
        </p>
      </Card>
    </div>
  );
};

export default SwitchType;
