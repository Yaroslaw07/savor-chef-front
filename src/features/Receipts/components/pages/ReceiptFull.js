import Card from "../ui/WindowCard";
import ProductsList from "../../../Products/components/ProductsList";


function FullReceipt({ receipt,handleClose }) {

  return (
    <Card>
      <h3 className="bg-blue-700 p-4 rounded-t-lg border-b-4 border-b-blue-300 text-white text-3xl font-bold">
        <div className="flex flex-row justify-between">
          <p>{receipt.name}</p>
          <button onClick={handleClose}>✕</button>
        </div>
      </h3>

      <div className="px-5 font-medium text-lg text-gray-700 italic">
        {receipt.dishCategory} • {receipt.recipeDescription}
      </div>

      <div className="px-3 font-normal text-gray-700 flex flex-col gap-3">
        <div className="flex px-2 flex-row justify-between font-semibold">
          <p>Time: ⌛{receipt.preparationTime}</p>
          <p>Difficulty: {receipt.difficulty}</p>
        </div>

        <div className="bg-blue-300 rounded-lg p-4 text-white font-medium">
          <ProductsList />
        </div>

        <div className="justify-between border-2 p-3 rounded-lg shadow">
          {receipt.preparationInstructions}
        </div>
      </div>
    </Card>
  );
}

export default FullReceipt

/*
<div className=""></div>
        
        {receipt.dishCategory}*/