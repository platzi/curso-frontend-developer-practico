const linav = document.querySelector(".navbar-email")
const desmenu = document.querySelector(".desktop-menu")
const burguer = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

linav.addEventListener('click', desplegable)
burguer.addEventListener('click', hamburguesa)


function desplegable() {
    desmenu.classList.toggle('inactive')
}

function hamburguesa() {
    mobileMenu.classList.toggle('burguerI')
}