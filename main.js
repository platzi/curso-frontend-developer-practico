const navEmail = document.querySelector('.navbar-email');
const signOutMenu = document.querySelector('.desktop-menu');

// Creación del selector para el menú en versión mobile
const menuHamIcon =  document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Toggle: cambiar entre dos estados (altenar, ya se que sea visible o no el menu sign out)
navEmail.addEventListener('click', togglesignOutMenu );



function togglesignOutMenu()
{

    signOutMenu.classList.toggle('inactive')
 
}

//Togle: ahora para hacer visible o no el menú de la versión mobile
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu()
{
    mobileMenu.classList.toggle('inactive')
}
