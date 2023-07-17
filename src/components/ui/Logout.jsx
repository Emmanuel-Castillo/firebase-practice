
const Logout = ({ logout, user}) => {
  return (
    <button className="logout__btn" onClick={logout}>
      {user.email[0].toUpperCase()}
    </button>
  );
};

export default Logout;
