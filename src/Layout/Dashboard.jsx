import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineSavedSearch } from "react-icons/md";
import { FaBookAtlas, FaWallet } from "react-icons/fa6";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import useWatches from "../assets/hooks/useWatches";
import { MdAddHome } from "react-icons/md";
import useAdmin from "../assets/hooks/useAdmin";

const Dashboard = () => {
  const [watches] = useWatches();
  console.log(watches);
  // todo
  // const isAdmin = true;
  // const isAdmin = false;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-orange-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-2xl font-bold">
            <Link to="/">Nestify</Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {isAdmin ? (
                <>
                  <li>
                    <Link to="/dashboard/home">
                      <FaHome></FaHome>Admin Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addhome">
                      <MdAddHome></MdAddHome>Add Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/managehome">
                      <FaBookAtlas></FaBookAtlas>Manage Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allusers">
                      <FaUsers></FaUsers>All Users
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaHome></FaHome> Home
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link>
                      <FaHome></FaHome>User Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/mywatch">
                      <MdOutlineSavedSearch></MdOutlineSavedSearch>Watch List
                      <div className="badge badge-secondary">
                        {watches?.length}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaWallet></FaWallet>Payment History
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaCalendarAlt></FaCalendarAlt>Reservations
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaHome></FaHome> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/listing">
                      <FaListAlt></FaListAlt>Listing
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/home">
                  <FaHome></FaHome>Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addhome">
                  <MdAddHome></MdAddHome>Add Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/managehome">
                  <FaBookAtlas></FaBookAtlas>Manage Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">
                  <FaUsers></FaUsers>All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>
                  <FaHome></FaHome>User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/mywatch">
                  <MdOutlineSavedSearch></MdOutlineSavedSearch>Watch List
                  <div className="badge badge-secondary">{watches?.length}</div>
                </Link>
              </li>
              <li>
                <Link>
                  <FaWallet></FaWallet>Payment History
                </Link>
              </li>
              <li>
                <Link>
                  <FaCalendarAlt></FaCalendarAlt>Reservations
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaHome></FaHome> Home
                </Link>
              </li>
              <li>
                <Link to="/listing">
                  <FaListAlt></FaListAlt>Listing
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome> Home
            </Link>
          </li>
          <li>
            <Link to="/listing">
              <FaListAlt></FaListAlt>Listing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
