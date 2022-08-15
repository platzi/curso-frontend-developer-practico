/* menu */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
/* carrito */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
/* opciones menu celular */
const menuHamIcon = document.querySelector('.hamburgesita');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
/* Producto */
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
/* escuchadores */
menuEmail.addEventListener('click',toggleDesktopMenu);

menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click',toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)
/* funciones */


function toggleDesktopMenu(){
desktopMenu.classList.toggle('inactive');
shoppingCartContainer.classList.add('inactive') ;
productDetailContainer.classList.add('inactive');
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive') ;
    productDetailContainer.classList.add('inactive');
       
};

function toggleCarritoshoppingCartContainer(){
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
};  
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
} ;
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
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

/* functions Render */
function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);

        productImg.addEventListener('click',openProductDetailAside);


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
    
    
    
        
        
        
        productInfoFigure.append(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(productImg,productInfo);
        cardsContainer.appendChild(productCard);
    };
};
renderProducts(productList);



