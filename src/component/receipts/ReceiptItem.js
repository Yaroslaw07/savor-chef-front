import Card from "../ui/Card"


function ReceiptItem(props){
    return (
      <div className="w-60 h-32 p-6  bg-white border border-gray-200 rounded-lg shadow dark: dark:bg-gray-800 dark:border-gray-700">
        {props.receipt.name}
      </div>
    );
} 

export default ReceiptItem