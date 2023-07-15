import React from "react";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import Nav from "./components/Nav";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "emmanuel@gmail.com", "test123")
      .then((user) => {
        console.log("register");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "emmanuel@gmail.com", "test123")
      .then(({ user }) => {
        setUser(user);
        console.log("logged in");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
    console.log("logged out", user);
  }

  return (
    <div className="App">
      <Nav register={register} login={login} logout={logout} user={user}/>
      {loading ? "loading..." : user.email}
    </div>
  );
}

export default App;
