const AdditionalPage = () => {
  return (
    <>
      <div className="my-[10px]">
        <p className=" text-center my-[8px] text-[14px]">Get the app.</p>
        <div className="flex justify-center items-center my-[20px]">
          <a
            className="mr-[8px]"
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DE77E71A8-5F51-4F0C-AB76-6846FF8877DE%26utm_content%3Dlo%26utm_medium%3Dbadge"
          >
            <img
              className="h-10 w-32"
              src={"/images/apple-app-store-logo.jpg"}
              alt="applestore"
            />
          </a>
          <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.signupPage.badge&mt=8&vt=lo">
            <img
              className="h-10 w-32"
              src={
                "/images/png-transparent-google-play-logo-google-play-app-store-android-google-play-text-logo-sign.png"
              }
              alt="playstore"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AdditionalPage;
