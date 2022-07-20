// Desktop-Menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Menu-hamburguesa
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// Shopping-Cart
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrderDesktop = document.querySelector('#shoppingCartContainer');
// Cards-container
const cardsContainer = document.querySelector('.cards-container')

// Product-Detail
const productDetailContainer = document.querySelector('#productDetail');
// Product-Detail-Close-Icon
const productDetailCloseIcon = document.querySelector('.product-detail-close');


// Añadimos eventos al hacer click sobre el 
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


// Añadimos una funcion a cada evento Click
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    myOrderDesktop.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    // Cierra el carrito de compras al abrir el menu hamburguesa
    myOrderDesktop.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}   

function toggleCarritoAside(){
    myOrderDesktop.classList.toggle('inactive');
     // Cierra el menu hamburguesa/email/productDetail al abrir el carrito de compras
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

// Product-List
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Monitor',
    price: 200,
    image: "https://falabella.scene7.com/is/image/Falabella/15997897_1?wid=1500&hei=1500&qlt=70"
});

productList.push({
    name: 'Macbook',
    price: 1000,
    image: "https://falabella.scene7.com/is/image/Falabella/15028951_1?wid=1500&hei=1500&qlt=70"
});

function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        // product = {name, price, image} --> product.image
        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click',openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src',"./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

function renderProductDetail(arr){
    
}
renderProducts(productList);