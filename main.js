const menuEmail = document.querySelector('#navbarEmail');
const desktopMenu = document.querySelector('#desktopMenu');
menuEmail.addEventListener('click', menuDeEmail);

function menuDeEmail() {
    desktopMenu.classList.toggle('inactive');
}