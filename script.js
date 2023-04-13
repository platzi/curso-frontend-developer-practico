let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

function toggleEmailMenu() {
    desktopMenu.classList.toggle("inactive") 
}

navbarEmail.addEventListener('click',toggleEmailMenu)
console.log(navbarEmail)

desktopMenu.addEventListener('mouseout',toggleEmailMenu)