import ReceiptCard from "../ui/ReceiptCard";

function ReceiptList({ receipts, showRecipe }) {
  console.log(typeof showRecipe);

  return (
    <ul className="grid grid-flow-row-dense gap-4 justify-center" style={{ gridTemplateColumns: 'repeat(auto-fill, 13rem)' }}>
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