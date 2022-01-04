import getElement from "./getElement.js";

const URL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';


const image = getElement('img')
const btn = getElement('.btn')
const content = getElement('.content')

const getData = async () => {
    try {
        const data = await fetch(URL)
        const response = await data.json()
        console.log(response);
        displayData(response)
    } catch (error) {
        console.log(error);
    }

}

function displayData({joke}) {
    image.classList.add('shake-img')
    content.textContent = joke
    const random = Math.random() * 1000;
    setTimeout(() => {
        image.classList.remove('shake-img')
    }, random)
}


btn.addEventListener('click', getData)