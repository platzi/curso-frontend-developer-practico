const burguerMenuButton = document.querySelector('.burguer-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuButton = document.querySelector('.navbar-email');
const menuEmail = document.querySelector('.desktop-menu');


burguerMenuButton.addEventListener('click', ()=> {
  mobileMenu.classList.toggle('inactive');
})

menuButton.addEventListener('click', ()=> {
  menuEmail.classList.toggle('inactive')
});