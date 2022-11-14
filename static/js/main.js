const nav_bar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const button_burguer = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopping_cart = document.querySelector('.navbar-shopping-cart');
const cart_detail = document.querySelector('.product-detail');


nav_bar_email.addEventListener('click', toggle_desktop_menu);
button_burguer.addEventListener('click', toggle_mobile_menu);
shopping_cart.addEventListener('click', toggle_shopping_cart);



function toggle_desktop_menu(){
    let is_cart_detail = cart_detail.classList.contains('inactive');

    if(is_cart_detail){
        desktop_menu.classList.toggle('inactive');
    } else{
        cart_detail.classList.add('inactive'); 
        desktop_menu.classList.toggle('inactive');
    }
};

function toggle_mobile_menu(){
    let is_cart_detail = cart_detail.classList.contains('inactive');
    
    if(is_cart_detail){
        mobile_menu.classList.toggle('inactive');
    } else{
        cart_detail.classList.add('inactive'); 
        mobile_menu.classList.toggle('inactive');
    }
};

function toggle_shopping_cart(){
    let is_desktop_menu = !desktop_menu.classList.contains('inactive');
    let is_mobile_menu = !mobile_menu.classList.contains('inactive');
    
    
    if(is_desktop_menu){
        desktop_menu.classList.add('inactive');
        cart_detail.classList.toggle('inactive');
    }else if(is_mobile_menu){
        mobile_menu.classList.add('inactive');
        cart_detail.classList.toggle('inactive'); 
    }else{
        cart_detail.classList.toggle('inactive');
    }
};