import fetchRecipes from './fetchRecipes.js';
import displayRecipes from './displayRecipes.js';
import setRecipe from './setRecipe.js';
const showRecipe = async (url) => {
<<<<<<< HEAD
  // fetch meals
  const data = await fetchRecipes(url);

  // display meals
=======
  // fetch recipes
  const data = await fetchRecipes(url);

  // display recipes
>>>>>>> c785c2c41e06fc97b59ab20384bf5002c46066ad
  const section = await displayRecipes(data);
  if (section) {
    setRecipe(section);
  }
};

export default showRecipe;
