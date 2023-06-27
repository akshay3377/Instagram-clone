import Avatar, { RedirectSource } from "react-avatar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostModal = () => {
  const { id } = useParams();

  const state = useSelector((state) => state.postReducer);

  console.log("state", state);

  const data = state.post.filter((ele) => ele.id === id);

  console.log(data);
  return (
    <>
      {data.map((ele) => {

      })}
    </>
  );
};

export default PostModal;




// import React, { useEffect } from "react";
// import MoreNavigator from "../Childs/SvgIcons/More";

// function ModalComponent({ children, shown, close }) {
//   return shown ? (
//     <div
//       className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
//       onClick={() => {
//         close();
//       }}
//     >
//       <div className="flex justify-center items-center cursor-pointer">
//         <div
//           className="border-0 w-[350px] my-6 rounded-lg shadow-lg text-center relative flex flex-col  bg-white"
//           onClick={(e) => {
//             e.stopPropagation();
//           }}
//         >
//           {children}
//           <div
//             className="text-center text-black-500 background-transparent font-bold px-6 py-2"
//             onClick={() => {
//               close();
//             }}
//           >
//             Close
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : null;
// }

// // --------------------------------------POST DETAILS MODAL------------------------------------

// const PostsDetails = () => {
//   const [modalShown, toggleModal] = React.useState(false);
//   useEffect(() => {
//     modalShown
//       ? (document.body.style.overflow = "hidden")
//       : (document.body.style.overflow = "unset");
//   }, [modalShown]);

//   const array = [
//     "Report",
//     "Unfollow",
//     "Add to favourite",
//     "Go to post",
//     "Share to",
//     "Copy link",
//     "Embed",
//     "About this account",
//   ];

//   return (
//     <>
//       <button
//         onClick={() => {
//           toggleModal(!modalShown);
//         }}
//       >
//         <div className="flex">
//           <MoreNavigator />
//         </div>
//       </button>
//       <ModalComponent
//         shown={modalShown}
//         close={() => {
//           toggleModal(false);
//         }}
//       >
//         {array.map((ele, index) => {
//           return (
//             <div key={index}>
//               <button
//                 className="text-black-500 background-transparent border-b-[2px] border-[#fafafa]  font-bold px-6 py-2"
//                 type="button"
//               >
//                 {ele}
//               </button>
//             </div>
//           );
//         })}
//       </ModalComponent>
//     </>
//   );
// };

// export default PostsDetails;
