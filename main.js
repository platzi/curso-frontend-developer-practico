const menuEmail = document.querySelector('.navbar-email')
const deskopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener('click', showDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)


function showDesktopMenu(){
deskopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    }