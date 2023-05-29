import { useContext, useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import ReceiptList from "../component/receipts/ReceiptList";
import api from "../api-common";
import recipeDataService from "../services/recipes.service";

function Home() {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);

  const authCtx = useContext(AuthContext)

  useEffect(() => {
    /*recipeDataService
      .getAll()
      .then((response) => {
        setReceipts(response.data);
      })
      .finally(setLoading(false));*/
      setReceipts(recipes);
      setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <ReceiptList receipts={receipts} />
      <button className="absolute right-4 bottom-4 w-14 rounded-lg text-white text-3xl bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        +
      </button>
    </div>
  );
}

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


export default Home;


