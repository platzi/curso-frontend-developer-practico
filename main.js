const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const botonMemuMB = document.querySelector('.menu');
const menumobile = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const BarraCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
//fin de variables
// Inicio de menus desplegables
menuEmail.addEventListener('click', menuDesplegable);
botonMemuMB.addEventListener('click', toggleMenuMobile);
iconCarrito.addEventListener('click', Carritotoggle);
function menuDesplegable() {
    let closeBarraCarrito = BarraCarrito.classList.contains('inactive');
    if (!closeBarraCarrito) {
        BarraCarrito.classList.add('inactive')
    }
    menuDesktop.classList.toggle('inactive');
}
function toggleMenuMobile() {
    let closeBarraCarrito = BarraCarrito.classList.contains('inactive');
    if (!closeBarraCarrito) {
        BarraCarrito.classList.add('inactive')
    }
    menumobile.classList.toggle('inactive');
}
function Carritotoggle(){
    let closemenumobile = menumobile.classList.contains('inactive');
    let closemenuDesktop  = menuDesktop.classList.contains('inactive');
    if (!closemenumobile) {
        menumobile.classList.add('inactive')
    }
    if (!closemenuDesktop) {
        menuDesktop.classList.add('inactive')
    }
    BarraCarrito.classList.toggle('inactive');
}
//Fin de menus desplegalbes 
//iten de tienda
const ProductList = [];
ProductList.push({
    name: 'Bicicleta',
    price: 5500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Termo japones',
    price: 560,
    image: 'https://rlv.zcache.es/termo_elegante_arte_botanico_de_inspiracion_japonesa-r767a8e65d66e4adaae207e63ce6ff727_60f89_307.jpg?rlvnet=1',
});
ProductList.push({
    name: 'Taza de café',
    price: 469,
    image: 'https://cdn.shopify.com/s/files/1/0265/5446/6346/products/LosAltos-CoffeeMarket-TazaCeramicaArtesanal_Lado_-cafelosaltosmx.jpg?v=1608233993',
});
ProductList.push({
    name: 'Maceta artesanal',
    price: 289,
    image: 'http://d2r9epyceweg5n.cloudfront.net/stores/002/066/665/products/maceshop-2441-2998baacde4bd8212216473619210812-640-0.jpg',
});
ProductList.push({
    name: 'vajilla artesanal',
    price: 127,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklHC5PcDv77cKThhLv4bMG9rVRZ7Hd0UabA&usqp=CAU',
});
ProductList.push({
    name: 'bolsa ecólogica',
    price: 127,
    image: 'https://cdn.shopify.com/s/files/1/0553/9764/6516/products/BEAUTERRA_MX_BAG0.png?v=1622058162',
});

function PoductosDeTienda(arr){
    for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const DivInfo = document.createElement('div');
        const InfoPrice = document.createElement('p');
        InfoPrice.textContent= '$'+ product.price;
        const InfoName = document.createElement('p');
        InfoName.textContent= product.name; 
    DivInfo.append(InfoPrice, InfoName);

    const iconConteiner = document.createElement('figure');
    const IconCard = document.createElement('img');
    IconCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    iconConteiner.appendChild(IconCard);

    productInfo.append(DivInfo, iconConteiner);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
}
}
PoductosDeTienda(ProductList);
