const user = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");

user.addEventListener("click", menus);

function menus(){

    if(menu.classList.contains("inactive")){
        menu.classList.remove("inactive");
    } else {
        menu.classList.add("inactive")
    }
}
