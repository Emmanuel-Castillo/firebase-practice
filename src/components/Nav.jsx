import React from "react";
import logo from "../logo.svg";

const Nav = ({ register, login, logout, user }) => {
  return (
    <div className="nav">
      <figure className="logo">
        <img src={logo} alt="" className="logo__img" />
      </figure>

      <div className="user__buttons">
        {!user.uid ? (
          <>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
          </>
        ) : (
          <button className="logout__btn" onClick={logout}>{user.email[0].toUpperCase()}</button>
        )}
      </div>
    </div>
  );
};

export default Nav;
