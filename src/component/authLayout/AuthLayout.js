import { Link, Outlet } from "react-router-dom";

function AuthLayout(){
    return (
      <section className="bg-gray-50 dark:bg-gray-900 bg-gradient-to-b from-white to-blue-300">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="items-center mb-6 text-2xl font-semibold test-gray-900 dark:text-white"
          >
            Savor-Chef
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AuthLayout;