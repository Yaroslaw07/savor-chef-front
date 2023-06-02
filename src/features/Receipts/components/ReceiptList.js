import ReceiptItem from "./ReceiptItem"

function ReceiptList({ receipts, showRecipe }) {
  console.log(typeof showRecipe);

  return (
    <ul className="flex flex-row flex-wrap overflow-auto h-full flex-grow  pl-6 pr-2  gap-5">
      {receipts.map((receipt) => (
        <ReceiptItem
          key={receipt.id}
          receipt={receipt}
          clickHandle={showRecipe}
        ></ReceiptItem>
      ))}
    </ul>
  );
}

export default ReceiptList