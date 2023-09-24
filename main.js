const itemMenu = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const icono = document.querySelector('img.menu');
const iconoMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const productDetail = document.querySelector('#productDetail');
const closeIconDetail = document.querySelector('.product-detail-close');

itemMenu.addEventListener('click',toogleMenu);
icono.addEventListener('click',toogleIcono);
carritoIcon.addEventListener('click',toogleCarrito);
closeIconDetail.addEventListener('click',closeDetail);



function toogleMenu(){
 menu.classList.toggle('inactivo');
}
function openDetail(){
    productDetail.classList.remove('inactivo');
}
function closeDetail(){
    productDetail.classList.add('inactivo');
}

function toogleIcono(){

    if(!shoppingCardContainer.classList.contains('inactivo')){
        shoppingCardContainer.classList.add('inactivo');    
    }
    iconoMenu.classList.toggle('inactivo');
}

function toogleCarrito(){
    if(!iconoMenu.classList.contains('inactivo')){
        iconoMenu.classList.add('inactivo');    
    }
    shoppingCardContainer.classList.toggle('inactivo');
}

console.log('cargado');

//SCRIPT PARA GENERAR PRODUCTOS
const productos = [
    {image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 120.00,
    name: 'Bike'},
    {image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150.00,
    name: 'MotoBike'},
    {image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 180.00,
    name: 'Ciclobike'}
];

for(producto of productos){
    const divProductCard = document.createElement('div');
    divProductCard.classList.add('product-card');
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src',producto.image);
    imgProduct.addEventListener('click',openDetail);

    const divProductInfor = document.createElement('div');
    divProductInfor.classList.add('product-info');
    const divOnly = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText=`$ ${producto.price}`;
    const productName = document.createElement('p');
    productName.innerText=producto.name;
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.setAttribute('src','./icons/bt_add_to_cart.svg');
    figure.appendChild(img);
    divOnly.appendChild(productPrice);
    divOnly.appendChild(productName);
    divProductInfor.appendChild(divOnly);
    divProductInfor.appendChild(figure);
    divProductCard.appendChild(imgProduct);
    divProductCard.appendChild(divProductInfor);
    const divcontainer = document.querySelector('.cards-container');
    divcontainer.appendChild(divProductCard);
}
