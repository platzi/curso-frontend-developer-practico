const menu_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const mobile_menu =document.querySelector('.mobile-menu ');
const menu = document.querySelector('.menu');

const shopping_cart = document.querySelector('.shopping-cart-container');
const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart')


menu_email.addEventListener('click', toggle_menu)
menu.addEventListener('click', toggle_menu_hamburguer);

navbar_shopping_cart .addEventListener('click', toggle_shopping_cart);


function toggle_menu_hamburguer(){
  mobile_menu.classList.toggle('inactive');

}

function toggle_menu(){
  desktop_menu.classList.toggle('inactive');

}

//Mostrar ocultar carrito de compras
function toggle_shopping_cart(){

  const is_mobile_menu_closed = 
  shopping_cart.classList.toggle('inactive');
  mobile_menu.classList.add('inactive')
  
}