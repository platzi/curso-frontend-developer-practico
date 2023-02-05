const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
  menu.classList.toggle('inactive');
}