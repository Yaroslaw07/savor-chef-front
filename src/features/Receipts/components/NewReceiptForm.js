import { useState } from "react";
import SubmitButton from "../../../component/ui/buttons/SubmitButton";
import CancelButton from "../../../component/ui/buttons/CancelButton";
import Card from "./ui/Card";

function NewReceiptForm({ onSubmit, onCancel }) {
  const [receipt, setReceipt] = useState({
    name: "New Receipt",
    recipeDescription: "",
    preparationInstruction: "",
    Hours: Number,
    Minutes: Number,
    preparationTime: String,
    difficulty: "Easy",
    dishCategory: "",
    associatedProductIds: [],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setReceipt((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    //console.log(receipt)
  }

  function FormSubmit() {
    receipt.preparationTime = receipt.Hours + ":" + receipt.Minutes
    onSubmit(receipt)
  }


  return (
    <section className="absolute inset-0 justify-center px-2">
      <Card>
        <form
          className="space-y-4 px-2 md:space-y-6 py-6"
          onSubmit={FormSubmit}
        >
          <div>
            <label
              htmlFor="text"
              name="Name"
              className="block mb-2 text-sm font-medium text-gray-900 md:text-lg "
            >
              Title:
            </label>
            <input
              type="text"
              name="name"
              defaultValue={receipt.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Best receipt of the world"
              onChange={(e) => handleChange(e)}
            />
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="your_email@domain.com"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 md:text-lg"
            >
              PreparationInstructions:
            </label>
            <textarea
              type="text"
              name="preparationInstructions"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="your_email@domain.com"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label
              htmlFor="text"
              name="dishCategory"
              className="block mb-2 text-sm font-medium text-gray-900 md:text-lg"
            >
              PreparationTime:
            </label>
            <div className="flex flex-row gap-3">
              <input
                className="border-2 text-center"
                id="h"
                name="Hours"
                type="number"
                default="0"
                min="0"
                max="23"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="h">h</label>
              <input
                className="border-2 text-center"
                id="m"
                name="Minutes"
                type="number"
                default="0"
                min="0"
                max="59"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="m">m</label>
            </div>

            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 md:text-lg"
              >
                DishCategory
              </label>
              <input
                type="text"
                name="dishCategory"
                placeholder="Breakfast"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <CancelButton clickHandle={onCancel}>Cancel</CancelButton>
            <SubmitButton clickHandle={FormSubmit}>Create</SubmitButton>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default NewReceiptForm;
