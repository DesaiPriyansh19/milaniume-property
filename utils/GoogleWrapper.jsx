import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import GoogleButton from "./GoogleButton";

export default function GoogleWrapper({handlePopupClose,text}) {
  return (
    <GoogleOAuthProvider clientId="456206128183-uls10ledlhmu8eultgh8dj2omg352u1v.apps.googleusercontent.com">
      <GoogleButton text={text} handlePopupClose={handlePopupClose} />
    </GoogleOAuthProvider>
  );
}
