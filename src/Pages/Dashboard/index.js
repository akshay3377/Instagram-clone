import { useEffect, useState } from "react";
import CarouselComponent from "../../Components/Childs/Carousel/index";
import InstagramPosts from "../../Components/Childs/InstagramPosts";
import NewSuggestion from "../../Components/Childs/Suggestions";
import SuggestionsComponent from "../../Components/Childs/Suggestions/Suggestions";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const [data, setData] = useState([]);

  console.log(data);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // const { providerData } = user;
      setData(user);
    }
  });

  return (
    <div className=" flex mt-[6px]">
      <div className="flex flex-col justify-center items-center xl:mr-[140px] ">
        <div className="mb-[40px]">
          <CarouselComponent />
        </div>
        <div className="flex flex-col">
          <InstagramPosts />
        </div>
      </div>

      <div className="absolute top-0 right-10 w-[319px] mt-[60px] hidden xl:block">
        <NewSuggestion
          size="56px"
          image="/images/44884218_345707102882519_2446069589734326272_n.jpg"
          name="Username"
          status="username8965"
        />

        <div className="flex justify-between items-center text-[10px] mb-[20px]">
          <p className="text-[14px] text-[#8e8e8e] font-bold">
            Suggestions for you
          </p>
          <p className="cursor-pointer  text-[12px]  hover:text-[#8e8e8e]">
            See All
          </p>
        </div>
        <SuggestionsComponent />
      </div>
    </div>
  );
};

export default Dashboard;
