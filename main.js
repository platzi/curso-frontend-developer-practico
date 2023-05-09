const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
console.log(desktopMenu);

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');// Esta función agrega o remueve una clase

    // desktopMenu.classList.forEach(clase => {
    //     clase == "inactive"?desktopMenu.classList.remove('inactive'):desktopMenu.classList.add('inactive');
    // })
}