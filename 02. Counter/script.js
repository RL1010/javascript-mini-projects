const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value')

let count = 0;
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let name = e.currentTarget.classList
        if (name.contains('decrease')) {
            count--;

        } else if (name.contains('increase')) {
            count++;

        } else {
            count = 0

        }
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})