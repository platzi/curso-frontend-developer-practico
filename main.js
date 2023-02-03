
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMEnu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() { 
    desktopMenu.classList.toggle('inactive'); //esta parte nos ayuda a poner o ocultar pedazos de css
}

function toggleMobileMenu() {
    mobileMEnu.classList.toggle('inactive'); 
    

}   