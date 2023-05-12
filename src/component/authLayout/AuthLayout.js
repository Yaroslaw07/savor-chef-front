import { Outlet } from "react-router-dom";

function AuthLayout(){
    return (
      <div>
        <main className="">
          <Outlet></Outlet>
        </main>
      </div>
    );
}

export default AuthLayout;