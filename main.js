/* menu email nav*/
const opc_email = document.querySelector('.navbar-email')
const desktop_menu_email = document.querySelector('.desktop-menu')
/* menu mobile */
const mob_menu_img = document.querySelector('.menu');
const mob_menu = document.querySelector('.mobile-menu');
/* carrito de compra */
const number_cart = document.querySelector('.number-cart');
const shopping_cart_container_img = document.querySelector('.navbar-shopping-cart');
const shopping_cart_container = document.querySelector('#shopping-cart-container');
const my_order_content = document.querySelector('.my-order-content');
const shopping_cart_button = document.querySelector('.add-to-cart-button');
/*contenedor de productos*/
const cards_container = document.querySelector('.cards-container');
let img_card = cards_container.querySelectorAll('img');
let btn_add = cards_container.querySelectorAll('.btn_add_cart');

/* Detalles del producto*/
const product_detail = document.querySelector('#product-detail');
const product_detail_close = product_detail.querySelector('.product-detail-close')
let btn_add_product_detail = product_detail.querySelector('.add-to-cart-button');
/*variable de lista de productos del carrito de compra*/
let all_products_cart = [];
let total = 0;
/*tiempo de espera para cerrar menu de email*/
let mouseoutTimeout;

/*eventos para ocultar y mostrar menus usando toggle , add y remove*/
// Evento mouseout y mouseover en opc_email
opc_email.addEventListener('mouseout', () => {
    mouseoutTimeout = setTimeout(() => {
        desktop_menu_email.classList.add('inactive'); // Agregar la clase 'inactive'
    }, 500);
});
opc_email.addEventListener('mouseover', () => {
    clearTimeout(mouseoutTimeout);
    desktop_menu_email.classList.remove('inactive'); // Eliminar la clase 'inactive'
    close_product_detail();
    if(!shopping_cart_container.classList.contains('inactive')){
        shopping_cart_container.classList.toggle('inactive')
    }
});
// Evento mouseout y Evento mouseover en desktop_menu
desktop_menu_email.addEventListener('mouseout', () => {
    mouseoutTimeout = setTimeout(() => {
        desktop_menu_email.classList.add('inactive');
    }, 500);
});
desktop_menu_email.addEventListener('mouseover', () => {
    clearTimeout(mouseoutTimeout);
    desktop_menu_email.classList.remove('inactive');
});
//evento mostrar menu mobile 
mob_menu_img.addEventListener('click', () => {
    mob_menu.classList.toggle('inactive')
    close_product_detail();
    if(!shopping_cart_container.classList.contains('inactive')){
        shopping_cart_container.classList.toggle('inactive')
    }
    
});
//evento toggle carrito de compra
shopping_cart_container_img.addEventListener('click', () => {
    shopping_cart_container.classList.toggle('inactive'); 
    close_product_detail(); // aseguro que siempre se cierre detalles de producto
    if(!mob_menu.classList.contains('inactive')){
        mob_menu.classList.toggle('inactive');
    }
});
//evento toggle detalle de producto
cards_container.addEventListener('click', e=> {
    if(e.target.classList.contains('img-card')){
        product_detail.classList.remove('inactive');
        if(!shopping_cart_container.classList.contains('inactive')){
            shopping_cart_container.classList.toggle('inactive')
        }
    }
});
//evento cerrar detalle de producto
product_detail_close.addEventListener('click', close_product_detail);
function close_product_detail(){
    product_detail.classList.add('inactive');
}


/* cargar los productos*/

function render_products(products_list){
    for(let product of products_list){

        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
     
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.classList.add('img-card');
        
        const product_info = document.createElement('div');
        product_info.classList.add('product-info');
     
        const product_info_div = document.createElement('div');
     
        const product_price = document.createElement('p');
        product_price.innerText = '$' + product.price;
        const product_name = document.createElement('p');
        product_name.innerText = product.name;
        const product_description = document.createElement('p');
        product_description.innerText = product.description;
        product_description.classList.add('inactive');
     
        const figure = document.createElement('figure');
        const img_logo_cart = document.createElement('img');
        img_logo_cart.classList.add('btn_add_cart');
        img_logo_cart.setAttribute('src','./icons/bt_add_to_cart.svg');
        img_logo_cart.setAttribute('id', product.id);
     
        figure.appendChild(img_logo_cart);
        product_info_div.append(product_price, product_name,product_description);
        product_info.append(figure, product_info_div);
        product_card.append(img, product_info);

        cards_container.appendChild(product_card);   
    }
    update_btn_card();
    select_img_card();
    select_btn_detail();

}

function select_img_card(){
    img_card = cards_container.querySelectorAll('img');
    img_card.forEach(button => {
        button.addEventListener('click',render_detail_card);
        
    });
}

