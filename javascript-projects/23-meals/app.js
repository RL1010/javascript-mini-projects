
import showRecipes from "./src/showRecipes.js";
import './src/searchRecipe.js'
const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b'


window.addEventListener('DOMContentLoaded', () => {
    showRecipes(URL)
})