

//mostrar ocultar menu mobile
const mobile_menu =document.querySelector('.mobile-menu ');
const menu = document.querySelector('.menu');
menu.addEventListener('click', toggle_menu_hamburguer);

function toggle_menu_hamburguer(){
  mobile_menu.classList.toggle('inactive');

}


//Mostrar ocultar menu del email
const menu_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
menu_email.addEventListener('click', toggle_menu)

function toggle_menu(){
  desktop_menu.classList.toggle('inactive');

}

//Mostrar ocultar carrito de compras

const shopping_cart = document.querySelector('.shopping-cart-container');
const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart')
navbar_shopping_cart.addEventListener('click', toggle_shopping_cart);

function toggle_shopping_cart(){

  shopping_cart.classList.toggle('inactive');
  mobile_menu.classList.add('inactive');
  product_detail.classList.add('inactive');
  shopping_cart_content.classList.remove('inactive');
  
}


//mostrat ocultar carrito de compras
const shopping_cart_content = document.querySelector('.shopping-cart-content')

//Funcion mostrar detalles Producto


//abrir detail product
const product_detail= document.querySelector('.product-detail');
const product_card_img  = document.querySelector('.product_card_figure')

function open_detail_product(){
  product_detail.classList.remove('inactive')
  mobile_menu.classList.add('inactive')
  shopping_cart.classList.add('inactive')
}

//cerra detail product

const btn_cerrar = document.querySelector('.product-detail-close')
 btn_cerrar.addEventListener('click', close_product_detail);

function close_product_detail(){
  product_detail.classList.add('inactive')
} 





/* -------------------------------------------------------------------------- */
/* ---------------------- lista de producto con arrays ---------------------- */

const product_list =[];
product_list.push({
  name:'Bike',
  price: 130,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
product_list.push({
  name:'Car',
  price: 230,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

product_list.push({
  name:'Lapto',
  price: 430,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  
});

product_list.push({
  name:'Bike',
  price: 130,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
product_list.push({
  name:'Car',
  price: 230,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

product_list.push({
  name:'Lapto',
  price: 430,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  
});


//Funcion para renderizar productos
function render_product(arr){
  for ( product of arr ){
    const product_card = document.createElement('div');
    product_card.classList.add('product-card');

    //image
    const product_card_figure = document.createElement('figure');
    product_card_figure.addEventListener('click', open_detail_product)
    product_card_figure.classList.add('product-card-figure')

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.classList.add('product-card-img')

    //info
    const product_info = document.createElement('div');
    product_info.classList.add('product-info');

    const product_info_div = document.createElement('div');
    const product_price_p = document.createElement('p');
    product_price_p.innerText= '$' + product.price;
    const product_name_p = document.createElement('p');
    product_name_p.innerText=  product.name;

    const product_info_figure = document.createElement('figure');
    const product_img_card = document.createElement('img');
    product_img_card.setAttribute('src', '/icons/bt_add_to_cart.svg');


    product_info_figure.appendChild(product_img_card);
    product_info_div.appendChild(product_name_p);
    product_info_div.appendChild(product_price_p)

    product_info.appendChild(product_info_figure);
    product_info.appendChild(product_info_div);

    product_card_figure.appendChild(img);
    product_card.appendChild(product_card_figure);
    product_card.appendChild(product_info);


    const cards_container = document.querySelector('.cards-container')
    cards_container.appendChild(product_card);

  }
}

render_product(product_list);

//funcion renderizar product detail



