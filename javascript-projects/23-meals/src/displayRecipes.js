import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayRecipes = ({meals}) => {
  
  const title = getElement('.title');
  const section = getElement('.section-center');
  if (!meals) {
    // hide loading
    hideLoading();
    title.textContent = 'sorry, no meals matched your search';
    section.innerHTML = null;
    return;
  }
  const newMeals = meals
    .map((meal) => {
      const { idMeal: id, strMeal: name, strMealThumb: image } = meal;

      return `<a href="recipe.html">
          <article class="food" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  hideLoading();
  title.textContent = '';
  section.innerHTML = newMeals;
  return section;
};

export default displayRecipes;
