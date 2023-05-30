import ReceiptItem from "./ReceiptItem"

function ReceiptList({ receipts, showRecipe }) {
  console.log(typeof showRecipe);

  return (
    <ul className="flex flex-wrap pl-6 pr-2 justify-items-start gap-5">
      {receipts.map((receipt) => (
        <ReceiptItem
          key={receipt.id}
          receipt={receipt}
          showRecipe={showRecipe}
        ></ReceiptItem>
      ))}
    </ul>
  );
}

export default ReceiptList
