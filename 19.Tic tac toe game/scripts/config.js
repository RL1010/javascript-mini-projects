const openPlayerConfig = (e) => {
    editedPlayer = +e.target.dataset.playerid;
    console.log(editedPlayer)
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = "block";
}
const closePlayerConfig = () => {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    form.firstElementChild.classList.remove('error');
    errorsOutput.textContent = '';
    form.firstElementChild.lastElementChild.value = '';
}

const savePlayerConfig = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let enteredPlayername = formData.get('playername').trim();
    enteredPlayername = enteredPlayername.charAt(0).toUpperCase() + enteredPlayername.slice(1).toLowerCase()
    // console.log(enteredPlayername);

    if (!enteredPlayername) {
        e.target.children[1].classList.add('error')
        errorsOutput.textContent = 'Please enter a valid name!'
        return;
    }
    const updatedPlayer = document.querySelector('#player-' + editedPlayer + '-data')
    updatedPlayer.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;
    closePlayerConfig();
}