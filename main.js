const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const toggleMenu = () =>{
    desktopMenu.classList.toggle('inactive')
}

menuEmail.addEventListener('click', toggleMenu)