const menuEmail = document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',()=>{
    desktop.classList.toggle('inactive')
})