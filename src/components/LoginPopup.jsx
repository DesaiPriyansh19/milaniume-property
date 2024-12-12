import React, { useState } from "react";
import "./Popup.css"; // Import Tailwind and custom styles
import GoogleWrapper from "../../utils/GoogleWrapper";
import axios from "axios";
import InputField from "../../utils/InputFields";

const LoginPopup = ({ handlePopupClose }) => {
  const [view, setView] = useState("login"); // 'login', 'signup', 'forgotPassword'
  const [loader, setLoader] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [createUser, setCreateUser] = useState({
    FullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (view === "login") {
      setDetails((prev) => ({ ...prev, [name]: value }));
    } else {
      setCreateUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    if (view === "login") {
      // Login logic
      const userData = {
        Email: details.email,
        Password: details.password,
      };

      try {
        const response = await axios.post(
          "https://milaniumepropertybackend.vercel.app/api/users",
          userData
        );
        console.log("Login successful:", response.data);
        const userInfo = {
          userId: response.data.data.user._id,
          email: response.data.data.user.Email,
          MobileNumber: response.data.data.user.MobileNumber,
          token: response.data.token,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        setLoader(false);
        handlePopupClose();
      } catch (error) {
        console.error("Error during login:", error);
        setLoader(false);
      }
    } else if (view === "signup") {
      // Signup logic
      const userData = {
        Email: createUser.email,
        FullName: createUser.FullName,
        Password: createUser.password,
      };

      try {
        const response = await axios.post(
          "https://milaniumepropertybackend.vercel.app/api/users",
          userData
        );
        console.log("Signup successful:", response.data);
        const userInfo = {
          userId: response.data.data.user._id,
          email: response.data.data.user.Email,
          fullName: response.data.data.user.FullName,
          token: response.data.token,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        setLoader(false);
        handlePopupClose();
      } catch (error) {
        console.error("Error during signup:", error);
        setLoader(false);
      }
    }
  };

  const toggleView = (newView) => setView(newView);

  return (
    <div className="fixed inset-0  px-5 sm:px-0  bg-transparent backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white  rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-extralight text-gray-800">
            {view === "login" && "Login"}
            {view === "signup" && "Sign Up"}
            {view === "forgotPassword" && "Forgot Password"}
          </h2>
          <button
            onClick={handlePopupClose}
            className="text-gray-500 text-3xl hover:text-gray-800"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {view === "login" && (
            <>
              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Email"
                value={details.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

              <InputField
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                value={details.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />

              <button
                type="submit"
                className="w-full font-extralight  hover:bg-[#E7C873] border-[2px]  border-[#E7C873] text-black py-2 px-4 rounded-lg "
              >
                Login
              </button>
              <button
                type="button"
                className="w-full font-extralight  hover:bg-[#E7C873] border-[2px]  border-[#E7C873] text-black py-2 px-4 rounded-lg "
              >
                <GoogleWrapper
                  text="Google"
                  handlePopupClose={handlePopupClose}
                />
              </button>
            </>
          )}

          {view === "signup" && (
            <>
              <InputField
                label="Full Name"
                type="text"
                name="FullName"
                placeholder="Full Name"
                value={createUser.FullName}
                onChange={handleChange}
                required
              />

              <InputField
                label="Email"
                type="text"
                name="email"
                placeholder="Email"
                value={createUser.email}
                onChange={handleChange}
                required
              />

              <InputField
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                value={createUser.password}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="w-full font-extralight hover:bg-[#E7C873] border-[2px]  border-[#E7C873] text-black py-2 px-4 rounded-lg "
              >
                Sign Up
              </button>

              <button className="w-full font-extralight hover:bg-[#E7C873] border-[2px]  border-[#E7C873] text-black py-2 px-4 rounded-lg ">
                <GoogleWrapper
                  text="Google"
                  handlePopupClose={handlePopupClose}
                />
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
