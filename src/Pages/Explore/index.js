import CommentsNavigator from "../../Components/Childs/SvgIcons/comment";
import NotificationsNavigator from "../../Components/Childs/SvgIcons/Notification";

const Explore = () => {
  let array = [
    {
      postedImage:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    },
    {
      postedImage:
        "https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg",
    },
    {
      postedImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      postedImage:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    },
    {
      postedImage:
        "https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg",
    },
    {
      postedImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      postedImage:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    },
    {
      postedImage:
        "https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg",
    },
    {
      postedImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 ml-[240px] mt-[30px]">
      {array.map((ele) => {
        return (
          <a className="relative block group" href="#">
            <div
              className="relative  inset-0 h-[292px] w-[292px] bg-contain bg-no-repeat relative block group group-hover:opacity-50"
              style={{ backgroundImage: `url('${ele.postedImage}')` }}
            >
              <div className="opacity-0  group-hover:opacity-100  hover:bg-dark  flex justify-center items-center">
                <NotificationsNavigator />
                <CommentsNavigator />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
export default Explore;
