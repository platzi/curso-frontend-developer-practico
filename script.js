const navEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.hamMenu')
const mobileMenu = document.querySelector('.mobile-menu')

navEmail.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {

    desktopMenu.classList.toggle('inactive');

//ASI RESOLVÍ YO EL EJERCICIO
/*if (desktopMenu.style.display === 'none') {
    desktopMenu.style.display = 'block';
}
else {
        desktopMenu.style.display = 'none';
    }*/

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}