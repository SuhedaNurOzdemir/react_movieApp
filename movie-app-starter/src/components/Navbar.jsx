import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import { Collapse, Dropdown, initTE } from "tw-elements";
import { AuthContext } from "../context/AuthContext";
import Switch from "./Switch";

initTE({Collapse, Dropdown}); 

const Navbar = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // const currentUser = { displayName };
  return (
    <div>
      <>
        <nav
          className="flex w-full flex-wrap items-center justify-between bg-neutral-100 dark:bg-gray-900 py-3 dark:text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start fixed top-0 z-20"
          data-te-navbar-ref=""
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            {/* Logo */}
            <Link
              className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0 text-lg font-bold"
              to="/"
            >
              MOVİES
            </Link>
            {/* Left navigation links */}

            {/* Right elements */}
            <div className="relative flex items-center">
              {currentUser && (
                <h5 className="mr-3 text-l capitalize">
                  {currentUser.displayName}
                </h5>
              )}
              <Switch />
              <div
                className="relative"
                data-te-dropdown-ref=""
                data-te-dropdown-alignment="end"
              >
                {/* Second dropdown trigger */}
                <span
                  className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  id="dropdownMenuButton2"
                  role="button"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                >
                  {/* User avatar */}
                  <img
                    src={currentUser.photoURL || avatar}
                    className="rounded-full"
                    style={{ height: 25, width: 25 }}
                    alt=""
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </span>
                {/* Second dropdown menu */}
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1"
                  data-te-dropdown-menu-ref=""
                >
                  {/* Second dropdown menu items */}
                  <li>
                    <Link
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/register"
                      data-te-dropdown-item-ref=""
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/login"
                      data-te-dropdown-item-ref=""
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <span
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      role="button"
                      data-te-dropdown-item-ref=""
                      onClick={() => logOut()}
                      onClick={() => navigate("/login")}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="h-[52px]"></div>
      </>
    </div>
  );
};

export default Navbar;
