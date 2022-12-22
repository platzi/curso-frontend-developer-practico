const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
menuEmail.addEventListener('click', toggleDesktopMenu);


// ALTERNATIVA 1 
// function toggleDesktopMenu() {
//     if (desktopMenu.classList.contains('inactive')){
//         desktopMenu.classList.remove('inactive');
//     }else{
//         desktopMenu.classList.add('inactive');
//     }
// }

// ALTERNATIVA 2
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}