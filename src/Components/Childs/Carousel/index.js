import { useEffect } from "react";
import Avatar from "react-avatar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchInstagramStories } from "../../../Redux/Actions/Story";
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storyContent = useSelector((state) => state.storyReducer);

  // console.log("storie dom ", storyContent);

  useEffect(() => {
    dispatch(fetchInstagramStories());
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 8,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Carousel
        swipeable={false}
        responsive={responsive}
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="all .5s"
        transitionDuration={200}
        containerClass="w-[630px] h-[85px] mt-[40px]"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass=" h-[96px] w-[96px] mt-[10px] flex justify-center items-center"
      >
        {storyContent?.stories?.map((item, index) => {
          return (
            <div className="flex flex-col items-center" key={index}>
              <Avatar
                onClick={() => {
                  navigate("/story");
                }}
                key={index}
                className="outline 
                outline-offset-2 
                outline-2 
                outline-red-500"
                size="56px"
                round={true}
                src={item.profilePic}
              ></Avatar>
              <div className=" mt-[6px] text-[12px]">{item.name}</div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
