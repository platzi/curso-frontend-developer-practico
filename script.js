const displayMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

console.log(displayMenu);
console.log(desktopMenu);
displayMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
};
