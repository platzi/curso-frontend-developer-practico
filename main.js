const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');
const mobile_menu = document.querySelector('.mobile-menu');
const icon_mobile_menu = document.querySelector('.menu');

navbar_email.addEventListener('click', clickEmail);
icon_mobile_menu.addEventListener('click', clickIconMenu);

function clickEmail(){
    desktop_menu.classList.toggle('inactive');
}

function clickIconMenu(){
    mobile_menu.classList.toggle('inactive');
    console.log("OK");
}