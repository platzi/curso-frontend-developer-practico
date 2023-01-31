const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click',toogleDesktopMenu);

function toogleDesktopMenu(){
    // forma larga
    // if(desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // }
    // else{
    //     desktopMenu.classList.add('inactive');
    // }

    //forma profesional

    desktopMenu.classList.toggle('inactive');

}