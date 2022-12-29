let navbarEmail = document.querySelector(".navbar-email")
let desktopMenu = document.querySelector(".desktop-menu")

navbarEmail.addEventListener('click', showDesktopMenu)

function showDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    console.log("hola")
}

