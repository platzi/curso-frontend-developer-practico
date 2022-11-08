const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);


function toggleMobileMenu(){
   console.log("click en menu mobile");
   mobileMenu.classList.toggle("inactive");     
};

function toggleDesktopMenu(){
   desktopMenu.classList.toggle("inactive");     
};

