const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const manuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');// Esta función agrega o remueve una clase

    // desktopMenu.classList.forEach(clase => {
    //     clase == "inactive"?desktopMenu.classList.remove('inactive'):desktopMenu.classList.add('inactive');
    // })
}


manuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    console.log("hola")
    mobileMenu.classList.toggle('inactive');// Esta función agrega o remueve una clase
}