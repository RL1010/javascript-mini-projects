const openModal = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

openModal.addEventListener('click', () => {
    modal.classList.add('open-modal')
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal')
})