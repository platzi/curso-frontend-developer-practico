// Show / Hide Desktop Menu
const navEmail = document.querySelector('.navbar-email');
navEmail.addEventListener('click', () => {
  document.querySelector('.desktop-menu').classList.toggle('inactive');
});

// Show / hide Mobile menu
const menuHamIcon = document.querySelector('.menu');
menuHamIcon.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('inactive');

});