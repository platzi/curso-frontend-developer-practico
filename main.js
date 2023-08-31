const $ = r => document.querySelector(r)

const menuEmail = $(".navbar-email")
menuEmail.addEventListener("click", () => {
    const desktopMenu = $(".desktop-menu")
    desktopMenu.classList.toggle("inactive")
})