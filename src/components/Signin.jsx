import React, { useContext, useState } from "react";
import BackgroundVideo from "../assets/planet-earth.mp4";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthErrorCodes } from "firebase/auth";
import UserContext from "../context/AuthContext";

const Signin = () => {
  const navigate = useNavigate();
  const { signIn, user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      signIn(email, password).then((result) => {
        toast.success("Welcome " + result.user.email);
        navigate("/dashboard");
      });
    } catch (e) {
      console.log(e.message);
      if (e.message.includes(AuthErrorCodes.USER_DELETED)) {
        toast.error("User does not exist in database");
      }
      if (e.message.includes(AuthErrorCodes.INVALID_PASSWORD)) {
        toast.error("Invalid password");
      }
    }
  };

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
      <div className="w-[350px] rounded-lg bg-white z-10">
        <form onSubmit={handleSubmit} className="py-12 px-8">
          <h3 className="text-center font-bold text-2xl mb-8">Login</h3>
          <input
            className="w-full bg-transparent outline-none border border-gray-300 rounded-lg p-2 placeholder:font-semibold placeholder:color-gray mb-2 focus:border-green-500 transition-all duration-500"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full bg-transparent outline-none border border-gray-300 rounded-lg p-2 placeholder:font-semibold placeholder:color-gray focus:border-green-500 transition-all duration-500"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 mt-6 bg-green-500 rounded-lg"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
