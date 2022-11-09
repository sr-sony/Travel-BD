import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogout=() => {
    logOut()
    .then(()=>{})
    .catch(err => console.err(err))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
                
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Travel BD</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
          <Link to='/'>Home</Link>
          </li>
          {
                  user?.uid?
                  <>
                  <span>{user?.displayName}</span>
                  <button onClick={handleLogout}>Logout</button>
                  <Link to='/myservice'>My Service</Link>
                  <Link to='/myreviews'>My Reviews</Link>
                  </>
                  :
                  <>
                  <button><Link to='/login'>Login</Link> </button>
                  <button><Link to='/register'>Registration</Link> </button>
                  </>
                }
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Header;
