const nav_email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const menuCarIcon = document.querySelector(`.navbar-shopping-cart`);
const aside = document.querySelector(`.product-detail`);

nav_email.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarIcon.addEventListener(`click`, toggleCarAside);

function toggleDesktopMenu(){
  const isAsideClosed = aside.classList.contains(`inactive`);

  if (!isAsideClosed) {
    aside.classList.add(`inactive`);
  } 
  
  desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu(){
  const isAsideClose = aside.classList.contains(`inactive`);

  if (!isAsideClose) {
    aside.classList.add(`inactive`);
  }

  mobileMenu.classList.toggle(`inactive`);
}

function toggleCarAside(){
  const isMobileMenuClose = mobileMenu.classList.contains(`inactive`);
 
  if (!isMobileMenuClose) {
    mobileMenu.classList.add(`inactive`);
  }

  aside.classList.toggle(`inactive`);
}
