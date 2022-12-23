//document.querySelector(".navbar-email");
const navEmail = document.getElementsByClassName("navbar-email")[0]; 
const divDesktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.getElementsByClassName("menu")[0];
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click", ()=> {
  divDesktopMenu.classList.toggle("inactive");
});

menuHamIcon.addEventListener("click", ()=> {
  mobileMenu.classList.toggle('inactive');
});
