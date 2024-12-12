import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ handlePopupClose, text }) {
  const googleRespone = async (authResult) => {
    try {
      const response = await axios.get(
        `https://milaniumepropertybackend.vercel.app/api/google/auth/google?code=${authResult["code"]}`
      );

      if (response.data && response.data.data.user) {
        const userInfo = {
          userId: response.data.data.user._id,
          email: response.data.data.user.Email,
          MobileNumber: response.data.data.user.MobileNumber,
          token: response.data.token,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        handlePopupClose();
        console.log("User Data:", response.data);
      } else if (response.data && response.data.message) {
        console.warn("Message from backend:", response.data.message);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error("Error authenticating with Google:", error);
    }
  };

  const handleError = (error) => {
    console.error("Google Login Error:", error);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: googleRespone,
    onError: handleError,
    flow: "auth-code",
  });

  return (
    <div>
      <button
        className="w-full mb-8 text-base font-medium bg-inherit flex items-center justify-center gap-3  p-3 rounded-xl"
        onClick={googleLogin}
      >
        <span>
          <FcGoogle />
        </span>
        {text}
      </button>
    </div>
  );
}
