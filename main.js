const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".burguerMenu");
const mobile_menu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", ()=>{
    desktopMenu.classList.toggle("inactive")
})

burguerMenu.addEventListener("click", ()=>{
    mobile_menu.classList.toggle("inactive")
})
