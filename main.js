const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCardIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDeatailContainer = document.querySelector("#productDetail");
const productDetailBtnClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCardIcon.addEventListener('click', toggleMenuCard);
productDetailBtnClose.addEventListener('click', closedProductDetailsAside);

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");

}
/* Open and closed  the menu principal of mobile */
function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    closedProductDetailsAside();
    mobileMenu.classList.toggle("inactive");
}
/* Open and closed  the menu of my shopping cards "My order" Desktop */
function toggleMenuCard() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isProductDetailClosed = productDeatailContainer.classList.contains("inactive");
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    if (!isProductDetailClosed) {
        productDeatailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
}
function openProductDetailsAside() {
    shoppingCartContainer.classList.add("inactive");
    productDeatailContainer.classList.remove("inactive");
}
function closedProductDetailsAside() {
    productDeatailContainer.classList.add("inactive");
}
const productList = []

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 5000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Lapto',
    price: 14000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProduct(arr) {
    for (const product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
    
        const image = document.createElement('img');
        image.setAttribute('src', product.image);

        image.addEventListener('click', openProductDetailsAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
        const productDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productDiv);
        productInfo.appendChild(productInfoFigure);
    
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);
    
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProduct(productList);