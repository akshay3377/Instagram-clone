import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <div className="text-center h-[100vh] w-[100%] ">
      <h1 className="font-bold text-[20px] my-[30px]">
        Sorry, this page isn't available.
      </h1>
      <div>
        {" "}
        The link you followed may be broken, or the page may have been removed.
        Go back to{" "}
        <Link to="/">
          {" "}
          <span className="text-blue font-bold">Go back to Instagram.</span>{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default DefaultPage;
