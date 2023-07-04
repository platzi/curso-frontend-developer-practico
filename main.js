const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener(`click`, toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle(`inactive`);  //de esta manera no tiene que repetirse un click de mas al principio para que empiece a alternar como la opcion de abajo


    // if(desktopMenu.style.display == "block") {
    // desktopMenu.style.display = "none";
    // } else {
    //     desktopMenu.style.display = "block";
    // }
};