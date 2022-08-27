const nav_email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const menuCarIcon = document.querySelector(`.navbar-shopping-cart`);
const asideDetails = document.querySelector(`.product-detail`);

nav_email.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarIcon.addEventListener(`click`, toggleCarAside);

function toggleDesktopMenu(){
  console.log(`click_desktopMenu`);
  desktopMenu.classList.toggle(`inactive`);
}
function toggleMobileMenu(){
  mobileMenu.classList.toggle(`inactive`);
}
function toggleCarAside(){
  const isMobileMenuClose = mobileMenu.classList.contains(`inactive`);
  const isAsideClose = aside.classList.contains(`inactive`);

  if (mobileMenu.classList.contains(`inactive`));
}
