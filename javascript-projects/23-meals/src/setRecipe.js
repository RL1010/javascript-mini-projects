const setRecipe = (section) => {
    section.addEventListener('click', function (e) {
      // e.preventDefault();
      const id = e.target.parentElement.dataset.id;
      console.log(id);
           localStorage.setItem('Recipe', id);
    });
  };
  
  export default setRecipe;
  