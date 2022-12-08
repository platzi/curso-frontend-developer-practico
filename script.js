const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


burgerMenu.addEventListener('click', toggleMobileMenu);
navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
   /*  if(desktopMenu.getAttribute("class")==="desktop-menu inactive"){
    desktopMenu.setAttribute("class", "desktop-menu");
    } else if(desktopMenu.getAttribute("class")==="desktop-menu"){
    desktopMenu.setAttribute("class", "desktop-menu inactive");
    } */
}

function toggleMobileMenu(){
    console.log("1");
    mobileMenu.classList.toggle("inactive");
}

