function ActivePath(props) {
    
    return <p
       className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
     >
       {props.title}
     </p>;
}

export default ActivePath;