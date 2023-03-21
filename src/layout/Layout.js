import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


function Layout(props){
    return <div>
        <NavBar></NavBar>
        <main><Outlet/></main>
    </div>
}

export default Layout;