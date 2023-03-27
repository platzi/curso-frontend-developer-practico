const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");


menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    // if (menuDesktop.classList[1] == "inactive") {
    //     menuDesktop.classList.remove("inactive")
    // } else {
    //     menuDesktop.classList.add("inactive")
    // }
    menuDesktop.classList.toggle("inactive");
};