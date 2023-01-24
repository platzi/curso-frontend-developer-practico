const desktopMenuToggle = document.querySelector("#desktop-menu-toggle");
const desktopMenu = document.querySelector("#desktop-menu");

desktopMenuToggle.addEventListener("click", () => {
    desktopMenu.classList.toggle("inactive");
})