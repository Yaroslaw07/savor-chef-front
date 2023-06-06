import { useState } from "react";
import SubmitButton from "../../../../components/ui/buttons/SubmitButton";
import CancelButton from "../../../../components/ui/buttons/CancelButton";
import Card from "../ui/WindowCard";
import ProductsList from "../../../Products/components/ProductsList";

function NewReceiptForm({ oldReceipt, handleSubmit, handleClose }) {
  const [receipt, setReceipt] = useState(
    oldReceipt === undefined
      ? {
          name: "New Receipt",
          recipeDescription: "",
          preparationInstructions: "",
          Hours: 0,
          Minutes: 10,
          preparationTime: String,
          difficulty: "Easy",
          dishCategory: "",
          associatedProductIds: [],
        }
      : oldReceipt
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setReceipt((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function FormSubmit() {

    receipt.preparationTime = receipt.Hours + ":" + receipt.Minutes;
    console.log(receipt)
    handleSubmit(receipt);
  }

  return (
    <Card>
      <form>
        <h3 className="bg-blue-700 p-4 rounded-t-lg border-b-4 border-b-blue-300 text-white text-3xl font-bold">
          <div className="flex flex-row justify-between gap-4">
            <input
              type="text"
              name="name"
              defaultValue={receipt.name}
              onChange={(e) => handleChange(e)}
              className="w-6 bg-blue-300  text-center rounded-lg text-gray-700 flex-1"
            />
            <button onClick={handleClose} className="flex-none">
              ✕
            </button>
          </div>
        </h3>

        <div className="px-4 pt-2 flex flex-col gap-4">
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-normal text-gray-900 md:text-lg"
            >
              Dish Category:
            </label>
            <input
              type="text"
              name="dishCategory"
              defaultValue={receipt.dishCategory}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
              placeholder="Breakfast"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex flex-row justify-around gap-3 font-medium text-lg flex-1 border-2 p-3 rounded-lg shadow">
            <div className="flex flex-col gap-2">
              <label htmlFor="difficulty-select" name="difficulty">
                {"Difficulty:  "}
              </label>
              <select
                defaultValue={receipt.difficulty}
                onChange={(e) => handleChange(e)}
                id="difficulty-select"
                name="difficulty"
                className="rounded-lg bg-white border-2"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="flex flex-col items-center gap-2">
              <label htmlFor="difficulty-select" name="difficulty">
                {"Time: ⌛"}
              </label>
              <div className="flex flex-row gap-0.5">
                <input
                  className="border-2 text-center rounded-lg"
                  id="h"
                  name="Hours"
                  type="number"
                  defaultValue={receipt.Hours}
                  min="0"
                  max="23"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="h">h:</label>
                <input
                  className="border-2 text-center rounded-lg"
                  id="m"
                  name="Minutes"
                  type="number"
                  defaultValue={receipt.Minutes}
                  min="0"
                  max="59"
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="m">m</label>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 md:text-lg"
            >
              Description:
            </label>
            <textarea
              type="text"
              name="recipeDescription"
              defaultValue={receipt.recipeDescription}
              rows={2}
              className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Recipe description"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="bg-blue-300 rounded-lg p-4 text-white font-medium">
            <ProductsList />
          </div>

          <div className="justify-between border-2 p-3 rounded-lg shadow">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 md:text-lg"
            >
              Instructions:
            </label>
            <textarea
              type="text"
              name="preparationInstructions"
              defaultValue={receipt.preparationInstructions}
              rows={4}
              className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Recipe description"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <SubmitButton handleClick={FormSubmit}>Create</SubmitButton>
        </div>
      </form>
    </Card>
  );
}

export default NewReceiptForm;