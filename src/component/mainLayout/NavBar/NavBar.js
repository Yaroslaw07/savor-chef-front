import { Link, useLocation, useNavigate } from "react-router-dom";
import ActivePath from "./ActivePath";
import InactivePath from "./InactivePath";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

const pages = [
  { title: "Home", path: "/" },
  { title: "Shelf", path: "/shelf" },
];

function NavBar() {
  const location = useLocation();
  const authCtx = useContext(AuthContext);

  // p-0 font-medium  bg-gray-50 flex-col space-x-8 mt-0 border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
  return (
    <nav className="sticky bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b-4 rounded-b-lg border-blue-300  dark:border-gray-600">
      <div className="flex flex-wrap flex-col sm:flex-row  sm:gap-0 items-center justify-between p-4 pl-6">
        <Link
          to="/"
          className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >
          {"Savor-Chef"}
        </Link>

        {authCtx.user === null ? (
          <div className="flex order-2 gap-2">
            <Link
              to="/signin"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="flex order-2 gap-2">
            <p className="font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
              {authCtx.user.Email}
            </p>
            <button
              onClick={authCtx.logout}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          </div>
        )}

        <ul className="order-1 flex items-center gap-6">
          {pages.map((page, index) => {
            return location.pathname === page.path ? (
              <li key={index}>
                <ActivePath title={page.title} to={page.path}></ActivePath>
              </li>
            ) : (
              <li key={index}>
                <InactivePath title={page.title} to={page.path}></InactivePath>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
