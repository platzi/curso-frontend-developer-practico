const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
//const detailSelec = document.querySelector('.product-detail-selector');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarrito);
//detailSelec.addEventListener('click', toggledetail);

// Menu del Desktop
function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        // MobileMenu  esta abierto, hay que cerrarlo// MobileMenu  esta abierto, hay que cerrarlo
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

//Menu Mobil
function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        // MobileMenu  esta abierto, hay que cerrarlo// MobileMenu  esta abierto, hay que cerrarlo
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

// Carrit0 de compras
function toggleCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        // MobileMenu  esta abierto, hay que cerrarlo// MobileMenu  esta abierto, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }

    if (!isDesktopClose) {
        // MobileMenu  esta abierto, hay que cerrarlo// MobileMenu  esta abierto, hay que cerrarlo
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}

//
/*
function toggledetail() {
    detailSelec.classList.toggle('inactive');
}
*/


// Lista de productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Computador',
    price: 250,
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

//forma 1
/*
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    //product-info
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
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
*/

//forma 2
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        //product-info
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
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);