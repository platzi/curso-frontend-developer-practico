const menucito = document.querySelector('.desktop-menu');
const emaillll = document.querySelector('.navbar-email');
const barritas = document.querySelector('.menu');
const categoriesCel = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('#shopCartCont');
const cardsContainer = document.querySelector('.cards-container');
const ProductDetailCont = document.querySelector('#productDetail');
const ProductDetailCloseIcon= document.querySelector('.product-detail-close');
let lunaBoton = document.querySelector('.luna');
const body = document.querySelector('body');

emaillll.addEventListener('click', show1);
barritas.addEventListener('click', show2);
carrito.addEventListener('click', show3);
ProductDetailCloseIcon.addEventListener('click', closeProductDetail);
lunaBoton.addEventListener('click',shadowMode);


function show1(){ //perfil
    menucito.classList.toggle('inactive');
    if (!carritoMenu.classList.contains('inactive'))
    carritoMenu.classList.toggle('inactive');
    if (!ProductDetailCont.classList.contains('inactive'))
    ProductDetailCont.classList.toggle('inactive');
}
function show2(){ //categorias display phone
    categoriesCel.classList.toggle('inactive');
}
function show3(){ //mostrar carrito
   carritoMenu.classList.toggle('inactive');
   if (!menucito.classList.contains('inactive'))
    menucito.classList.toggle('inactive');
    if (!ProductDetailCont.classList.contains('inactive'))
    ProductDetailCont.classList.toggle('inactive');
}
function openProductDetail(){ //Mostrar detalles del producto
    ProductDetailCont.classList.remove('inactive');
    if (!carritoMenu.classList.contains('inactive'))
    carritoMenu.classList.toggle('inactive');
    if (!menucito.classList.contains('inactive'))
    menucito.classList.toggle('inactive');
}
function closeProductDetail (){ // Cerrar detalles del producto
    ProductDetailCont.classList.add('inactive');
}
function shadowMode() { //Modo oscuro
        body.classList.toggle('oscuro');
        lunaBoton.setAttribute('src','./icons/lunaInvert.png');
        
}

const productList = [];
productList.push ({
    name: 'Hamburguesa' ,
    precio : 400,
    img : './img/burger.jpg'
})
productList.push ({
    name: 'Pizza' ,
    precio : 640,
    img : './img/pizza.jpg'
})
productList.push ({
    name: 'Pancho' ,
    precio : 300,
    img : './img/pancho.jpg'
})
productList.push ({
    name: 'Milanesa' ,
    precio : 460,
    img : './img/milanesa.jpg'
})
productList.push ({
    name: 'Cable HDMI 1M 1.4V' ,
    precio : 350,
    img : './img/hdmi.jpg'
})

for (product of productList){
const productCard = document.createElement('div'); //Crear elemento
productCard.classList.add('product-card'); //Crear clase 

const productImg= document.createElement('img');
productImg.setAttribute('src', product.img);
// product= {name, precio, image}
productImg.addEventListener('click', openProductDetail);

const productInfo = document.createElement('div');
productInfo.classList.add('product-info');

const productDiv1 = document.createElement('div');

const productPrecio= document.createElement('p');
productPrecio.innerText = '$' + product.precio;

const productName= document.createElement('p');
productName.innerText = product.name;


const productFigure = document.createElement('figure');
const ImgCart = document.createElement('img');

ImgCart.setAttribute('src','./icons/bt_add_to_cart.svg' );

productDiv1.append(productName,productPrecio);
productInfo.append(productDiv1,productFigure);
productFigure.appendChild(ImgCart);
productCard.append(productImg,productInfo);  

cardsContainer.appendChild(productCard);




}
  