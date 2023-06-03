import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";


function MainLayout(){
    return (
      <div className="flex flex-col h-screen">
        <NavBar></NavBar>
        <main className="flex-grow relative bg-gradient-to-b  overflow-auto  from-white to-blue-300">
          <Outlet />
        </main>
      </div>
    );
}

export default MainLayout;