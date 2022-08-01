const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//const inactive = document.querySelector('.inactive')

navbarEmail.addEventListener('click',function(){
    desktopMenu.classList.toggle('inactive')
})