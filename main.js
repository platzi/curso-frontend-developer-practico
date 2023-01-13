const  menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
hamburguerIcon.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu() {     
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() { 
    console.log('Esta ingresando');  
    mobileMenu.classList.toggle('inactive');  
    
    

}



