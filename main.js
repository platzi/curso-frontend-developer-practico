const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//mobile menu
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', function(){
    desktopMenu.classList.toggle('inactive')
})

//mobile menu
burguerMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('inactive')
})