function render_detail_card(e){
    const product = e.target.parentElement;
    const id_btn = product.querySelector('figure:nth-child(1) img').id;
    const product_view = product_list.find(product => product.id === id_btn);
  
    //obtengo la ubicacion de los elementos en detalles del producto
    const price  = product_detail.querySelector('.product-info p:nth-child(1)');
    const name  = product_detail.querySelector('.product-info p:nth-child(2)');
    const description  = product_detail.querySelector('.product-info p:nth-child(3)');
    const img = product_detail.querySelector('img:nth-child(2)');
    const selector = product_detail.querySelector('.add-to-cart-button');

    price.textContent = '$' + product_view.price;
    name.textContent  = product_view.name ;
    description.textContent  = product_view.description ;
    img.src = product_view.image; // Cambia esto por la nueva URL que deseas usar
    img.alt = 'imagen del producto'; // Cambia el texto alternativo de la imagen
    selector.setAttribute('id', product_view.id);
}

// selecionar boton para ver detalles del producto
function select_btn_detail(){
    btn_add_product_detail.addEventListener('click',upload_cart);
    close_product_detail();
}

function update_btn_card(){
    btn_add = cards_container.querySelectorAll('.btn_add_cart');

    btn_add.forEach(button => {
        button.addEventListener('click',upload_cart);
        
    });
}

function upload_cart(e){
    
    const id_btn = e.target.id;
    console.log(id_btn);
    const add_product = product_list.find(product => product.id === id_btn);
    // nos devuleve un bool si existe o no el producto
    if(all_products_cart.some(product => product.id === id_btn)){
        const index = all_products_cart.findIndex(product => product.id === id_btn);
        all_products_cart[index].quantity++;
    }else{
        add_product.quantity = 1;
        all_products_cart.push(add_product);
    }
    //console.log(all_products_cart);
    update_number_cart();
    render_shopping_cart();
}

function update_number_cart(){
    let  number = all_products_cart.reduce((acc, product) => acc + product.quantity,0);
    number_cart.textContent = number;
}

/*cargar los productos al carrito en el html */ 
function render_shopping_cart() {
    shopping_cart_container.classList.remove('inactive');
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
        product_price.innerText =  '$'+ product.price;
        product_price.classList.add('sub-total-shopping-cart');

        const figure_quantity = document.createElement('figure');
        figure_quantity.classList.add('figure-quantity');

        const i_more = document.createElement('i');
        i_more.classList.add('fa', 'fa-plus', 'sumar-cantidad');
        i_more.setAttribute('style', 'color: #d1d1d1');
        const product_quantity = document.createElement('input');
        product_quantity.classList.add('quantity-container');
        product_quantity.setAttribute('type', 'text');   
        product_quantity.value = product.quantity;
        const i_less = document.createElement('i');
        i_less.classList.add('fa', 'fa-minus', 'restar-cantidad');
        i_less.setAttribute('style', 'color: #d1d1d1');
        const product_name = document.createElement('p');
        product_name.innerText = product.name;

        const button_close = document.createElement('button');
        button_close.classList.add('btn-delete')
        const i_button = document.createElement('i');
        i_button.classList.add('fas', 'fa-trash-alt');
        i_button.setAttribute('style', 'color: #d1d1d1');

        figure.appendChild(img__shopping_cart);
        figure_quantity.append(i_more,product_quantity ,i_less);
        button_close.appendChild(i_button);
        shopping_cart_item.append(figure,product_name,figure_quantity, product_price,button_close);

        my_order_content.appendChild(shopping_cart_item);

    });  
}

// se maneja for ** of *** para valores o for ** in *** para indices
// representa lo que viene de la BDD basicamente
const product_list = [];

product_list.push({
    id: '001',
    name: 'Bicicleta Montañera',
    price: '180',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_622456-MLV47573234374_092021-F.webp',
    description: 'CUADRO DE ALUMINIO SUPER LIVIANO CON CABLEADO INTERNO HORQUILLA SUSPENSION CON BLOQUEO FRENOS DE DISCOS MECANICOS ',
});
product_list.push({
    id: '002',
    name: 'Powerhouse Ups 1500w',
    price: '504',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_717980-MLV47977090096_102021-F.webp',
    description: 'sistema de alimentación ininterrumpida (UPS), en un cerramiento, montado y probado en fábrica, diseñado para todo tipo de entornos.'
});
product_list.push({
    id: '003',
    name: 'Camara Digital Sony Ilce',
    price: '390',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_745276-MLV52320264720_112022-F.webp',
    description: 'Enfoque Tipo de enfoque: AF con detección de contraste Punto de enfoque: 25 puntos Lente Sensor CMOS Exmor Número de píxeles: 20,1 MP'
});

render_products(product_list);





