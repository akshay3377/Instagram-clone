import React from "react";
import Stories from "stories-react";
import "stories-react/dist/index.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../SvgIcons/close";
export default function ImagesStories() {
  const navigate = useNavigate();

  const stories = [
    {
      type: "image",
      url: "https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300",
      duration: 1000,
    },
    {
      type: "image",
      duration: 1000,
      url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300",
    },
    {
      duration: 1000,
      type: "image",
      url: "https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300",
    },
  ];

  return (
    <div className=" flex justify-center items-center h-[100vh] w-[100%] bg-black z-50 ">
      <img
        className=" absolute top-3 left-2 "
        src={"images/Screenshot from 2023-03-06 15-33-18.png"}
        alt="logo"
      />

      <div
        onClick={() => {
          navigate("/dashboard");
        }}
        className="absolute top-6 right-6"
      >
        <CloseIcon />
      </div>

      <Stories
        width="30%"
        height="90vh"
        stories={stories}
        classNames="rounded-lg"
      />
    </div>
  );
}
