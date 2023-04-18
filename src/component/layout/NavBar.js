import { Link } from "react-router-dom";


function NavBar() {
    return (
      <nav className="bg-lime-300/60	border-b-black border-b-2 dark:bg-lime-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {"Savor-Chef"}
          </Link>
        </div>
      </nav>
    );
}

export default NavBar