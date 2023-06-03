import {useState, useEffect } from "react";
import ReceiptList from "../features/Receipts/components/pages/ReceiptList";
import recipeDataService from "../features/Receipts/services/RecipesService";
import FullReceipt from "../features/Receipts/components/pages/ReceiptFull";
import NewReceiptForm from "../features/Receipts/components/pages/NewReceiptForm";

export class SideWindowState {
  static Hidden = new SideWindowState("Hidden");
  static Receipt = new SideWindowState("Receipt");
  static AddReceipt = new SideWindowState("AddReceipt");

  constructor(state) {
    this.state = state;
  }

  toString() {
    return `${this.state}`;
  }
}

function Home() {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currSideBar, setSideBar] = useState(null);
  const [currRecipe,setCurrReceipt] = useState(null);

  useEffect(() => {
    recipeDataService
      .getAll()
      .then((response) => {
        setReceipts(response.data);
      })
      .finally(setLoading(false));
  }, []);

  const showFullRecipe = (receiptId) => {
    recipeDataService.get(receiptId).then((response) => {
      setCurrReceipt(response.data);
      setSideBar(SideWindowState.Receipt);
    });
  };

  async function showAddRecipe ()  {
    setCurrReceipt(null)
    setSideBar(SideWindowState.AddReceipt)
  }

  const AddRecipe = (receipt) => {
    recipeDataService.create(receipt)
  }

  const closeSideWindow = () => {
    setCurrReceipt(null)
    setSideBar(null);
  }

  if (loading) {
    return <p>Loading</p>;
  }

  if (receipts.length === 0) {
    return <p>No receipts</p>;
  }

  switch (currSideBar) {

    case null:
      return (
        <div className="relative pt-4 pb-4 h-full">
          <ReceiptList receipts={receipts} showRecipe={showFullRecipe} />

          <button
            onClick={showAddRecipe}
            className="fixed right-5 bottom-4 w-14 rounded-lg text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            +
          </button>
        </div>
      );

    case SideWindowState.Receipt:
      return (
        <div className="relative overflow-auto flex pt-4 pb-4 h-full">
          <div className="hidden sm:w-1/2 sm:block h-full">
            <ReceiptList receipts={receipts} showRecipe={showFullRecipe} />
          </div>
          <div className="w-full sm:w-1/2 h-full">
            <FullReceipt receipt={currRecipe}></FullReceipt>
          </div>
        </div>
      );

    case SideWindowState.AddReceipt:
      return (
        <div className="relative overflow-auto flex pt-4 pb-2  h-full">
          <div className="relative overflow-auto hidden pt-4 no-scrollbar sm:w-1/2 sm:block h-full pb-2">
            <ReceiptList receipts={receipts} showRecipe={showFullRecipe} />
          </div>
          <div className="relative w-full sm:w-1/2 h-full">
            <NewReceiptForm
              onSubmit={AddRecipe}
              onCancel={closeSideWindow}
            ></NewReceiptForm>
          </div>
        </div>
      );

    default:
      return <p>Error</p>;
  }
}


export default Home;