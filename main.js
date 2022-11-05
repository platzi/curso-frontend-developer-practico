const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');

    if(isShoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }else if(isProductDetailContainerOpen){
        productDetailContainer.classList.add('inactive');
    }   
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');

    if(isShoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }else if(isProductDetailContainerOpen){
        productDetailContainer.classList.add('inactive');
    }  
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }else if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }else if(isProductDetailContainerOpen){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if(isShoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }else if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
const productList = [];
productList.push({
    name: 'Bike 1',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
});

productList.push({
    name: 'Bike 2',
    price: 140,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
});

productList.push({
    name: 'Bike 3',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
});

productList.push({
    name: 'Bike 4',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
});

function renderProducts(listOfProducts){
    for (product of listOfProducts){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.append(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);
