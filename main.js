const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

if(!isAsideClosed){
    aside.classList.add('inactive');
}
desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
const isAsideClosed = aside.classList.contains('inactive');

if(!isAsideClosed){
    aside.classList.add('inactive');
}

mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
}
else if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
}

aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
    
productList.push({
    name:'Jacket',
    price:85,
    image:'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name:'Lamp',
    price:60,
    image:'https://images.pexels.com/photos/973506/pexels-photo-973506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name:'Chair',
    price:110,
    image:'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name:'Wood toys',
    price:110,
    image:'https://images.pexels.com/photos/8409850/pexels-photo-8409850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts(arr){
for (product of productList) { //para cada producto del productList
    const productCard = document.createElement('div');//creamos otro div
    productCard.classList.add('product-card'); //agregamos clase

    const productImg = document.createElement('img');//creamos una constante con una img
    productImg.setAttribute('src', product.image);//le decimos que src sera igual a el image del array

    const productInfo = document.createElement('div');//creamos otro div
    productInfo.classList.add('product-info');//le agregamos la clase product-info

    const productInfoDiv = document.createElement('div');//creamos otro div

    const productPrice = document.createElement('p');//creamos otro p
    productPrice.innerText = '$' + product.price;//insertamos un $ mas el price del array
    const productName = document.createElement('p'); //creamos otro p
    productName.innerText = product.name;//insertamos el nombre

    productInfoDiv.appendChild(productPrice);//metemos dentro de productInfoDiv el precio y el nombre 
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');//creamos un <figure>
    const productImgCart = document.createElement('img');//creamos otra <img>
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');//le ponemos la src del icon

    productInfoFigure.appendChild(productImgCart);//metemos productImgCart dentro de productInfoFigure

    productInfo.appendChild(productInfoDiv);//metemos infoDiv y figure dentro de productInfo
    productInfo.appendChild(productInfoFigure); 

    productCard.appendChild(productImg);//a la card principal le meto productImg y product info
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList)