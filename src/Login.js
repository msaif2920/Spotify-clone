import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2018/04/spotify.jpg"
        alt=""
      />
      {/* {Spotify logo } */}
      {/* Login with spotify button  */}
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
