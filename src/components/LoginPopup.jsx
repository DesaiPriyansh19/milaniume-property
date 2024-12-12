import React, { useState } from "react";
import "./Popup.css"; // Import Tailwind and custom styles

const LoginPopup = () => {
  const [view, setView] = useState("login"); // 'login', 'signup', 'forgotPassword'

  const toggleView = (newView) => setView(newView);

  return (
    <div className="fixed inset-0  px-5 sm:px-0  bg-transparent backdrop-blur-sm flex justify-center items-center z-40">
      <div className="bg-white  rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-extralight text-gray-800">
            {view === "login" && "Login"}
            {view === "signup" && "Sign Up"}
            {view === "forgotPassword" && "Forgot Password"}
          </h2>
          <button
            onClick={() => setView("login")}
            className="text-gray-500 text-3xl hover:text-gray-800"
          >
            ×
          </button>
        </div>

        <form className="space-y-4">
          {view === "login" && (
            <>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm  text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full font-extralight  hover:bg-[#E7C873] border-[2px]  border-[#E7C873] text-black py-2 px-4 rounded-lg "
              >
                Login
              </button>
            </>
          )}

          {view === "signup" && (
            <>
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full font-extralight hover:bg-[#E7C873] border-[2px]  border-[#E7C873] text-black py-2 px-4 rounded-lg "
              >
                Sign Up
              </button>
            </>
          )}

          {view === "forgotPassword" && (
            <>
              <div>
                <label htmlFor="forgotEmail" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="forgotEmail"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full font-extralight hover:bg-[#E7C873] border-[2px]  border-[#E7C873]  text-black py-2 px-4 rounded-lg"
              >
                Reset Password
              </button>
            </>
          )}
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          {view === "login"
            ? "Don't have an account?"
            : view === "signup"
            ? "Already have an account?"
            : null}
          <span
            onClick={() =>
              toggleView(
                view === "login"
                  ? "signup"
                  : view === "signup"
                  ? "forgotPassword"
                  : "login"
              )
            }
            className="text-[#7f6a31] font-normal pl-1 text-lg cursor-pointer"
          >
            {view === "login"
              ? "Sign Up"
              : view === "signup"
              ? "Login"
              : "Back to Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
