/* Opcion email nav*/
const opc_email = document.querySelector('.navbar-email')
const desktop_menu_email = document.querySelector('.desktop-menu')

let mouseoutTimeout;

// Evento mouseout en opc_email
opc_email.addEventListener('mouseout', () => {
    mouseoutTimeout = setTimeout(() => {
        desktop_menu_email.classList.add('inactive'); // Agregar la clase 'inactive'
    }, 500);
});

// Evento mouseover en opc_email
opc_email.addEventListener('mouseover', () => {
    clearTimeout(mouseoutTimeout);
    desktop_menu_email.classList.remove('inactive'); // Eliminar la clase 'inactive'

    if(!shopping_card_container.classList.contains('inactive')){
        shopping_card_container.classList.toggle('inactive')
    }
});

// Evento mouseout en desktop_menu
desktop_menu_email.addEventListener('mouseout', () => {
    mouseoutTimeout = setTimeout(() => {
        desktop_menu_email.classList.add('inactive');
    }, 500);
});

// Evento mouseover en desktop_menu
desktop_menu_email.addEventListener('mouseover', () => {
    clearTimeout(mouseoutTimeout);
    desktop_menu_email.classList.remove('inactive');
});

/* opcion general mobile */

const mob_menu_img = document.querySelector('.menu')
const mob_menu = document.querySelector('.mobile-menu')

mob_menu_img.addEventListener('click', () => {
    mob_menu.classList.toggle('inactive')
    if(!shopping_card_container.classList.contains('inactive')){
        shopping_card_container.classList.toggle('inactive')
    }
    
});

/* carrito de compra */

const shopping_card_container_img = document.querySelector('.navbar-shopping-cart');
const shopping_card_container = document.querySelector('#shopping-cart-container');

shopping_card_container_img.addEventListener('click', () => {
    shopping_card_container.classList.toggle('inactive')

    if(!mob_menu.classList.contains('inactive')){
        mob_menu.classList.toggle('inactive')
    }
    
});
// se maneja for ** of *** para valores o for ** in *** para indices
// representa lo que viene de la BDD basicamente
product_list = [];
product_list.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Auto',
    price: '1500',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
product_list.push({
    name: 'Balls',
    price: '400',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/*creamos cada elemento HTML correspondiente para los atributos del producto*/
cards_container = document.querySelector('.cards-container')


function render_products(products_list){
    for(product of products_list){

        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
     
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
     
        const product_info = document.createElement('div');
        product_info.classList.add('product-info');
     
        const product_info_div = document.createElement('div');
     
        const product_price = document.createElement('p');
        product_price.innerText = '$' + product.price;
        const product_name = document.createElement('p');
        product_name.innerText = product.name; 
     
        const figure = document.createElement('figure');
        const img_logo_cart = document.createElement('img');
        img_logo_cart.setAttribute('src','./icons/bt_add_to_cart.svg');
     
        figure.appendChild(img_logo_cart);
        product_info_div.append(product_price, product_name);
        product_info.append(figure, product_info_div);
        product_card.append(img, product_info);
        /*product_card.appendChild(img);
        product_card.appendChild(product_info);*/
         
        cards_container.appendChild(product_card);
     }
}

render_products(product_list);
