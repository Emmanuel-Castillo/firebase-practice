import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import Logout from "./ui/Logout";

const Nav = ({ register, login, logout, user, loading }) => {
  function renderSkeleton() {
    return (
      <div className="user__buttons--skeleton">
        <div className="register__button--skeleton"></div>
        <div className="login__button--skeleton"></div>
        <div className="logout__button--skeleton"></div>
      </div>
    );
  }

  function renderButtons() {
    return (
      <div className="user__buttons">
        {user.email ? (
          <Logout logout={logout} user={user} />
        ) : (
          <>
            <button className="user__btn" onClick={register}>
              Register
            </button>
            <button className="user__btn" onClick={login}>
              Login
            </button>
          </>
        )}
      </div>
    );
  }

  useEffect(() => {
    setTimeout(() => {
      renderSkeleton();
    }, 300);
  }, []);
  
  return (
    <div className="nav">
      <figure className="logo">
        <img src={logo} alt="" className="logo__img" />
      </figure>

      {loading ? renderSkeleton() : renderButtons()}
    </div>
  );
};

export default Nav;
