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
const my_total = shopping_cart_container.querySelector('.total');
let btn_delete_cart = document.querySelectorAll('.btn-delete');
let btn_i_less = document.querySelectorAll('.less-quantity');
let btn_i_more = document.querySelectorAll('.more-quantity');
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
    update_btns_card();
}

function render_detail_card(e){
    const product = e.target.parentElement;
    const id_btn = product.querySelector('figure:nth-child(1) img').id;
    const product_view = product_list.find(product => product.id === id_btn);
  
    //referencia a selectores del detalle del producto
    const price  = product_detail.querySelector('.product-info p:nth-child(1)');
    const name  = product_detail.querySelector('.product-info p:nth-child(2)');
    const description  = product_detail.querySelector('.product-info p:nth-child(3)');
    const img = product_detail.querySelector('img:nth-child(2)');
    const selector = product_detail.querySelector('.add-to-cart-button');

    price.textContent = '$' + product_view.price;
    name.textContent  = product_view.name ;
    description.textContent  = product_view.description ;
    img.src = product_view.image; // nueva URL que deseas usar
    img.alt = 'imagen del producto'; // Cambia el texto alternativo de la imagen
    selector.setAttribute('id', product_view.id);
    //dispara evento de click para agregar al carrito desde detail
    select_btn_detail();
}

/*cargar los productos al carrito en el html */ 
function render_shopping_cart() {
    shopping_cart_container.classList.remove('inactive');
    //limpiar el contenedor del carrito
    while(my_order_content.firstChild){
        my_order_content.removeChild(my_order_content.firstChild);
    }
   // my_order_content.textContent = null; tambien se puede asi pero quedan los contenedores quedan vacios

    all_products_cart.forEach(product=>{
        const shopping_cart_item = document.createElement('div');
        shopping_cart_item.classList.add('shopping-cart');

        const figure = document.createElement('figure');
        const img__shopping_cart = document.createElement('img');
        img__shopping_cart.setAttribute('src', product.image );

        const product_price = document.createElement('p');
        product_price.innerText =  '$'+ parseFloat(product.price*product.quantity).toFixed(2);
        product_price.classList.add('sub-total');

        const figure_quantity = document.createElement('figure');
        figure_quantity.classList.add('figure-quantity');

        const i_more = document.createElement('i');
        i_more.classList.add('fa', 'fa-plus', 'more-quantity');
        i_more.setAttribute('style', 'color: #d1d1d1');

        const product_quantity = document.createElement('input');
        product_quantity.classList.add('quantity-container');
        product_quantity.setAttribute('type', 'text');   
        product_quantity.value = product.quantity;

        const i_less = document.createElement('i');
        i_less.classList.add('fa', 'fa-minus', 'less-quantity');
        i_less.setAttribute('style', 'color: #d1d1d1');

        const product_name = document.createElement('p');
        product_name.innerText = product.name;

        
        const i_button_delete = document.createElement('i');
        i_button_delete.classList.add('fas', 'fa-trash-alt','btn-delete' );
        i_button_delete.setAttribute('style', 'color: #d1d1d1');
        i_button_delete.setAttribute('id', product.id);

        figure.appendChild(img__shopping_cart);
        figure_quantity.append(i_more,product_quantity ,i_less);
        shopping_cart_item.append(figure,product_name,figure_quantity, product_price,i_button_delete);

        my_order_content.appendChild(shopping_cart_item);

    });  
    update_btns_cart();
    update_total_cart();
}

// disparar evento para cargar producto al carrito desde la vista de detalles del producto
function select_btn_detail(){
    btn_add_product_detail.addEventListener('click',upload_cart);
}

// cargar a la lista del carrito
function upload_cart(e){
    
    const id_btn = e.target.id;
    const add_product = product_list.find(product => product.id === id_btn);
    // nos devuleve un bool si existe o no el producto
    if(all_products_cart.some(product => product.id === id_btn)){
        const index = all_products_cart.findIndex(product => product.id === id_btn);
        all_products_cart[index].quantity++;
    }else{
        add_product.quantity = 1;
        all_products_cart.push(add_product);
    }
    close_product_detail();
    update_number_cart();
    render_shopping_cart();
}

