const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const iconFlechaProduc = document.querySelector('#icon-flechita-produc-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
iconFlechaProduc.addEventListener('click', toogleFlechaProduc);

function toggleDesktopMenu()
{
  const isCarritoAsideOpen = aside.classList.contains('inactive');

  if (!isCarritoAsideOpen)
    aside.classList.toggle('inactive');

  // toggle('class') pone o quita la clase dependiendo si existe o no
  desktopMenu.classList.toggle('inactive');


}

function toggleMobileMenu()
{
  const isCarritoAsideOpen = aside.classList.contains('inactive');
  
  if (!isCarritoAsideOpen)
  aside.classList.toggle('inactive');
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside()
{
  const isMobileMenuOpen = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuOpen)
    mobileMenu.classList.toggle('inactive');

  aside.classList.toggle('inactive');
}

function toogleFlechaProduc()
{
  aside.classList.toggle('inactive');
}











