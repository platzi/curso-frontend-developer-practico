const menuMail = document.getElementById('menuMail');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamburgesa = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

menuMail.addEventListener('click',toggleMenu)
menuHamburgesa.addEventListener('click',toggleMenuMobile)



function toggleMenu() {
    menuDesktop.classList.toggle("inactive")
}
function toggleMenuMobile() {
    menuMobile.classList.toggle("inactive")
}