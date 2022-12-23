//document.querySelector(".navbar-email");
const navEmail = document.getElementsByClassName("navbar-email")[0]; 
const divDesktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.getElementsByClassName("menu")[0];
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector('.product-detail');

navEmail.addEventListener("click", ()=> {
  const isAsideClosed = aside.classList.contains("inactive");

  if(!isAsideClosed) {
    aside.classList.add("inactive");
  }

  divDesktopMenu.classList.toggle("inactive");
});

menuHamIcon.addEventListener("click", ()=> {
  const isAsideClosed = aside.classList.contains("inactive");

  if(!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener("click", ()=> {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = divDesktopMenu.classList.contains("inactive");

  if(!isDesktopMenuClosed) {
    divDesktopMenu.classList.add("inactive");
  }
  
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
});
