const menuEmail =document.querySelector('.navbar-email')
const desktopMenu =document.querySelector('.desktop-menu')

menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){

//desktopMenu.append(inactive);
desktopMenu.classList.toggle('inactive')

}