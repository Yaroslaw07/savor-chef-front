import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";


function MainLayout(props){
    return <div>
        <NavBar></NavBar>
        <main><Outlet/></main>
    </div>
}

export default MainLayout;