import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import { useContext } from "react";
import './Navbar.css';

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, user: {} });
  };

  // console.log(auth);
  

  return (
    <nav>
      <ul>
        {auth.isLoggedIn ? (
          <>
            <li>Welcome, {auth.user?.username}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li> <Link to={`/profiles/${auth.user.user.id}/`}> My Profile </Link> </li>
            <li>
              <button onClick={handleLogout}>Logout </button>
            </li>
          </>
        ) : (
          <div className="NavBar">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
