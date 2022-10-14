const menuEmail = document.querySelector('.navbar-email')
const desktop = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    console.log('click')
    desktop.classList.toggle('inactive');
}