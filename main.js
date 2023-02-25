const s_ = (selector) => 
document.querySelector(selector);

const menuEmail = s_('.navbar-email');
const desktopMenu = s_('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopoMenu);

function toggleDesktopoMenu() {
    console.log('click')
    desktopMenu.classList.toggle('inactive');
}

console.log('JS funcionando')