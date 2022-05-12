import React from "react";
import Signin from "../../components/login/SignIn";
import BackgroundVideo from "../../assets/planet-earth.mp4";

const Login = () => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <span className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></span>
      <video
        autoPlay
        loop
        muted
        className="absolute w-full min-w-full min-h-full max-w-none object-cover -z-10"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Signin />
    </div>
  );
};

export default Login;
