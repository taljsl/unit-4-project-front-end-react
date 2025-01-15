import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, user: {} });
  };

  // console.log(auth);
  

  return (
    <nav className='NavBarContainer'>
      <ul>
        {auth.isLoggedIn ? (
          <div className="LoggedInNavBar">
            {/* <p>Welcome, {auth.user?.username}</p> */}
            <Link to="/">Home</Link>
            <Link to={`/profiles/${auth.user.user.id}/`}> My Profile </Link> 
            <Link to="/" onClick={handleLogout}>Logout</Link>
            {/* <button onClick={handleLogout}>Logout </button> */}
          </div>
        ) : (
          <div className="NavBar">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
