// Desktop Menu
const nav_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

nav_email.addEventListener('click', () => {
    if (!menu_mobile.classList.contains('inactive')) { 
        menu_mobile.classList.add('inactive') 
    }

    if (!my_order.classList.contains('inactive')) { 
        my_order.classList.add('inactive') 
    }

    desktop_menu.classList.toggle('inactive');
});

// Mobile Menu
const menu_icon = document.querySelector('.menu');
const menu_mobile = document.querySelector('.mobile-menu');

menu_icon.addEventListener('click', () => {
    if (!desktop_menu.classList.contains('inactive')) { 
        desktop_menu.classList.add('inactive') 
    }

    if (!my_order.classList.contains('inactive')) { 
        my_order.classList.add('inactive') 
    }

    menu_mobile.classList.toggle('inactive');
})


// Shopping cart Menu
const cart_icon = document.querySelector('.navbar-shopping-cart');
const my_order = document.querySelector('.my-order');

cart_icon.addEventListener('click', () => {
    if (!desktop_menu.classList.contains('inactive')) { 
        desktop_menu.classList.add('inactive') 
    }

    if (!menu_mobile.classList.contains('inactive')) { 
        menu_mobile.classList.add('inactive') 
    }

    my_order.classList.toggle('inactive');
})
