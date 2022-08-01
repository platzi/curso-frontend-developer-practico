const menuEmail = document.querySelector('.navbar-email');
const desktopEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoppingCartDesktop);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/* FUNCION MENU EMAIL */
function toggleDesktopMenu(){
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isShoppingCartClosed)
        shoppingCartContainer.classList.add('inactive');

    closeProductDetailAside();
    desktopEmail.classList.toggle('inactive');
}

/* FUNCION MENU MOBILE */
function toggleMobileMenu(){
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isShoppingCartClosed)
        shoppingCartContainer.classList.add('inactive');

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

/* FUNCION SHOPPING CART */
function toggleShoppingCartDesktop(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopEmailMenuClosed = desktopEmail.classList.contains('inactive');

    if(!isMobileMenuClosed)
        mobileMenu.classList.add('inactive');
    
    if(!isDesktopEmailMenuClosed)
        desktopEmail.classList.add('inactive');
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed)
    productDetailContainer.classList.add('inactive');

    shoppingCartContainer.classList.toggle('inactive');
}

// FUNCION ABRIR Y CERRAR DETALLE DE PRODUCTO
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    desktopEmail.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 250,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 360,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);