let desktopMenu = document.querySelector(".desktop-menu");
let navBarEmail = document.querySelector(".navbar-email");
let mobileMenuIcon = document.querySelector(".mobile-menu-icon");
let mobileMenu = document.querySelector(".mobile-menu");

navBarEmail.addEventListener('click',toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