// aumentar el numero en el icono del carrito por producto
function update_number_cart(){
    let  number = all_products_cart.reduce((acc, product) => acc + product.quantity,0);
    number_cart.textContent = number;
}
// actulizar total del carrito
function update_total_cart() {
    //limpiar el contenedor del carrito
    console.log(my_total.firstChild)
    while(my_total.firstChild){
        my_total.removeChild(my_total.firstChild);
    }
    const sub_total = my_order_content.querySelectorAll('.sub-total');
    let total = 0;

    sub_total.forEach((subtotalElement) => {
        const subtotalValue = parseFloat(subtotalElement.textContent.replace('$', ''));
        total += subtotalValue;
    });
    my_total.textContent = '$' + total.toFixed(2);
}
// Agrega evento a los btns de los contenedores de producto
function update_btns_card(){
    // disparar evento al selecionar una imagen de algun producto
    img_card = cards_container.querySelectorAll('img');
    img_card.forEach(button => {
        button.addEventListener('click',render_detail_card);
        
    });
    // disparar evento para cargar al carrito desde la carta contenedora del producto
    btn_add = cards_container.querySelectorAll('.btn_add_cart');
    btn_add.forEach(button => {
        button.addEventListener('click',upload_cart);
        
    }); 
}
// Agrega evento a los btns en el carrito
function update_btns_cart(){
    btn_i_less = document.querySelectorAll('.less-quantity');
    btn_i_less.forEach(button => {
        button.addEventListener('click', (event) => {
            // Llama a la función update_quantity_product con ambos argumentos
            update_quantity_product(event, '-');
        });
    });

    btn_i_more = document.querySelectorAll('.more-quantity');
    btn_i_more.forEach(button => {
        button.addEventListener('click', (event) => {
            update_quantity_product(event, '+');
        });
    });

    btn_delete_cart = document.querySelectorAll('.btn-delete');
    //console.log(btn_delete_cart);// observamos que se actulizan los btns para cada producto
    btn_delete_cart.forEach(button => {
        button.addEventListener('click',delete_product_cart);
        
    });
}
function update_quantity_product(e, operador){
    const product = e.target.parentElement.parentElement
    const id_btn = product.querySelector('i:nth-child(5)').id;
    const clicked_product = product_list.find(product => product.id === id_btn);
    
    if(operador==='-' && clicked_product.quantity > 1){
        clicked_product.quantity--;
    }else if(operador==='+'){
        clicked_product.quantity++;
    }
    render_shopping_cart();
}

function delete_product_cart(e){
    const id_btn = e.target.id;
    const result = all_products_cart.filter(product => product.id !== id_btn);
    all_products_cart.length = 0; // Vacía el arreglo original
    all_products_cart.push(...result);
    render_shopping_cart();
    update_number_cart();
}



// se maneja for ** of *** para valores o for ** in *** para indices
// representa lo que viene de la BDD basicamente
const product_list = [];

product_list.push({
    id: '001',
    name: 'Bicicleta Montañera',
    price: '180.35',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_622456-MLV47573234374_092021-F.webp',
    description: 'CUADRO DE ALUMINIO SUPER LIVIANO CON CABLEADO INTERNO HORQUILLA SUSPENSION CON BLOQUEO FRENOS DE DISCOS MECANICOS ',
});
product_list.push({
    id: '002',
    name: 'Powerhouse Ups 1500w',
    price: '504.00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_717980-MLV47977090096_102021-F.webp',
    description: 'sistema de alimentación ininterrumpida (UPS), en un cerramiento, montado y probado en fábrica, diseñado para todo tipo de entornos.'
});
product_list.push({
    id: '003',
    name: 'Camara Digital Sony Ilce',
    price: '390.50',
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_745276-MLV52320264720_112022-F.webp',
    description: 'Enfoque Tipo de enfoque: AF con detección de contraste Punto de enfoque: 25 puntos Lente Sensor CMOS Exmor Número de píxeles: 20,1 MP'
});
product_list.push({
    id: '004',
    name: 'Silla Gamer Negro',
    price: '143.35',
    image: 'https://http2.mlstatic.com/D_NQ_NP_838965-MLV70331588740_072023-O.webp',
    description: 'Silla Gamer Rocker Para Oficina en Cuero Acolchada Giratoria, Con un diseño clásico y versátil',
});
product_list.push({
    id: '005',
    name: 'Monitor Dell 19 Clase A',
    price: '59.99',
    image: 'https://http2.mlstatic.com/D_NQ_NP_671550-MLV70153538309_062023-O.webp',
    description: 'Disponemos desde 19" hasta 23" marca Dell'
});
product_list.push({
    id: '006',
    name: 'Case Gamer Fan Nova N5',
    price: '59.50',
    image: 'https://http2.mlstatic.com/D_NQ_NP_927823-MLV53689783738_022023-O.webp',
    description: 'CASE GAMEMAX GAMER NOVA N5 CON DISIPADOR RGB POSTERIOR'
});

product_list.push({
    id: '007',
    name: 'Corneta Marca Kimiso',
    price: '15.00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_932658-MLV54916834527_042023-O.webp',
    description: 'CORNETA MARCA KIMISO DE 6,5 MODELO 634',
});
product_list.push({
    id: '008',
    name: 'Combo Hiwings Hi600 Rgb',
    price: '14.99',
    image: 'https://http2.mlstatic.com/D_NQ_NP_807319-MLV54960870014_042023-O.webp',
    description: 'Transferencia, Deposito, Efectivo y tarjeta de débito (punto de venta).'
});
product_list.push({
    id: '009',
    name: 'Audifonos De Pc Gamers A65',
    price: '12.00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_606062-MLV52149385360_102022-O.webp',
    description: 'Realizamos envíos gratuitos a nivel nacional a través de Zoom, MRW, y Tealca.'
});


render_products(product_list);





