const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productList = [];
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

function toggleDesktopMenu(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleShoppingCartContainer(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const productDetailAsideOpen = !productDetailContainer.classList.contains('inactive');
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    if (productDetailAsideOpen){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const productDetailAsideOpen = !productDetailContainer.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    if (productDetailAsideOpen){
        productDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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
function openProductDetailAside(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

navEmail.addEventListener('click', toggleDesktopMenu);
shoppingCart.addEventListener('click', toggleShoppingCartContainer);
menuHamburguer.addEventListener('click', toggleMobileMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: '620',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: '220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
renderProducts(productList);


