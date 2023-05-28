import Card from "../ui/Card"


function ReceiptItem(props){
    return (
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {props.name}
      </div>
    );
} 

export default ReceiptItem