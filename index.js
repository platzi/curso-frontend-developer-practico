const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const bntMenuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

email.addEventListener('click',()=>{
    desktopMenu.classList.toggle("toggle");
})

bntMenuMobile.addEventListener("click",()=>{
    mobileMenu.classList.toggle("toggle");
})
