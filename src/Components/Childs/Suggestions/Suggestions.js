import NewSuggestion from ".";

const SuggestionsComponent = () => {
  const array = [
    {
      name: "Sweta",
      status: "Popular",
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    },
    {
      name: "Amit",
      status: "New to instagram",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      name: "Alex",
      status: "Popular",
      image:
        "https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg",
    },
    {
      name: "Sagar Rana",
      status: "Follows you",
      image:
        "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg",
    },
  ];

  return (
    <div className=" items-center mt-[10px] w-[319px] h-[66px] mr-[14px] justify-between">
      {array.map((ele, index) => {
        return (
          <div key={index}>
            <NewSuggestion
              name={ele.name}
              size="32px"
              buttonTitle="Follow"
              status={ele.status}
              image={ele.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SuggestionsComponent;
