const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

email.addEventListener('click',()=>{
    desktopMenu.classList.toggle("toggle");
})
