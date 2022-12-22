const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu)


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

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}