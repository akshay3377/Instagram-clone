import Avatar from "react-avatar";

const NewSuggestion = (props) => {
  return (
    <div className="flex items-center justify-between mb-[15px]">
      <div className="flex items-center ">
        <div className="mr-[15px] ">
          <Avatar size={props.size} src={props.image} round={true}></Avatar>
        </div>
        <div className="leading-[16px] ">
          <div className="text-[14px] font-medium">{props.name}</div>
          <div className="text-[12px] text-[#8e8e8e]">{props.status}</div>
        </div>
      </div>
      <div className="text-[#0095f6] text-[12px] font-bold cursor-pointer">
        {props.buttonTitle}
      </div>
    </div>
  );
};

export default NewSuggestion;
