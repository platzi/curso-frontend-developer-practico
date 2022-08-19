const menuEmail = document.querySelector('.navbar-email');
const miniMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleMiniMenu);

function toggleMiniMenu() {
    console.log('click');
    miniMenu.classList.toggle('inactive');
}

