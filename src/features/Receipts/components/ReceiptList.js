import ReceiptCard from "./ReceiptCard";

function ReceiptList({ receipts, showRecipe }) {
  console.log(typeof showRecipe);

  return (
    <ul className="flex flex-row flex-wrap overflow-auto h-full flex-grow  pl-6 pr-2  gap-5">
      {receipts.map((receipt) => (
        <ReceiptCard
          key={receipt.id}
          receipt={receipt}
          clickHandle={showRecipe}
        ></ReceiptCard>
      ))}
    </ul>
  );
}

export default ReceiptList