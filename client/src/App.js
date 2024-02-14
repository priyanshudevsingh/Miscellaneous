import { app } from "./firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import GoogleSignin from "./pages/GoogleSignin";
import "./App.css";
import { useEffect, useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <SignupPage />
        <SigninPage />
        <GoogleSignin />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello {user.email}</h1>
      <h1>{user.accessToken}</h1>
      <h1>{user.displayName}</h1>

      <button onClick={() => signOut(auth)}> Logout</button>
    </div>
  );
}

export default App;
