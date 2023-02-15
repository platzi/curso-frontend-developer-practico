const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const desplegableMobileMenu = document.querySelector('.mobile-menu');
const bottonHamMobileMenu = document.querySelector('.menu')
navbarEmail.addEventListener('click', ()=>{
    desktopMenu.classList.toggle('showActive')
});
bottonHamMobileMenu.addEventListener('click', ()=>{
    desplegableMobileMenu.classList.toggle('showActive')
})

