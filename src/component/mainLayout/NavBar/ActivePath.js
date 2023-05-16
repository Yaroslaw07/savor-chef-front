import { Link } from "react-router-dom";

function ActivePath(props) {
    
    console.log("Active",props)
    return <Link
       to={props.to}
       className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
     >
       {props.title}
     </Link>;
}

export default ActivePath;