const menuEmail = document.querySelector('.navbar-email');
const desktopEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoppingCartDesktop);

/* FUNCION MENU EMAIL */
function toggleDesktopMenu(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed)
        shoppingCart.classList.add('inactive');

    desktopEmail.classList.toggle('inactive');
}

/* FUNCION MENU MOBILE */
function toggleMobileMenu(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed)
        shoppingCart.classList.add('inactive');

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
    
    shoppingCart.classList.toggle('inactive');
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