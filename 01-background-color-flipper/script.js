const colors = ['green', 'red', 'blue', 'orange', 'yellow', 'gray', 'purple', 'brown', 'pink'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = colors[getRandomColor()];
    color.textContent = colors[getRandomColor()];
})

const getRandomColor = () => Math.floor(Math.random () * colors.length);
  