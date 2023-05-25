// 1 - Define the element in the HTML, in this example I used classes. I chose the name of the const, I tried to explain the conts of easy way 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMobileMenu = document.querySelector('.icon-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.aside-shopping-cart');

// 2- Listen the even and declare the function, in this case we created a script where user to click on an element and then a function will be run

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMobileMenu.addEventListener('click', toggleMobileMenu);
iconShoppingCart.addEventListener('click', toggleShoppingCart);

// 3- create the function. The mayority of the functions are same, beacuse we wanted to hide or display some elements. Even we applied a logic without if, for example, when click on the shopping cart we hide the rest of the element like a desktop menu or mobile menu.

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
    shoppingCart.classList.add('inactive'); // closing ShoppingCart
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
    shoppingCart.classList.add('inactive'); // closing ShoppingCart
}

function toggleShoppingCart () {
    shoppingCart.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); // closing Mobile Menu
    desktopMenu.classList.add('inactive'); // closing Desktop Menu
}

