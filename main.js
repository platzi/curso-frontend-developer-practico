// Menús desplegables

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const productDetailImage = document.querySelector('.product-detail > img');
const productDetailPrice = document.querySelector('#product-detail-price');
const productDetailName = document.querySelector('#product-detail-name');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);
productDetailClose.addEventListener('click', closeProductDetailAside)

// Activar-Inactivar el menú desktop
function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if (!isShoppingCartClosed || !isProductDetailContainer) {
        shoppingCartContainer.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }

    //closeProductDetailAside();
    desktopMenu.classList.toggle('inactive');
}

// Activar-Inactivar el menú mobile
function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');
    
    if (!isShoppingCartClosed || !isProductDetailContainer) {
        shoppingCartContainer.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }

    //closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

// Activar-Inactivar el carrito de compras
function toggleCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isProductDetailContainer) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }

    //closeProductDetailAside();
    shoppingCartContainer.classList.toggle('inactive');
}

// Activar detalles del producto
function openProductDetailAside(event) {
    // Si abro el productDetail cierro las demás vistas
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
    setProductInfo(event);
}

// Seleccionar info del producto
function setProductInfo(data) {
    const product = data.path.find(element => element.className === 'product-card');
    const productImage = product.querySelector('img');
    const productName = product.querySelector('.product-info div p:nth-child(2)');
    const productPrice = product.querySelector('.product-info div p:nth-child(1)');
    productDetailImage.setAttribute('src', productImage.getAttribute('src'));
    productDetailPrice.innerText = productName.innerText;
    productDetailName.innerText = productPrice.innerText;
}

// Desactivar detalles del producto
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
    productDetailImage.removeAttribute('src');
}

// Generación de la lista de productos

const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: 'Motorcycle',
    price: 220,
    image: "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: 'Computer',
    price: 320,
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: 'Skateboard',
    price: 120,
    image: "https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: 'Acoustic Guitar',
    price: 220,
    image: "https://images.pexels.com/photos/3714523/pexels-photo-3714523.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: 'Electric Guitar',
    price: 320,
    image: "https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg?auto=compress&cs=tinysrgb&w=600",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productIconCart = document.createElement('img');
        productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productIconCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);