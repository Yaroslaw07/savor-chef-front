import { Link } from "react-router-dom";

function InactivePath(props) {

  return (

    <Link
      to={props.to}
      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
    >
        {props.title}
    </Link>
  );
}

export default InactivePath;
