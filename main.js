const nav_bar = document.querySelector(".navbar-email")
const nav_email = document.querySelector(".desktop-menu")

function quitarInactive(){
nav_email.classList.toggle ("inactive")
}

nav_bar.addEventListener("click", quitarInactive)