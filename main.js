const  emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

emailMenu.addEventListener('click', toggleDestopMenu)

function toggleDestopMenu() {
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}

console.log('js');