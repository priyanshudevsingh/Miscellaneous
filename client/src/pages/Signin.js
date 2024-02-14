import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => alert("Signin Success"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin-page">
      <h1>Signin Here</h1>
      <label>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Enter Your Email Here"
      ></input>

      <label>Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        placeholder="Enter Your Password Here"
      ></input>

      <button onClick={signinUser}>Signin</button>
    </div>
  );
};

export default SigninPage;
