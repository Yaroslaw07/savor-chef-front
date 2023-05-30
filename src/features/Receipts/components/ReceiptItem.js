import { useState } from "react";

function ReceiptItem({ receipt, clickHandle }) {
  const [isFocused, setFocus] = useState(false);

  return (
    <li>
      <div
        className={` ${
          isFocused ? "bg-gray-100" : "bg-white"
        } w-52 h-36 border-b-4 border-blue-300 rounded-lg shadow dark: dark:bg-gray-800 dark:border-gray-700`}
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
      >
        <div>
          <h3
            onClick={() => clickHandle(receipt.id)}
            className={`${
              isFocused ? "bg-blue-800" : "bg-blue-700"
            } mb-1 h-20 p-4 rounded-t-lg text-white   hover:bg-blue-800 text-xl font-bold dark:text-white`}
          >
            {receipt.name}
          </h3>
        </div>
        <div className="px-3 font-normal text-gray-700 dark:text-gray-400">
          <p>Difficulty: {receipt.difficulty} </p>
          <p>⌛: {receipt.preparationTime} </p>
        </div>
      </div>
    </li>
  );
}

export default ReceiptItem;
