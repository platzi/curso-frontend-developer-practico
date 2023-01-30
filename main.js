const menuEmail = document.querySelector(".navbar-email");
const menuFlecha = document.querySelector(".email-flecha")
const desktopMenu = document.querySelector(".desktop-menu");

const burgerIcon = document.querySelector(".burgerIcon");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuFlecha.addEventListener("click", toggleDesktopMenu);

burgerIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(){
    if(desktopMenu.className == "desktop-menu inactive"){
        desktopMenu.className = "desktop-menu";
    }
    else{
        desktopMenu.className = "desktop-menu inactive";
    }
    /* function toggleDesktopMenu(){
        desktopMenu.classList.toggle("inactive");
    } METODO DE JUAN*/
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}
