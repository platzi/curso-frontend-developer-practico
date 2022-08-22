 const menuEmail = document.querySelector(".navbar-email");
 const menudesktopMenu = document.querySelector(".desktop-menu");
 const menuHamIcon = document.querySelector(".menu");
 const mobileMenu = document.querySelector(".mobile-menu");

 menuEmail.addEventListener('click', toogleDesktoMenu);
 menuHamIcon.addEventListener('click', toogleMobileMenu);


 function toogleDesktoMenu() {
    
    menudesktopMenu.classList.toggle('inactive');
 }

 function toogleMobileMenu() {
    
    mobileMenu.classList.toggle('inactive');
 }
