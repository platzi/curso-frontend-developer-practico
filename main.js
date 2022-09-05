const linav = document.querySelector(".navbar-email")
const desmenu = document.querySelector(".desktop-menu")

linav.addEventListener('click', desplegable)

function desplegable() {
    desmenu.classList.toggle('inactive')
}