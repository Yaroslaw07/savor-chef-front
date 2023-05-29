import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";


function MainLayout(props){
    return (
      <div className="flex flex-col h-screen">
        <NavBar></NavBar>
        <main className="flex-1 bg-gradient-to-b from-white to-blue-100">
          <Outlet />
        </main>
      </div>
    );
}

export default MainLayout;