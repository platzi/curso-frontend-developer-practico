/* menu email nav*/
const opc_email = document.querySelector('.navbar-email')
const desktop_menu_email = document.querySelector('.desktop-menu')
/* menu mobile */
const mob_menu_img = document.querySelector('.menu');
const mob_menu = document.querySelector('.mobile-menu');
/* carrito de compra */
const shopping_cart_container_img = document.querySelector('.navbar-shopping-cart');
const shopping_cart_container = document.querySelector('#shopping-cart-container');
const my_order_content = document.querySelector('.my-order-content');
const shopping_cart_button = document.querySelector('.add-to-cart-button');
/*contenedor de productos*/
const cards_container = document.querySelector('.cards-container');
/*open/closed Detalles del producto*/
const product_detail = document.querySelector('#product-detail');
const product_detail_close = document.querySelector('.product-detail-close')
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


/* cargar los productos de la lista en el HTML */

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
     
        figure.appendChild(img_logo_cart);
        product_info_div.append(product_price, product_name,product_description);
        product_info.append(figure, product_info_div);
        product_card.append(img, product_info);

        cards_container.appendChild(product_card);   
     }
     open_detail_product();
     upload_cart();
     delete_product_cart(); 
}
//evento mostrar detalle de producto - obtengo los datos a traves de html - aqui solo modifico HTML ya existente.
function open_detail_product(){
    cards_container.addEventListener('click', e=> {
        if(e.target.classList.contains('img-card')){
            const product = e.target.parentElement;
            //obtengo los datos de cards(cartas contenedoras del main)
            const price_element = product.querySelector('.product-info:nth-child(2) p:nth-child(1)');
            const name_element  = product.querySelector('.product-info:nth-child(2) p:nth-child(2)');
            const description_element = product.querySelector('.product-info:nth-child(2) p:nth-child(3)');
            const imgElement = product.querySelector('.img-card').src;
            //obtengo la ubicacion de los elementos en detalles del producto
            const price  = document.querySelector('#product-detail .product-info p:nth-child(1)');
            const name  = document.querySelector('#product-detail .product-info p:nth-child(2)');
            const description  = document.querySelector('#product-detail .product-info p:nth-child(3)');
            const img = document.querySelector('#product-detail > img:nth-child(2)');
            
            price.textContent = price_element.textContent ;
            name.textContent  = name_element.textContent ;
            description.textContent  = description_element.textContent ;
            img.src = imgElement; // Cambia esto por la nueva URL que deseas usar
            img.alt = 'imagen del producto'; // Cambia el texto alternativo de la imagen
    
            
        }
    });
}
// convertir el texto en numeros y quitar el simbolo $
function conver_price(k){
    return Number(k.slice(1));
}
function calculate_total(price , quantity, op){

    if(op==='+'){
        total = total + (conver_price(price) * +quantity);
        const total_contain = document.querySelector('#shopping-cart-container .order .total');
        total_contain.textContent = '$' + total;
    }else if(op==='-'){
        total = total - (conver_price(price) * +quantity);
        const total_contain = document.querySelector('#shopping-cart-container .order .total');
        total_contain.textContent = '$' + total;
    }
}
/*eventos para cargar el carrito con los productos*/
function upload_cart(){
    //desde las cards del menu principal
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

            render_shopping_cart();
            calculate_total(info_product.price , info_product.quantity, '+');
            shopping_cart_container.classList.remove('inactive');
        }
    });
    //desde la vista de detalles del producto
    product_detail.addEventListener('click', e=> {
        if(e.target.classList.contains('add-to-cart-button')){
            const product = e.target.parentElement;
    
            const info_product = {
                quantity: 1,
                name: product.querySelector('div p:nth-child(2)').textContent,
                price: product.querySelector('div p:nth-child(1)').textContent,
                image: product.parentElement.querySelector('img:nth-child(2)').src,
            }
            
            all_products_cart = [...all_products_cart, info_product];
            
            render_shopping_cart();
            calculate_total(info_product.price , info_product.quantity, '+');
            close_product_detail();
            shopping_cart_container.classList.remove('inactive');
        }
    });
    
}
/*elminar productos del carrito*/
function delete_product_cart(){
    my_order_content.addEventListener('click', e=> {
        if(e.target.classList.contains('delete-product-cart')){
            const product = e.target.parentElement;
            const name_delete = product.querySelector('div p:nth-child(2)').textContent
            const removed_product = all_products_cart.find((producto) => producto.name == name_delete);

            calculate_total(removed_product.price , removed_product.quantity, '-');
            all_products_cart = all_products_cart.filter((producto) => producto.name !== name_delete);

            render_shopping_cart();
        }
    });
}
/*cargar los productos al carrito en el html */ 
function render_shopping_cart() {
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
        product_price.innerText =  product.price;
        const product_name = document.createElement('p');
        product_name.innerText = product.name;

        const img__shopping_close = document.createElement('img');
        img__shopping_close.setAttribute('src', './icons/icon_close.png');
        img__shopping_close.classList.add('delete-product-cart');

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


