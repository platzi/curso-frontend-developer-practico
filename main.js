const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener('click', toggleMenu );

function toggleMenu(event){
    desktopMenu.classList.toggle('inactive');
}// con toggle es mas facil velo pero felicidades por completar el reto
// Mi forma de cumplir el reto
// console.log('yea');
// let clase = desktopMenu.getAttribute('class');
// if(clase === "desktop-menu inactive"){
//     desktopMenu.classList.remove('inactive');
//     } else{
//         desktopMenu.classList.add('inactive');
