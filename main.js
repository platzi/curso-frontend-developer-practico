const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuStoreIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
hambMenu.addEventListener('click', toggleMobileMenu);
menuStoreIcon.addEventListener('click', toggleAsideMenuProducts);

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
   }

    mobileMenu.classList.toggle('inactive');
};

function toggleAsideMenuProducts() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Screen',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Headphones',
    price: 80,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Phone',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice); //Adding the price to the div with class "product-info"
        productInfoDiv.appendChild(productName);//Adding the name to the div
    
        const productFigure = document.createElement('figure');
        const productFigureIcon = document.createElement('img');
        productFigureIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productFigureIcon);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);

