const navEmail = document.querySelector('.navbar-email')
const navMenu = document.querySelector('.desktop-menu')
navEmail.addEventListener('click', toggleMenuVar)

function toggleMenuVar() {
    navMenu.classList.toggle('inactive');
}
console.log('sds');