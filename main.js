const navbar_email = document.querySelector('.navbar-email');
const navbar_burger = document.querySelector('.menu');
const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.mobile-menu');
const my_order_desktop = document.querySelector('.product-detail');

navbar_email.addEventListener('click', my_account_menu_visibility);
navbar_burger.addEventListener('click', menu_visibility);
navbar_shopping_cart.addEventListener('click', my_order_visibility);

function my_account_menu_visibility(){
    desktop_menu.classList.toggle('inactive');
    if(!my_order_desktop.classList.contains('inactive')){
        my_order_desktop.classList.toggle('inactive');
    }
}

function menu_visibility(){
    mobile_menu.classList.toggle('visible');
    if(!my_order_desktop.classList.contains('inactive')){
        my_order_desktop.classList.toggle('inactive');
    }
}

function my_order_visibility(){
    my_order_desktop.classList.toggle('inactive');
    
    if(!desktop_menu.classList.contains('inactive')){
        desktop_menu.classList.toggle('inactive');
    }
    if(mobile_menu.classList.contains('visible')){
        mobile_menu.classList.toggle('visible');
    }
}