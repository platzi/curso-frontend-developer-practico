//constantes del menu desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//constantes del shopping cart
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

//constantes del detalle del producto
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

//constantes del menu del mobile
const burguerMenuIcon = document.querySelector('.menu'); 
const mobileMenu = document.querySelector('.mobile-menu');

//eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
productDetailClose.addEventListener('click', closeProductDetailAside)

//funciones para desplegar y cerrar menus
function toggleDesktopMenu() {
    if (shoppingCartIcon.addEventListener) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (productDetailContainer.addEventListener) {
        closeProductDetailAside();
    }
    desktopMenu.classList.toggle('inactive');       
}

function toggleMobileMenu() {
    if (shoppingCartIcon.addEventListener) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (productDetailContainer.addEventListener) {
        closeProductDetailAside();
    }
    mobileMenu.classList.toggle('inactive');       
}

function toggleShoppingCart() {
    if (burguerMenuIcon.addEventListener) {
        mobileMenu.classList.add('inactive');
    }
    if (menuEmail.addEventListener) {
        desktopMenu.classList.add('inactive');
    }
    if (productDetailContainer.addEventListener) {
        closeProductDetailAside();
    }
    shoppingCartContainer.classList.toggle('inactive');            
}

function openProductDetailAside() {
    if (burguerMenuIcon.addEventListener) {
        mobileMenu.classList.add('inactive');
    }
    if (menuEmail.addEventListener) {
        desktopMenu.classList.add('inactive');
    }
    if (shoppingCartIcon.addEventListener) {
        shoppingCartContainer.classList.add('inactive');
    }
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 350,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
        <div class="product-card">
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
        </div>
*/
const cardsContainer = document.querySelector('.cards-container');
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
        
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