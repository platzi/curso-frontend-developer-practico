// Desktop Menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

    // if (desktopMenu.classList.contains('inactive')) {
    //     desktopMenu.classList.remove('inactive');
    //     console.log("Quitaste la clase Inactive");
    // } 
    // else {
    //     desktopMenu.classList.add('inactive');
    //     console.log("Agregaste la clase Inactive");
    // }
    
    desktopMenu.classList.toggle('inactive');

    // Cerrar los siguientes:
    mobileMenu.classList.add('inactive');
    asideMyOrder.classList.add('inactive');
}

// Mobile Menu
const hamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');

    // Cerrar los siguientes:
    desktopMenu.classList.add('inactive');
    asideMyOrder.classList.add('inactive');
}


// Aside My order
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideMyOrder = document.querySelector('.product-detail');

shoppingCart.addEventListener('click', toggleAsideMyOrder);

function toggleAsideMyOrder() {
    asideMyOrder.classList.toggle('inactive');

    // Cerrar los siguientes:
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}




