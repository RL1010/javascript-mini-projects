import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const displayRecipe = (data) => {
  hideLoading();

  const meal = data.meals[0];
  console.log(meal);
  const { strMealThumb: image, strMeal: name, strInstructions: desc } = meal;
  const list = [
    meal.strIngredient1,
    meal.strIngredient2,
    meal.strIngredient3,
    meal.strIngredient4,
    meal.strIngredient5,
  ];

  const img = getElement('.food-img');
  const foodName = getElement('.food-name');
  const description = getElement('.food-desc');
  const ingredients = getElement('.food-ingredients');
  img.src = image;
  document.title = name;
  foodName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      // 
    
      return `<li><i class="far fa-check-circle"></i>${item}</li>`;
    
    })
    .join('');
};
export default displayRecipe;
