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

/*creamos cada elemento HTML correspondiente para los atributos del producto*/
const cards_container = document.querySelector('.cards-container');

/*detalles de productos abrir - cerrar*/
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



// se maneja for ** of *** para valores o for ** in *** para indices
// representa lo que viene de la BDD basicamente
product_list = [];
product_list.push({
    name: 'Bicicleta Montañera',
    price: '180',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_622456-MLV47573234374_092021-F.webp',
    descripcion: '- CUADRO DE ALUMINIO SUPER LIVIANO CON CABLEADO INTERNO HORQUILLA SUSPENSION CON BLOQUEO FRENOS DE DISCOS MECANICOS COMPONENTES SHIMANO MANDO DE CAMBIOS 7x3 CON FRENOS INTEGRADAS',
});
product_list.push({
    name: 'Powerhouse Ups 1500w',
    price: '504',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_717980-MLV47977090096_102021-F.webp',
    descripcion: 'sistema de alimentación ininterrumpida (UPS), en un cerramiento, montado y probado en fábrica, diseñado para todo tipo de entornos.'
});
product_list.push({
    name: 'Camara Digital Sony Ilce',
    price: '390',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_745276-MLV52320264720_112022-F.webp',
    descripcion: 'Enfoque Tipo de enfoque: AF con detección de contraste Punto de enfoque: 25 puntos Lente Sensor CMOS Exmor Número de píxeles: 20,1 MP'
});

/*
    <aside id = 'product-detail' class="inactive">
      <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
      <div class="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button class="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
          Add to cart
        </button>
      </div>
    </aside>
    function open_product_detail(name, price, image, description){
        img.addEventListener('click', open_product_detail(product.name, product.price, product.image, product.description ));
*/

function open_product_detail(){
    product_detail.classList.remove('inactive');
    if(!shopping_card_container.classList.contains('inactive')){
        shopping_card_container.classList.toggle('inactive')
    }
}

function close_product_detail(){
    product_detail.classList.add('inactive');
}

/* cargar los productos de la lista */

function render_products(products_list){
    for(product of products_list){

        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
     
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', open_product_detail);

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
