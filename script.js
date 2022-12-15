console.log("Hello, world!");

var navbar_email = document.querySelector(".navbar-email");
var desktop_menu = document.querySelector(".desktop-menu");
var menu_icon = document.querySelector(".menu");
var mobile_menu = document.querySelector(".mobile-menu");


function toggle_email_menu(e) {
    desktop_menu.classList.toggle("inactive");
}

function toggle_mobile_menu(e) {
    mobile_menu.classList.toggle("inactive");
}

navbar_email.addEventListener("click", toggle_email_menu);
menu_icon.addEventListener("click", toggle_mobile_menu);