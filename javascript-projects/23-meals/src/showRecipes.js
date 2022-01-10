import fetchRecipes from './fetchRecipes.js';
import displayRecipes from './displayRecipes.js';
import setRecipe from './setRecipe.js';
const showRecipe = async (url) => {

  // fetch meals
  const data = await fetchRecipes(url);
  
  // display recipes
  const section = await displayRecipes(data);
  if (section) {
    setRecipe(section);
  }
};

export default showRecipe;
