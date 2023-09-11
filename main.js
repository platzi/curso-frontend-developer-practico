const navEmail = document.querySelector('.navbar-email');
const signOutMenu = document.querySelector('.desktop-menu');


// Toggle: cambiar entre dos estados (altenar, ya se que sea visible o no el menu sign out)
navEmail.addEventListener('click', togglesignOutMenu );

function togglesignOutMenu()
{

    signOutMenu.classList.toggle('inactive')

}

console.log('hola, mundo');