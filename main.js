const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuIcon = document.querySelector(".menu")

mobileMenuIcon.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
})
navEmail.addEventListener("click", ()=>{ //Uso una funcion de flecha para el evento ya que la funcion no se volvera a usar.

    desktopMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
});