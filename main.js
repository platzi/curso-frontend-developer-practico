const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuBtn = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
<<<<<<< HEAD
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
=======
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');



>>>>>>> hotfix



//Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


//Funciones
function toggleDesktopMenu() {

<<<<<<< HEAD
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
        }
=======
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if( !isAsideClosed ) {
        shoppingCartContainer.classList.add('inactive');
    }
>>>>>>> hotfix

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

<<<<<<< HEAD
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
        }
=======
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if( !isAsideClosed ) {
        aside.classList.add('inactive');
    }

    closeProductDetailAside();
>>>>>>> hotfix

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if( !isMobileMenuClosed ) {
        mobileMenu.classList.add('inactive');
    }

<<<<<<< HEAD
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Monitor',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Desk',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});




/*<div class="product-card">
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

function renderProducts(arr) {
    for ( product of arr ) {

        const { image, price, name } = product;

=======
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if( !isProductDetailClosed ) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {

    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Car',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Skate',
    price: 75,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr) {
    for ( product of arr ) {

>>>>>>> hotfix
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
<<<<<<< HEAD
        productImg.setAttribute('src', image);
=======
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

>>>>>>> hotfix

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
<<<<<<< HEAD
        productPrice.innerText = '$' + price;

        const productName = document.createElement('p');
        productName.innerText = name;
=======
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
>>>>>>> hotfix

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
<<<<<<< HEAD
        const productImgCart = document.createElement('img');
        productImg.setAttribute('image', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);
=======

        const productImgCart = document.createElement('img');
        productImg.setAttribute('src', product.image);

        productInfoFigure.appendChild(productImgCart,);
>>>>>>> hotfix

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
<<<<<<< HEAD

=======
>>>>>>> hotfix
