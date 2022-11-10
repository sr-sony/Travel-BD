import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.err(err));
  };
  return (
    <div className="navbar bg-neutral text-neutral-content my-5">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52"
          >
            <li className="font-semibold text-xl">
              <Link to="/">Home</Link>
            </li>

            <li>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <button onClick={handleLogout}>Logout</button>
                  <Link to="/additem">Add Item</Link>
                  <Link to="/myreviews">My Reviews</Link>
                </>
              ) : (
                <>
                  <button>
                    <Link to="/login">Login</Link>{" "}
                  </button>
                  <button>
                    <Link to="/register">Registration</Link>{" "}
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="normal-case font-extrabold text-2xl ml-5">
          Travel BD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="font-semibold text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-xl">
            {user?.uid ? (
              <>
                <Link className="mx-5" to="/additem">
                  Add an Item
                </Link>
                <Link to="/myreviews">My Reviews</Link>
              </>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <li className="font-semibold text-xl">
          {user?.uid ? (
            <>
              <span className="mx-5">{user?.displayName}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="mx-5">
                <Link to="/login">Login</Link>{" "}
              </button>
              <button className="mr-5">
                <Link to="/register">Registration</Link>{" "}
              </button>
            </>
          )}
        </li>
      </div>
    </div>
  );
};

export default Header;
