const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isshoppingCartContainer = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainer) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');    
}

function toggleMobileMenu() {
    const isshoppingCartContainer = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainer) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenu = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 
    if(!isDesktopMenu){
        desktopMenu.classList.add('inactive');
    }
    else if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');


    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Car BMW',
    price: 120,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
})
productList.push({
    name: 'Computer',
    price: 120,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(productList) {
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
     
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.append(productPrice, productName)
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCart)
       
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfo)
     
         cardsContainer.appendChild(productCard)
     }
}
renderProducts(productList)