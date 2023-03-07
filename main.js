const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguesa.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleProductDetail)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    if (!(shoppingCartContainer.classList.contains('inactive'))){
        shoppingCartContainer.classList.toggle('inactive')
    }
    desktopMenu.classList.toggle('inactive')
    closeProductDetailAside();

}

function toggleMobileMenu() {
    if (!(shoppingCartContainer.classList.contains('inactive'))){
        shoppingCartContainer.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')
    closeProductDetailAside();
}

function toggleProductDetail(){
    mobileMenuIsOpen = !(mobileMenu.classList.contains('inactive'))
    desktopMenuIsOpen = !(desktopMenu.classList.contains('inactive'))
    isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if (mobileMenuIsOpen){
        mobileMenu.classList.toggle('inactive')
    }
    if (desktopMenuIsOpen){
        desktopMenu.classList.toggle('inactive')
    }
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
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

const productList = []

productList.push({
    name: 'Bike',
    price: 110,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Screen',
    price: 2200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Graphic',
    price: 1250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Keyboard',
    price: 523,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Watch',
    price: 10532,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});


function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p')
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList)
