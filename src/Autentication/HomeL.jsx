import React, { useState } from "react";
import "../LoginSignupStyle/LoginSignup.css";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const HomeL = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleSignUp = () => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignIn = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  if (user) {
    return <Navigate to="/app"></Navigate>;
  }

  return (
    <div className="container">
      {isSignUpActive && (
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
      )}
      {!isSignUpActive && (
        <div className="header">
          <div className="text">Sign In</div>
          <div className="underline"></div>
        </div>
      )}
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="user icon" />
          <input
            type="text"
            id="email"
            placeholder="Your Email"
            onChange={handleEmailChange}
            className="input"
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="user icon" />
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Your Password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
          />
        </div>
        <div className="submit-container">
          {isSignUpActive && (
            <button
              type="button"
              onClick={handleSignUp}
              className={!isSignUpActive ? "submit gray" : "submit"}
            >
              Sign Up
            </button>
          )}
          {!isSignUpActive && (
            <button
              type="button"
              onClick={handleSignIn}
              className={isSignUpActive ? "submit gray" : "submit"}
            >
              Sign In
            </button>
          )}
        </div>
        <div className="submit-container">
          {isSignUpActive && (
            <p onClick={handleMethodChange} className="submit-extend">
              Login
            </p>
          )}
          {!isSignUpActive && (
            <p onClick={handleMethodChange} className="submit-extend">
              Create An Account
            </p>
          )}
        </div>
      </div>
      <Blur></Blur>
    </div>
  );
};

const Blur = styled.div`
  top: 0;
  right: 0;
  z-index: 0;
  width: 528px;
  height: 505px;
  background: linear-gradient(97.37deg, #f15b2b -15.03%, #ff0006 174.67%);
  filter: blur(727px);
  border-radius: 814px;
`;

export default HomeL;
