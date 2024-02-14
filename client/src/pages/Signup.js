import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((res) =>
      alert("Signup Success")
    );
  };

  return (
    <div className="signup-page">
      <h1>Signup Here</h1>
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

      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default SignupPage;
