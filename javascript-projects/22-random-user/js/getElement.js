const getElement = (selection) => {
    const element = document.querySelector(selection)
    if(element) return element
    else{
        throw new Error('The elemnt does not exists');
    }
}

export default getElement;