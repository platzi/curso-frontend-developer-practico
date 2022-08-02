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
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productLista.push({
    name: 'Manillas',
    price: 50.000,
    image: "https://m.media-amazon.com/images/I/61SucG+SVmL._AC_UY500_.jpg",
});

productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
   
productLista.push({
    name: 'Reloj Digital',
    price: 300.000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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