 const profileEmail = document.querySelector(".navbar-email");
 const desktopMenu = document.querySelector(".desktop-menu");
 const menuButton = document.querySelector(".menu")
 const mobileMenu = document.querySelector(".mobile-menu")

profileEmail.addEventListener("click", toggleDesktopMenu);

 function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive")

 }

 menuButton.addEventListener("click", toggleMobileMenu);

 function toggleMobileMenu () {
   mobileMenu.classList.toggle("inactive")
    
 }