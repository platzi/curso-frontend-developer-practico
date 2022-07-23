const menuEmail = document.querySelector('.navbar-email');
const menuContain = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', ()=> {
  toggleMenu()
});

const toggleMenu = () => menuContain.classList.toggle('inactive');
