import { useContext, useState, useEffect } from "react";
import AuthContext from "../features/Auth/contexts/AuthContext";
import ReceiptList from "../features/Receipts/components/ReceiptList";
import recipeDataService from "../features/Receipts/services/RecipesService";
import FullReceipt from "../features/Receipts/components/ReceiptFull";
import NewReceiptForm from "../features/Receipts/components/NewReceiptForm";

export class SideWindowState {
  static Hidden = new SideWindowState("Hidden");
  static Receipt = new SideWindowState("Receipt");
  static AddReceipt = new SideWindowState("AddReceipt");

  constructor(state) {
    this.state = state;
  }

  toString() {
    return `State:${this.state}`;
  }
}

function Home() {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currSideBar, setSideBar] = useState(SideWindowState.Hidden);
  const [currRecipe,setCurrReceipt] = useState(null);

  useEffect(() => {
    console.log("useEffect")
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
    setSideBar(SideWindowState.Hidden);
  }

  if (loading) {
    return <p>Loading</p>;
  }

  if (receipts.length === 0) {
    return <p>No receipts</p>;
  }

  switch (currSideBar) {
    case SideWindowState.Hidden:
      return (
        <div className="pt-4 pb-4">
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
        <div className="flex pt-4 pb-4">
          <div className="hidden sm:w-1/2 sm:block">
            <ReceiptList receipts={receipts} showRecipe={showFullRecipe} />
          </div>
          <div className="w-full sm:w-1/2">
            <FullReceipt receipt={currRecipe}></FullReceipt>
          </div>
          <button
            onClick={closeSideWindow}
            className="fixed right-5 bottom-4 w-14 rounded-lg text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            x
          </button>
        </div>
      );

    case SideWindowState.AddReceipt:
      return (
        <div className="flex pt-4 pb-4">
          <div className="hidden sm:w-1/2 sm:block">
            <ReceiptList receipts={receipts} showRecipe={showFullRecipe} />
          </div>
          <div className="w-full sm:w-1/2">
            <NewReceiptForm onSubmit={AddRecipe} onCancel={closeSideWindow}></NewReceiptForm>
          </div>
        </div>
      );

    default:
      return <p>Error</p>;
  }
}


export default Home;












const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: "string",
  recipeDescription: "Classic Italian dish with pasta and meat sauce.",
  preparationInstruction:
    "1. Cook pasta according to package instructions. 2. In a separate pan, heat olive oil and sauté onion and garlic. 3. Add ground beef and cook until browned. 4. Stir in tomato sauce and season with salt and pepper. 5. Simmer for 20 minutes. 6. Serve sauce over cooked pasta.",
  preparationTime: "30 minutes",
  difficulty: "Medium",
  dishCategory: "Main Dish",
  associatedProductIds: []
};


const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    recipeDescription: "Classic Italian dish with pasta and meat sauce.",
    preparationInstruction:
      "1. Cook pasta according to package instructions. 2. In a separate pan, heat olive oil and sauté onion and garlic. 3. Add ground beef and cook until browned. 4. Stir in tomato sauce and season with salt and pepper. 5. Simmer for 20 minutes. 6. Serve sauce over cooked pasta.",
    preparationTime: "30 minutes",
    difficulty: "Medium",
    dishCategory: "Main Dish",
  },
  {
    id: 2,
    name: "Chocolate Chip Cookies",
    recipeDescription: "Delicious homemade cookies with chocolate chips.",
    preparationInstruction:
      "1. Preheat the oven to 350°F. 2. In a bowl, cream together butter, sugar, and vanilla extract. 3. Beat in the egg. 4. In a separate bowl, combine flour, baking soda, and salt. 5. Gradually add the dry ingredients to the wet mixture and mix well. 6. Stir in the chocolate chips. 7. Drop spoonfuls of dough onto a baking sheet. 8. Bake for 10-12 minutes or until golden brown. 9. Allow to cool on a wire rack.",
    preparationTime: "45 minutes",
    difficulty: "Easy",
    dishCategory: "Dessert",
  },
  {
    id: 3,
    name: "Chicken Stir-Fry",
    recipeDescription:
      "Quick and healthy stir-fry with tender chicken and vegetables.",
    preparationInstruction:
      "1. Heat olive oil in a pan or wok. 2. Add ginger and garlic, and sauté for a minute. 3. Add chicken and cook until browned. 4. Add broccoli, carrots, and bell peppers, and stir-fry for a few minutes. 5. In a small bowl, mix soy sauce, salt, and pepper. 6. Pour the sauce over the chicken and vegetables. 7. Cook for a few more minutes until the sauce thickens. 8. Serve over rice or noodles.",
    preparationTime: "25 minutes",
    difficulty: "Medium",
    dishCategory: "Main Dish",
  },
  {
    id: 4,
    name: "Caprese Salad",
    recipeDescription: "A simple and refreshing Italian salad.",
    preparationInstruction:
      "1. Slice tomatoes and mozzarella cheese. 2. Arrange them on a plate, alternating between tomato and cheese slices. 3. Sprinkle fresh basil leaves on top. 4. Drizzle with olive oil and balsamic vinegar. 5. Season with salt and pepper. 6. Let it sit for a few minutes to allow the flavors to meld. 7. Serve as a side dish or appetizer.",
    preparationTime: "10 minutes",
    difficulty: "Easy",
    dishCategory: "Salad",
  },
  {
    id: 5,
    name: "Beef Tacos",
    recipeDescription: "Delicious Mexican-style tacos with seasoned beef.",
    preparationInstruction:
      "1. In a pan, cook beef until browned. 2. Add chopped onion, cumin, paprika, garlic powder, salt, and pepper. 3. Cook until the onion is tender and the beef is fully cooked. 4. Warm the tortillas in a separate pan or microwave. 5. Fill each tortilla with the beef mixture. 6. Top with chopped cilantro and a squeeze of lime. 7. Serve with your favorite taco toppings.",
    preparationTime: "30 minutes",
    difficulty: "Medium",
    dishCategory: "Main Dish",
  },
];

