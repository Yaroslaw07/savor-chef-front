import ReceiptItem from "./ReceiptItem"

function ReceiptList(props) {
    return (
      <div className="grid grid-cols-1 pt-4 px-2 h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-5">
        {props.receipts.map((receipt) => (
          <ReceiptItem key={receipt.id} receipt={receipt}></ReceiptItem>
        ))}
      </div>
    );
}

export default ReceiptList
