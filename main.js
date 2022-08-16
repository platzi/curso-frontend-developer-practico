const menuEmail = document.querySelector('.navbar-email');
const menuHamburgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon= document.querySelector('.product-detail-close-secondary');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const asideSecondary = document.querySelector('.product-detail-secondary');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAsideSecondary);

function toggleDesktopMenu(params) {
    // console.log('Estoy haciendo click');
    desktopMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')) {
        aside.classList.toggle('inactive');
    };
    if (!asideSecondary.classList.contains('inactive')) {
        asideSecondary.classList.toggle('inactive');
    };
};

function toggleMobileMenu(params) {
    mobileMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')) {
        aside.classList.toggle('inactive');
    };
    closeProductDetailAsideSecondary();
};

function toggleCarritoAside(params) {
    aside.classList.toggle('inactive');
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    };
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    };
    if (!asideSecondary.classList.contains('inactive')) {
        asideSecondary.classList.toggle('inactive');
    };
};

function openProductDetailAsideSecondary(params) {
    asideSecondary.classList.remove('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAsideSecondary(params) {
    asideSecondary.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/2747793/pexels-photo-2747793.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Laptop',
    price: 620,
    image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Car',
    price: 1550,
    image: 'https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=600'
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
</div>*/

function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // productImg.addEventListener('click', console.log);
        productImg.addEventListener('click', openProductDetailAsideSecondary);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;//'$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);