import { Link, Outlet } from "react-router-dom";

function AuthLayout(){
    return (
      <section className="bg-gradient-to-br from-blue-300 to-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <Link
            to="/"
            className="items-center mb-6 text-3xl font-semibold test-gray-900 "
          >
            Savor-Chef
          </Link>
          <div className="w-full bg-white rounded-lg border-b-4 border-blue-300 shadow md:mt-0 sm:max-w-md">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AuthLayout;