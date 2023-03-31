const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.shopping-cart-product');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleAsideShopingMenu);

function toggleDesktopMenu(){
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

    if (!isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

    if (!isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideShopingMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    
    asideShoppingCart.classList.toggle('inactive');
}

const productList=[];
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Electric',
    price: 820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Mono-bike',
    price: '160',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

    //Para que nuestro ciclo for sea iterable lo metemos dentro de una funcion
function productsOnPage(arr) {
    // product = [name, price, image]
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productCardImage = document.createElement('img');
        productCardImage.setAttribute('src', product.image)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        
        const productInfoDiv = document.createElement('div');
        const productInfoDivPrice = document.createElement('p');
        productInfoDivPrice.innerText = '$' + product.price;
        const productInfoDivName = document.createElement('p');
        productInfoDivName.innerText=product.name;
        
        productInfoDiv.append(productInfoDivPrice, productInfoDivName);
        
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImage = document.createElement('img');
        productInfoFigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productInfoFigureImage);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productCardImage);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

productsOnPage(productList);