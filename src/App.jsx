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
import Registration from "./components/Registration";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, (user) => {
        setLoading(false);
        if (user) {
          setUser(user);
        }
      });
    }, 1000);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
        console.log(1)
    }, 300)
  }, [register, login])

  function register() {
    const form = document.getElementById('registration')
    const email = form.elements[0].value
    const password = form .elements[1].value
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        form.reset()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    const form = document.getElementById('registration')
    const email = form.elements[0].value
    const password = form .elements[1].value
    signInWithEmailAndPassword(auth, email , password)
      .then(({ user }) => {
        form.reset()
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <Nav
        register={register}
        login={login}
        logout={logout}
        user={user}
        loading={loading}
      />

      <Registration
      />
      {loading ? "loading..." : user.email}
    </div>
  );
}

export default App;
