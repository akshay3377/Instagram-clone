import LoginPage from "../LoginPage";
import Footer from "../../Components/layout/Footer";

function HomePage() {
  return (
    <>
      <div className="flex justify-center mt-[40px] mb-[30px] ">
        <div
          className="hidden md:block mr-[8px] w-[400px] h-[580px] bg-center relative  bg-cover"
          style={{
            backgroundImage: `url('/images/home-phones-2x.png')`,
          }}
        >
          <div
            className="absolute h-[500px] w-[250px] bg-contain bg-no-repeat right-5 top-5 
         animate-[change_10s_ease-in-out_infinite]"
          ></div>
        </div>
        <div>
          <LoginPage />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
