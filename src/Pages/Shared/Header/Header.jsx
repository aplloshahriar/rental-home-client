import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { MdOutlineSavedSearch } from "react-icons/md";
import useWatches from "../../../assets/hooks/useWatches";
import { FaSwatchbook } from "react-icons/fa";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [watches] = useWatches();
  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 text-white  bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black "
            >
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <a>About Us</a>
                <ul className="p-2">
                  <li>
                    <a>BLOG</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/listing">Listing</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/secret">Secret</Link>
              </li>
              <li>
                <Link to="/dashboard/mywatch">
                  <button className="btn">
                    <MdOutlineSavedSearch />
                    <div className="badge badge-secondary">
                      {watches?.length}
                    </div>
                  </button>
                </Link>
              </li>

              {user ? (
                <>
                  <li className="mt-2">{user?.displayName}</li>
                  <button onClick={handleLogOut} className="">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-4xl font-bold">
            NESTIFY
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              <Link to="/"> Home </Link>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul className="p-2">
                  <li>
                    <a>BLOG</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              {" "}
              <Link to="/listing">Listing</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/secret">Secret</Link>
            </li>

            {user ? (
              <>
                <li className="mt-2 mr-4">{user?.displayName}</li>
                <button onClick={handleLogOut} className="">
                  Logout
                </button>
              </>
            ) : (
              <>
                <li className="ms-4">
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            <li className="ms-2">
              <Link to="/dashboard/mywatch">
                <MdOutlineSavedSearch className="text-xl" />
                <h2 className="ps-2 pr-2 rounded-xl text-md font-extrabold bg-pink-500 ">
                  +{watches?.length}
                </h2>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-error text-white">Become Host</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
