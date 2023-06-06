const menuEmail  = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');

const menuHamButon  = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');

const carMenuButon  = document.querySelector('.navbar-shopping-cart');
const carMenuContainer  = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamButon.addEventListener('click', toggleMobileMenu);
carMenuButon.addEventListener('click', togglecarMenuContainer);

function toggleDesktopMenu() {
    const carMenuContainerClosed = carMenuContainer.classList.contains('inactive');

    if (!carMenuContainerClosed) {
        carMenuContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const carMenuContainerClosed = carMenuContainer.classList.contains('inactive');

    if (!carMenuContainerClosed) {
        carMenuContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function togglecarMenuContainer() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    else if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    
    carMenuContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'bike',
    price: 300,
    image: 'https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});
productList.push({
    name: 'bike',
    price: 500,
    image: 'https://images.pexels.com/photos/5456097/pexels-photo-5456097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});
productList.push({
    name: 'motorcycle',
    price: 5000,
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});
productList.push({
    name: 'motorcycle',
    price: 7000,
    image: 'https://images.pexels.com/photos/9269542/pexels-photo-9269542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});
productList.push({
    name: 'motorcycle',
    price: 4000,
    image: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});
productList.push({
    name: 'Car',
    price: 10000,
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});
productList.push({
    name: 'Car',
    price: 20000,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});
productList.push({
    name: 'Car',
    price: 15000,
    image: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

});

function renderProducts (arr) {
    for (product of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText ='$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);