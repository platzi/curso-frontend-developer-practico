/* Traemos los datos del HTML */ 
const email = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const menuMobil = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const misOrdenes = document.querySelector('.product-detail');
const containerCards = document.querySelector('.cards-container')

/*  Creamos un evento para cada tipo de accion */
email.addEventListener('click', toggleMenuDesktop);
menuHamburguesa.addEventListener('click', toggleMenuMobil);
carrito.addEventListener('click', toggleOrdenes);

/* Creamos las funciones que vamos a ejecutar en el menu desktop*/
function toggleMenuDesktop() {
    misOrdenes.classList.add('inactivo');
    menuDesktop.classList.toggle('inactivo');
}
/* Creamos las funciones que vamos a ejecutar en el menu mobil*/
function toggleMenuMobil() {
    /* Cuando haga 'click' se agrege la clase 'inactivo'*/
    misOrdenes.classList.add('inactivo');
    menuMobil.classList.toggle('inactivo');
}
/* Creamos las funciones que vamos a ejecutar en el carrito de compras*/
function toggleOrdenes() {
    /* Evitamos que las vistas se choquen*/
    /* Cuando haga 'click' se agrege la clase 'inactivo' a menuMobil*/
    menuMobil.classList.add('inactivo');
    /* Cuando haga 'click' se agrege la clase 'inactivo' a menuDesktop*/
    menuDesktop.classList.add('inactivo');
    misOrdenes.classList.toggle('inactivo');
}
/* Creamos un array vacio al cual le vamos hacer Push*/
const productoArray = [];
/* Hacemos Push al array vacio*/
productoArray.push({
    nombre: 'Arbol de Jade',
    precio: "12.000",
    imagen: 'https://www.guiadejardineria.com/wp-content/uploads/2015/10/top-10-de-las-suculentas-de-interior-06.jpg',
})
productoArray.push({
    nombre: 'Suculenta Captus',
    precio: "8.000",
    imagen: 'https://lh3.googleusercontent.com/chat_attachment/AJh6FpoaM0k2k8pxWOZKQFOKAjFEWVDkiXSaFMfSHHcGOGnuJLJon7RnrTfCJHBp2g7gBQP0ikS7O14C8l-QvQP7QLPcuNjK-1hfohwP3uukusUlyhgVyXRO1y5wVdo0q8Nb7Ze87s2N3Bj0fZMcr4FajLXqTcHkF7EYbByWL0kplyW8Xzqy9_WkmPIUuGVEiIWMzyjMVvGs_6acZDoq6GMM_1k8xz8JZMujolEzOMCRpqTZ3SB-nQXPj90=w512',
})
productoArray.push({
    nombre: 'Suculenta Captus',
    precio: "10.000",
    imagen: 'https://lh3.googleusercontent.com/chat_attachment/AJh6FporglxzohPNaNqyDKXSCQD72PSU_JyF4zwktfV_y0iQcQOEmDRNr3ei4siv25N60OqmNHXhfE9bGZ61-DWSnHjK6sKKuH6t3oyCPUKljmjX7vz94mVWop0CS6dTaoUihrWMnPFd8w_cCeR9sb32pH8bI3_l0Vv3_0VM8J_1ZSf3nmKjeeQhyAEh9bpGnPM_l71JKSSbq6zQuQ3-VFy793XmTFLtr45rV3Oc5WjddWbZOg15CAdgkZ8=w512',
})
productoArray.push({
    nombre: 'Austrocylindropuntia',
    precio:  "12.000",
    imagen: 'https://cdn.webshopapp.com/shops/107930/files/327686315/austrocylindropuntia-subulata.jpg',
})
productoArray.push({
    nombre: 'Haworthia retusa',
    precio:  "15.000",
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/581/037/products/f6bf7358-4dc1-417e-9095-1f2a1aa3440d-80b26a2e155bd86ca816378648664688-1024-1024.jpeg',
})
productoArray.push({
    nombre: 'Aloe juvenna',
    precio:  "8.000",
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/427/948/products/aloe-juvenna1-5b9935fa3a8a871ee216059173163906-1024-1024.jpg',
})
productoArray.push({
    nombre: 'Aloe brevifolia',
    precio:  "12.000",
    imagen: 'https://m.media-amazon.com/images/I/91QnKdIDBbL._AC_SL1500_.jpg',
})
productoArray.push({
    nombre: 'Opuntia microdasys',
    precio:  "15.000",
    imagen: 'https://vitagardenn.com/wp-content/uploads/2021/04/IMG-20210408-WA0046.jpg',
})
productoArray.push({
    nombre: 'Peyote',
    precio:  "11.000",
    imagen: 'https://thumbs.dreamstime.com/b/el-lophophora-de-la-planta-cactus-que-florece-williamsii-peyote-contiene-otra-cosa-mescalina-manera-fondo-173992219.jpg',
})
productoArray.push({
    nombre: 'Echinocactus grusonii',
    precio:  "18.000",
    imagen: 'https://cdn.webshopapp.com/shops/107930/files/307184594/echinocactus-grusonii-f-alba.jpg',
})
productoArray.push({
    nombre: 'Hatiora salicornioides',
    precio:  "14.000",
    imagen: 'https://cdn.shopify.com/s/files/1/0340/8848/4999/products/20201016_122033_1024x1024.jpg?v=1619325288',
})
productoArray.push({
    nombre: 'Haworthia truncata',
    precio:  "6.000",
    imagen: 'https://alberobello.mx/wp-content/uploads/2021/09/FB_IMG_1632092587311.jpg',
})
productoArray.push({
    nombre: 'Astrophytum myriostigma',
    precio:  "12.000",
    imagen: 'https://cdn.webshopapp.com/shops/107930/files/305926341/astrophytum-myriostigma-v-columnare.jpg',
})
productoArray.push({
    nombre: 'Peperomia argyreia',
    precio:  "20.000",
    imagen: 'https://cdn.shopify.com/s/files/1/0151/1650/1046/products/Peperomia_argyreia_watermelon_growers_pot_2400x.jpg?v=1581992586',
})
productoArray.push({
    nombre: 'Opuntia ficus-indica',
    precio:  "10.000",
    imagen: 'https://cdn.webshopapp.com/shops/107930/files/192004274/opuntia-ficus-indica-xl.jpg',
})
productoArray.push({
    nombre: 'Astrophytum asterias',
    precio:  "14.000",
    imagen: 'https://i.ytimg.com/vi/1I8afM2u7ok/sddefault.jpg',
})
productoArray.push({
    nombre: 'La planta panda',
    precio:  "12.000",
    imagen: 'https://www.guiadejardineria.com/wp-content/uploads/2015/10/top-10-de-las-suculentas-de-interior-08.jpg',
})
productoArray.push({
    nombre: 'La sanseviera',
    precio:  "17.000",
    imagen: 'https://phassets.imgix.net/redactor/eb4de769b5e46f53f72bab4da0dffea7.jpg',
})

/* Funcion donde se crea el HTML en JavaScript*/
function render(arr) {
    for (const producto of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', producto.imagen);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$ '+ producto.precio;
        const productNombre = document.createElement('p');
        productNombre.innerText = producto.nombre;
    
        productInfoDiv.appendChild(productNombre);
        productInfoDiv.appendChild(productPrecio);
    
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productFigureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        containerCards.appendChild(productCard);
    }
}

/* Se llama la funcion con el parametro del array al cual 
    Le hacemos Push*/
render(productoArray);