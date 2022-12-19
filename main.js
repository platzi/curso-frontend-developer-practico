const navbarEmail = document.querySelector('.navbar-email');
const accountMenu = document.querySelector('.account-menu');

// When user clicks on navbarEmail the idea is to show or hide the AccountMenu
navbarEmail.addEventListener('click', toggleAccountMenu);


function toggleAccountMenu(){
    // Using classList it will shows or hides class inactive depending on the current status
    accountMenu.classList.toggle('inactive');
}

