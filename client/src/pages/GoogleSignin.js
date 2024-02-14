import React from "react";
import { app } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signupWithGoogle = () => {
  signInWithPopup(auth, googleProvider);
};

const GoogleSignin = () => {
  return (
    <div>
      <button onClick={signupWithGoogle}>Signin with Google</button>
    </div>
  );
};

export default GoogleSignin;
