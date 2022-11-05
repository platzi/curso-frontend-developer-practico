
const navEmail = document.querySelector('.navbar-email');

const deskMenu = document.querySelector('.desktop-menu');


const toggleDeskMenu = function() {
    deskMenu.classList.toggle('inactive');
}

navEmail.addEventListener('click', toggleDeskMenu)