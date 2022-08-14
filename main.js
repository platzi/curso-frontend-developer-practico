/* menu */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/* carrito */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
/* opciones menu celular */
const menuHamIcon = document.querySelector('.hamburgesita');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

/* escuchadores */
menuEmail.addEventListener('click',toggleDesktopMenu);

menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click',toggleCarritoAside)
/* funciones */


function toggleDesktopMenu(){
desktopMenu.classList.toggle('inactive')
aside.classList.add('inactive') 
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    aside.classList.add('inactive') 
       
};

function toggleCarritoAside(){
    aside.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    
};   

/* product list / maquetacion de html en cartas */
const productList = [];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Mouse',
    price:20,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Teclado',
    price:20,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Pantalla',
    price:250,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerText=  product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    
        productCard.append(productInfo,productImg)
        productInfo.append(productInfoDiv,productInfoFigure);
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.append(productImgCart);
        cardsContainer.appendChild(productCard);
    };
};
renderProducts(productList);



