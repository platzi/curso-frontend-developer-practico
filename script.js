const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu)



// const navbaremail = document.querySelector('.navbar-email')
// const deskmenu = document.querySelector('.desktop-menu')

// const emailClick = () => {
//     deskmenu.style.display = 'block';
// }
// navbaremail.addEventListener('click', emailClick);
