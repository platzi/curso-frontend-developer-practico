const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const shopCar = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
shopCar.addEventListener('click', toggleAsideShopping);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }
    deskTopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideShopping() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = deskTopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }
    if(!isDesktopMenuClosed){
        deskTopMenu.classList.toggle('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    picture: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Wheel',
    price: 20,
    picture: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Seat',
    price: 15,
    picture: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Helmet',
    price: 60,
    picture: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tire',
    price: 7,
    picture: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Chain',
    price: 30,
    picture: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pedal',
    price: 8,
    picture: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.picture);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const pPrice = document.createElement('p');
        pPrice.innerText = '$' + product.price;
    
        const pName = document.createElement('p');
        pName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const imgFig = document.createElement('img');
        imgFig.setAttribute('src', '../icons/bt_add_to_cart.svg')
        
        
        
        productInfoDiv.appendChild(pPrice);
        productInfoDiv.appendChild(pName);
    
        productInfoFigure.appendChild(imgFig);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}


renderProducts(productList);
