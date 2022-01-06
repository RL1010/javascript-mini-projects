import fetchRecipes from './fetchRecipes.js';
import displayRecipes from './displayRecipes.js';
import setRecipe from './setRecipe.js';
const showRecipe = async (url) => {
  // fetch drinks
  const data = await fetchRecipes(url);

  // display drinks
  const section = await displayRecipes(data);
  if (section) {
    setRecipe(section);
  }
};

export default showRecipe;
