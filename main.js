/* CORREO EMAIL */

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggledesktopMenu);

function toggledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

/* MENU MOBILE */

const menuIcon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu (){
    detailProduct.classList.add('inactive')
    ShoppingCarContainers.classList.add('inactive');  //la otra seria esta, mucho mas facil
    mobilemenu.classList.toggle('inactive');
}

/* CARRITO DE COMPRAS */

const carsmenu = document.querySelector('.navbar-shopping-cart');
const ShoppingCarContainers = document.querySelector('#ShoppingCarContainers');

carsmenu.addEventListener('click', togglecars);

function togglecars(){
    //hay varias formas de hacer que uno se oculte y el otro no, una de ellas es esta
    const mobileMenuClose = mobilemenu.classList.add('inactive');  
    //con containers hay que negar la condicion.
    if (mobileMenuClose) {
        mobilemenu.classList.add('inactive');  
    }

    const detailProductClose = detailProduct.classList.add('inactive');
    if (detailProductClose) {
        detailProduct.classList.add('inactive');  
    }

    ShoppingCarContainers.classList.toggle('inactive');
}


const cardsContainer = document.querySelector('.cards-container');

const productLista = [];
productLista.push({
    name: 'bike',
    price: 120,
    image: "https://ae01.alicdn.com/kf/H1700c5c720914866a65b9ea10d33df9eo/Pulseras-africanas-de-oro-de-24k-para-mujer-accesorios-para-esposa-regalos-de-boda-amor-de.jpg_Q90.jpg_.webp",
});

productLista.push({
    name: 'Manillas',
    price: 50.000,
    image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/999/705/products/img-9407-jpg1-2ad89bc11a836378ec16492589506565-640-0.jpg",
});

productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://ae01.alicdn.com/kf/H9a044f7f33c8473f85fb0894416e2026J/Pulsera-de-cadena-circular-para-mujer-brazalete-con-forma-de-Zigzag-geom-trico-Color-dorado-Vintage.jpg_Q90.jpg_.webp",
});

productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://cf.shopee.com.co/file/59f98dd6cc48020c95b7305e364b1673",
});
   
productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://ae01.alicdn.com/kf/H89724b506bed4650b319ec85f696e7fbM.jpg",
});

productLista.push({
    name: 'bike',
    price: 120,
    image: "https://ae01.alicdn.com/kf/H1700c5c720914866a65b9ea10d33df9eo/Pulseras-africanas-de-oro-de-24k-para-mujer-accesorios-para-esposa-regalos-de-boda-amor-de.jpg_Q90.jpg_.webp",
});

productLista.push({
    name: 'Manillas',
    price: 50.000,
    image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/999/705/products/img-9407-jpg1-2ad89bc11a836378ec16492589506565-640-0.jpg",
});

productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://ae01.alicdn.com/kf/H9a044f7f33c8473f85fb0894416e2026J/Pulsera-de-cadena-circular-para-mujer-brazalete-con-forma-de-Zigzag-geom-trico-Color-dorado-Vintage.jpg_Q90.jpg_.webp",
});

productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://cf.shopee.com.co/file/59f98dd6cc48020c95b7305e364b1673",
});
   
productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://ae01.alicdn.com/kf/H89724b506bed4650b319ec85f696e7fbM.jpg",
});

for (productos of productLista ) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //productos = {name, price, image} -> productos.image
    const img = document.createElement('img');
    img.setAttribute('src', productos.image);
    
        /* logica para que abra el detalle del producto */
        const productDetail = document.querySelector('#product-detail');

        img.addEventListener('click', openProduct);

        function openProduct(){
            productDetail.classList.remove('inactive');
        }

    const productinfo = document.createElement('div');
    productinfo.classList.add('product-info');

    const productinfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + productos.price;
    const productName = document.createElement('p');
    productName.innerText = productos.name;

    const productFigure = document.createElement('figure');

    const productimgcart = document.createElement('img');
    productimgcart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        //aqui abrimos el carrito pequeñito
        productimgcart.addEventListener('click', openCars);

        function openCars(){
            ShoppingCarContainers.classList.toggle('inactive');
        }

    /* AHORA NOS TOCA DEVOLVERNOS Y METER CADA ELEMENTO DENTRO DE LA ETIQUETA CORRESPONDIENTE */

    productFigure.appendChild(productimgcart);

    productinfoDiv.appendChild(productPrice);
    productinfoDiv.appendChild(productName);

    productinfo.appendChild(productinfoDiv);
    productinfo.appendChild(productFigure);

    productCard.appendChild(img);
    productCard.appendChild(productinfo);

    /* EN ESTE CASO TRAEMOS LA CLASE DEL CONTAINER MAYOR Y PARA INGRESAR PRODUCT CARD */

    cardsContainer.appendChild(productCard); 

}
    /* PARA CERRAR CON LA X DE LA IMAGEN*/

    const closeProduct = document.querySelector('.product-detail-close');
    const detailProduct = document.querySelector('#product-detail');

    closeProduct.addEventListener('click', closeDetailProduct);

    function closeDetailProduct(){
        ShoppingCarContainers.classList.add('inactive');
        detailProduct.classList.toggle('inactive');
    }

    const closeFlechita = document.querySelector('.title-container');

    closeFlechita.addEventListener('click', closeFlechaCars);

    function closeFlechaCars(){
        ShoppingCarContainers.classList.add('inactive');
    }