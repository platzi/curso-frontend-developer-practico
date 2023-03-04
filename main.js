const navEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive');
    
};

function renderProducts(arr){
    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        
        const productInfoFigure = document.createElement('figure');
        
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}


const productList = [];

productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: '230',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: '620',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);         