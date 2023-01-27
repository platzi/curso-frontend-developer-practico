

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu")
const menuIcon = document.querySelector(".menu")

const email = document.querySelector(".navbar-email")



email.addEventListener("click", toggleDesktopMenu)
menuIcon.addEventListener("click",toggleMobileMenu)


function toggleDesktopMenu(event){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(event) {
    console.log("click")
    mobileMenu.classList.toggle("inactive")
}