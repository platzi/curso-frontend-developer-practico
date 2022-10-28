// Show / Hide Desktop Menu
const navEmail = document.querySelector('.navbar-email');
navEmail.addEventListener('click', () => {
  const desktopMenu = document.querySelector('.desktop-menu').classList.toggle('inactive');
});