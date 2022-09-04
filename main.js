const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector(".mobile-menu");

function toggleDesktopMenu() {
    
    desktopMenu.classList.toggle('inactive');
    console.log(desktopMenu.classList);

}

function toggleMobileMenu() {
    
    mobileMenu.classList.toggle('inactive');
    console.log(desktopMenu.classList);

}

/* function inactiveisactive() {
    
    let listclass = desktopMenu.classList;

    const set = new Set(listclass);
    const indx = ;

    console.log(indx);
    console.log(type(set));
    console.log(Array.isArray(set));
    console.log(set.indexOf('inactive'));

    if(1 === 1){

        desktopMenu.classList.add('inactive')

    }else{

        menuEmail.addEventListener('click', toggleDesktopMenu);

    }

    console.log(listclass);

} */

//window.addEventListener('click', inactiveisactive);

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

//console.log(desktopMenu.classList);