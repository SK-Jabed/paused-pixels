import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#120820] via-purple-950 to-[#200d3b] flex flex-col items-center justify-center text-white">
      {/* Error Image */}
      <div className="animate-bounce">
        <img
          src="https://i.ibb.co.com/mJxY93N/rb-7622.png"
          alt="Error"
          className="w-72 md:w-96"
        />
      </div>

      {/* Error Text */}
      <h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-blue-400 animate-fade-in">
        Oops! Page Not Found
      </h1>
      <p className="mt-4 text-gray-300 text-center text-lg md:text-xl px-4">
        The page you're looking for doesn't exist or an error occurred. Please
        go back to the home page and try again.
      </p>

      {/* Go to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;