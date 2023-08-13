const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

burguerMenu.addEventListener('click', toogleMobileMenu);
function toogleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}