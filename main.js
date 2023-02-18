const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');
const navbar_cart = document.querySelector('.navbar-shopping-cart');
const mobile_menu = document.querySelector('.mobile-menu');
const icon_mobile_menu = document.querySelector('.menu');
const aside = document.querySelector('.product-detail');

navbar_email.addEventListener('click', clickEmail);
icon_mobile_menu.addEventListener('click', clickIconMenu);
navbar_cart.addEventListener('click', clickIconCart);

function clickEmail(){
    isEnable(false, aside);
    desktop_menu.classList.toggle('inactive');
}

function clickIconMenu(){
    isEnable(false, aside);
    mobile_menu.classList.toggle('inactive');
}

function clickIconCart(){
    isEnable(false, mobile_menu);
    isEnable(false, desktop_menu);
    aside.classList.toggle('inactive');
}

function isEnable(status, item){
    if (status==true){
        item.classList.remove('inactive');
    } else {
        item.classList.add('inactive');
    }
}
