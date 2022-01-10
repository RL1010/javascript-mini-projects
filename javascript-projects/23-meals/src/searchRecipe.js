import getElement from './getElement.js';
import showRecipes from './showRecipes.js';

const baseURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';


const form = getElement('.search-form');
const input = getElement('[name="meal"]');

form.addEventListener('keyup', function (e) {
  // e.preventDefault();
  const value = input.value;
  if (!value) return;
  showRecipes(`${baseURL}${value}`);
});


