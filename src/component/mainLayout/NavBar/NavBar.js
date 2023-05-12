import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="sticky w-full z-20 top-0 rounded-b-lg bg-lime-300/60	border-b-black border-b-2 dark:bg-lime-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 pl-6">
        <Link
          to="/"
          className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >
          {"Savor-Chef"}
        </Link>
      </div>
      <div className="">
        
      </div>
    </nav>
  );
}

export default NavBar;
