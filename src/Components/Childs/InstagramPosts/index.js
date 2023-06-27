import Avatar from "react-avatar";
import CommentsNavigator from "../SvgIcons/comment";
import NotificationsNavigator from "../SvgIcons/Notification";
import SaveNavigator from "../SvgIcons/save";
import ShareNavigator from "../SvgIcons/share";
import { useEffect } from "react";
import PostsDetails from "../Modals/PostsModal";
import { useSelector, useDispatch } from "react-redux";
import { fetchInstagramPosts } from "../../../Redux/Actions/Post";
import { Link } from "react-router-dom";
import PostModal from "../../PostModal";

const InstagramPosts = () => {
  const postsArray = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInstagramPosts());
  }, [dispatch]);

  return (
    <>
      {postsArray?.post?.map((ele, index) => {
        return (
          <div key={index}>
            <div className="flex justify-between items-center mb-[10px]">
              <div className="w-[468px] flex justify-between items-center">
                <div className="flex items-center ">
                  <Avatar size="32px" round={true} src={ele.profilePic} />
                  <div className=" flex  items-center  mx-[5px]">
                    <p className="mx-[5px] font-bold text-[14px]">{ele.name}</p>
                    <p className=" font-light text-[#8e8e8e] text-[14px] flex items-center">
                      {/* {ele.author} */}
                    </p>
                  </div>
                </div>
                <div>
                  <PostsDetails />
                </div>
              </div>
            </div>

            <div
              className="h-[474px] w-[468px] mb-[10px] bg-contain bg-no-repeat "
              style={{
                backgroundImage: `url('${ele.postedImage}')`,
              }}
            ></div>

            <div className="flex justify-between w-[468px] mb-[10px]">
              <div className="flex">
                <div className="mr-[10px]">
                  <NotificationsNavigator />
                </div>
                <Link
                  onClick={() => {
                    <PostsDetails></PostsDetails>;
                  }}
                  to={`/post/${ele.id}`}
                >
                  <div className="mr-[10px]">
                    <CommentsNavigator />
                  </div>
                </Link>
                <ShareNavigator />
              </div>
              <div>
                <SaveNavigator />
              </div>
            </div>
            <div className="mb-[2px]">Liked by 589</div>
            <div className="mb-[20px]">view all comments</div>
            <hr className="mb-[30px]"></hr>
          </div>
        );
      })}
    </>
  );
};

export default InstagramPosts;
