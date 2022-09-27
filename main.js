const menuNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuNav.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {

    const isCarritoAsideClosed = aside.classList.contains('inative');

    if(!isCarritoAsideClosed) {
        aside.classList.add('inative');
    }

    desktopMenu.classList.toggle("inative");
}

function toggleMobileMenu() {
    
    const isCarritoAsideClosed = aside.classList.contains('inative');

    if(!isCarritoAsideClosed) {
        aside.classList.add('inative');
    }

    mobileMenu.classList.toggle("inative");

}

function toggleCarritoAside(){
    
  const isMobileMenuClosed = mobileMenu.classList.contains('inative');
  
  if(!isMobileMenuClosed)//Si es diferente a cerrado//
 {
    mobileMenu.classList.add('inative');
  }

  aside.classList.toggle('inative');
  console.log(aside);

}