import { useState } from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

function ReceiptItem(props) {
  const [isFocused, setFocus] = useState(false);

  return (
    <div
      className={` ${isFocused ? "bg-gray-100":""} w-60 h-36   bg-white  border-b-4 border-blue-300 rounded-lg shadow dark: dark:bg-gray-800 dark:border-gray-700`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <Link to="/shelf">
        <h3 className={`${isFocused ?"bg-blue-800" : "bg-blue-700"} mb-1 h-20 p-4 rounded-t-lg text-white   hover:bg-blue-800 text-xl font-bold dark:text-white`}>
          {props.receipt.name}
        </h3>
      </Link>

      <div className="px-3 font-normal text-gray-700 dark:text-gray-400">
        <p>Difficulty: {props.receipt.difficulty} </p>
        <p>Time: {props.receipt.preparationTime} </p>
      </div>
    </div>
  );
}

export default ReceiptItem;
