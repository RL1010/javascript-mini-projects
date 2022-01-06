import fetchRecipes from './src/fetchRecipes.js';
import displayRecipe from './src/displaySingleRecipe.js';

const showRecipe = async () => {
  const id = localStorage.getItem('Recipe');
  if (!id) {
    window.location.replace('index.html');
  } else {
    const meal = await fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayRecipe(meal);
  }
};

window.addEventListener('DOMContentLoaded', showRecipe);
