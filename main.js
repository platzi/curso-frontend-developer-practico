const navbarEmail = document.querySelector('.navbar-email');
const accountMenu = document.querySelector('.account-menu');
const mobileIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.product-detail')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')

// When user clicks on navbarEmail the idea is to show or hide the AccountMenu
navbarEmail.addEventListener('click', toggleAccountMenu);


function toggleAccountMenu(){
    // Using classList it will shows or hides class inactive depending on the current status
    accountMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
}

// Add event when click in the Img menu to display the Mobile menu
mobileIconMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
}

// Add windows for shopping cart icon
shoppingCartIcon.addEventListener('click', toggleShoppingCartAside);

function toggleShoppingCartAside(){
    shoppingCartMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    accountMenu.classList.add('inactive');
}
