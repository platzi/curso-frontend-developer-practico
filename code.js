//This is the code that I used to show/hide the user-menu
const menuEmail = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");
navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  menuEmail.classList.toggle('inactive');
}
//This is the code that I used to show/hide the mobile-menu
const mobileMenuImg = document.querySelector('.menu-img');
const mobileMenuContainer = document.querySelector('.mobile-menu');
mobileMenuImg.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  mobileMenuContainer.classList.toggle('inactive');
}
