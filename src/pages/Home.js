import {useState, useEffect } from "react";
import ReceiptList from "../features/Receipts/components/pages/ReceiptList";
import recipeDataService from "../features/Receipts/services/RecipesService";
import FullReceipt from "../features/Receipts/components/pages/ReceiptFull";
import EditReceiptForm from "../features/Receipts/components/pages/EditReceiptForm";
export class SideWindowState {
  static Receipt = new SideWindowState("Receipt");
  static AddReceipt = new SideWindowState("AddReceipt");
  static EditReceipt = new SideWindowState("EditReceipt")

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

  const showAddRecipe = () =>  {
    setSideBar(SideWindowState.AddReceipt)
  }

  const showEditRecipe = () => {
    setSideBar(SideWindowState.EditReceipt);
  }

  const EditRecipe = (receipt) => {
    console.log("edited",receipt)
    setSideBar(SideWindowState.Receipt);
  }
  
  const DeleteRecipe = (id) => {
    console.log(id)
    recipeDataService.delete(id)
    .then(_ => {
      setReceipts(receipts.filter(receipt => {return receipt.id !== id}))
      setSideBar(null)
      setCurrReceipt(null)
    })
    .catch(error => console.log(error)) 
  }

  const AddRecipe = (receipt) => {
    recipeDataService.create(receipt)
      .then(response => {
        //const temp = receipts.push(response.data);
        //setReceipts(Object.keys(temp).map((key) => [key, temp[key]]))
        console.log(typeof receipt)
        setCurrReceipt(response.data)
        setSideBar(SideWindowState.Receipt)
      })
      .catch(error => console.log(error)) 
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
        <div className="relative overflow-auto pt-4 pb-4 h-full">
          <div className="relative overflow-auto  no-scrollbar">
            <ReceiptList receipts={receipts} showRecipe={showFullRecipe} />
          </div>

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
          <div className="relative overflow-auto  no-scrollbar hidden sm:w-1/2 sm:block h-full">
            <ReceiptList
              receipts={receipts}
              handleEdit={showEditRecipe}
              showRecipe={showFullRecipe}
            />
          </div>
          <div className="relative overflow-auto w-full sm:w-1/2 h-full">
            <FullReceipt
              receipt={currRecipe}
              handleClose={closeSideWindow}
              handleEdit={showEditRecipe}
              handleDelete={DeleteRecipe}
            ></FullReceipt>
          </div>
        </div>
      );

    case SideWindowState.AddReceipt:
      return (
        <div className="relative overflow-auto flex pt-4 pb-2  h-full">
          <div className="relative overflow-auto hidden no-scrollbar sm:w-1/2 sm:block h-full pb-2">
            <ReceiptList receipts={receipts} showRecipe={showFullRecipe} />
          </div>
          <div className="relative overflow-auto w-full sm:w-1/2 h-full">
            <EditReceiptForm
              handleSubmit={AddRecipe}
              onCancel={closeSideWindow}
            ></EditReceiptForm>
          </div>
        </div>
      );

    case SideWindowState.EditReceipt:
      return (
        <div className="relative overflow-auto flex pt-4 pb-2  h-full">
          <div className="relative overflow-auto hidden no-scrollbar sm:w-1/2 sm:block h-full pb-2">
            <ReceiptList receipts={receipts} showRecipe={showFullRecipe} />
          </div>
          <div className="relative overflow-auto w-full sm:w-1/2 h-full">
            <EditReceiptForm
              oldReceipt={currRecipe}
              handleSubmit={EditRecipe}
              onCancel={closeSideWindow}
            ></EditReceiptForm>
          </div>
        </div>
      );

    default:
      return <p>Error</p>;
  }
}

export default Home;