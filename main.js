const menucito = document.querySelector('.desktop-menu');
const emaillll = document.querySelector('.navbar-email');
const barritas = document.querySelector('.menu');
const categories = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

emaillll.addEventListener('click', show1);
barritas.addEventListener('click', show2);
carrito.addEventListener('click', show3);

function show1(){ //perfil
    menucito.classList.toggle('inactive');
    if (!carritoMenu.classList.contains('inactive'))
    carritoMenu.classList.toggle('inactive');
}
function show2(){ //categorias display phone
    categories.classList.toggle('inactive');
}
function show3(){ //mostrar carrito
   carritoMenu.classList.toggle('inactive');
   if (!menucito.classList.contains('inactive'))
    menucito.classList.toggle('inactive');
}

const productList = [];
productList.push ({
    name: 'Bike' ,
    precio : 120,
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push ({
    name: 'Pizza' ,
    precio : 1220,
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push ({
    name: 'Auto' ,
    precio : 1220,
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for (product of productList){
const productCard = document.createElement('div'); //Crear elemento
productCard.classList.add('product-card'); //Crear clase 

const productImg= document.createElement('img');
productImg.setAttribute('src', product.img);
// product= {name, precio, image}

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
