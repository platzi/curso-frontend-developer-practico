/* Opcion email nav*/
const opc_email = document.querySelector('.navbar-email')
const desktop_menu_email = document.querySelector('.desktop-menu')

let mouseoutTimeout;

/* opcion general mobile */

const mob_menu_img = document.querySelector('.menu');
const mob_menu = document.querySelector('.mobile-menu');

/* carrito de compra */

const shopping_card_container_img = document.querySelector('.navbar-shopping-cart');
const shopping_card_container = document.querySelector('#shopping-cart-container');
const my_order_content = document.querySelector('.my-order-content');
const shopping_cart_button = document.querySelector('.add-to-cart-button');

//variable de lista de producto agg
let all_products_cart = [];


/*contenedor padre de productos*/
const cards_container = document.querySelector('.cards-container');

/*open/closed Detalles del producto*/
const product_detail = document.querySelector('#product-detail');
const product_detail_close = document.querySelector('.product-detail-close')

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
    close_product_detail();
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


/*evento menu mobile */ 
mob_menu_img.addEventListener('click', () => {
    mob_menu.classList.toggle('inactive')
    close_product_detail();
    if(!shopping_card_container.classList.contains('inactive')){
        shopping_card_container.classList.toggle('inactive')
    }
    
});

/*evento menu de carrito de compra*/

shopping_card_container_img.addEventListener('click', () => {
    shopping_card_container.classList.toggle('inactive'); 
    close_product_detail(); // aseguro que siempre se cierre detalles de producto
    if(!mob_menu.classList.contains('inactive')){
        mob_menu.classList.toggle('inactive');
    } 
});

/*evento cerrar detalle de producto*/
product_detail_close.addEventListener('click', close_product_detail);

shopping_cart_button.addEventListener('click', () => {
    console.log('accion del boton');
});


cards_container.addEventListener('click', e=> {
    if(e.target.classList.contains('btn_add_cart')){
        const product = e.target.parentElement.parentElement;

        const info_product = {
            quantity: 1,
            name: product.querySelector('div p:nth-child(2)').textContent,
            price: product.querySelector('div p:nth-child(1)').textContent,
            image: product.parentElement.querySelector('img').src,
        }

        all_products_cart = [...all_products_cart, info_product];
        console.log(all_products_cart);

        add_shopping_cart();
    }
});


function open_product_detail(name, price, description, image){
    product_detail.classList.remove('inactive');
        if(!shopping_card_container.classList.contains('inactive')){
            shopping_card_container.classList.toggle('inactive')
        }
        
        const price_element  = document.querySelector('#product-detail .product-info p:nth-child(1)');
        const name_element  = document.querySelector('#product-detail .product-info p:nth-child(2)');
        const description_element  = document.querySelector('#product-detail .product-info p:nth-child(3)');
        const imgElement = document.querySelector('#product-detail > img:nth-child(2)');

        price_element.textContent = "$"+price;
        name_element.textContent = name;
        description_element.textContent = description;
        imgElement.src = image; // Cambia esto por la nueva URL que deseas usar
        imgElement.alt = 'imagen del producto'; // Cambia el texto alternativo de la imagen
}

function close_product_detail(){
    product_detail.classList.add('inactive');
}

/* cargar los productos de la lista */

function render_products(products_list){
    for(let product of products_list){

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
        img_logo_cart.classList.add('btn_add_cart');
        img_logo_cart.setAttribute('src','./icons/bt_add_to_cart.svg');
     
        figure.appendChild(img_logo_cart);
        product_info_div.append(product_price, product_name);
        product_info.append(figure, product_info_div);
        product_card.append(img, product_info);

        cards_container.appendChild(product_card);   
        
        img.addEventListener('click', () => {
            open_product_detail(product.name, product.price, product.description, product.image);
        });
     }
}


function add_shopping_cart() {
    //limpiar el contenedor del carrito
    const element = document.querySelector('.my-order-content');
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
    
   // my_order_content.textContent = null; tambien se puede asi pero quedan los contenedores quedan vacios

    all_products_cart.forEach(product=>{
        const shopping_cart_item = document.createElement('div');
        shopping_cart_item.classList.add('shopping-cart');

        const figure = document.createElement('figure');
        const img__shopping_cart = document.createElement('img');
        img__shopping_cart.setAttribute('src', product.image );

        const product_price = document.createElement('p');
        product_price.innerText = '$' + product.price;
        const product_name = document.createElement('p');
        product_name.innerText = product.name;

        const img__shopping_close = document.createElement('img');
        img__shopping_close.setAttribute('src', './icons/icon_close.png');

        figure.appendChild(img__shopping_cart);
        shopping_cart_item.append(figure,product_name, product_price,img__shopping_close);

        my_order_content.appendChild(shopping_cart_item);

    });
    
}


// se maneja for ** of *** para valores o for ** in *** para indices
// representa lo que viene de la BDD basicamente
const product_list = [];

product_list.push({
    name: 'Bicicleta Montañera',
    price: '180',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_622456-MLV47573234374_092021-F.webp',
    description: 'CUADRO DE ALUMINIO SUPER LIVIANO CON CABLEADO INTERNO HORQUILLA SUSPENSION CON BLOQUEO FRENOS DE DISCOS MECANICOS ',
});
product_list.push({
    name: 'Powerhouse Ups 1500w',
    price: '504',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_717980-MLV47977090096_102021-F.webp',
    description: 'sistema de alimentación ininterrumpida (UPS), en un cerramiento, montado y probado en fábrica, diseñado para todo tipo de entornos.'
});
product_list.push({
    name: 'Camara Digital Sony Ilce',
    price: '390',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_745276-MLV52320264720_112022-F.webp',
    description: 'Enfoque Tipo de enfoque: AF con detección de contraste Punto de enfoque: 25 puntos Lente Sensor CMOS Exmor Número de píxeles: 20,1 MP'
});


render_products(product_list);
