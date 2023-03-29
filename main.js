
const navEmail = document.querySelector(".navbar-email")
const deskMenu = document.querySelector(".desktop-menu")
navEmail.addEventListener('click',toogleDeskMenu)
function toogleDeskMenu() {
    deskMenu.classList.toggle('inactive')
}
