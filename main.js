const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//const inactive = document.querySelector('.inactive')
const menuHamIcon = document.querySelector('.menu')
const mobileMEnu = document.querySelector('.mobile-menu')

navbarEmail.addEventListener('click',function(){
    desktopMenu.classList.toggle('inactive')
})
menuHamIcon.addEventListener('click',function(){
    mobileMEnu.classList.toggle('inactive')
})