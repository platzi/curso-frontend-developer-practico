const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const btnCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer = document.querySelector('#shoppingCardContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')

let toggleMobileMenu = () =>{
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive')
    const isProdcutDetailClosed = productDetailContainer.classList.contains('inactive')
    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive')
    }
    if(!isProdcutDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
   
    mobileMenu.classList.toggle('inactive');
}

let toggleDesktopMenu = () =>{
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive')
    const isProdcutDetailClosed = productDetailContainer.classList.contains('inactive')
    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive')
    }
    if(!isProdcutDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

let toggleShoppingCart = () => {
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isMenuEmailClosed = menuEmail.classList.contains('inactive');
const isProdcutDetailClosed = productDetailContainer.classList.contains('inactive')
    //productDetail.classList.toggle('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isMenuEmailClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isProdcutDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCardContainer.classList.toggle('inactive');

}

let openDetailAside = () => {
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive')
    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive')
    }
    productDetailContainer.classList.remove('inactive')
}

let closeProductDetailAside = () => {
    productDetailContainer.classList.add('inactive')
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
menuEmail.addEventListener('click', toggleDesktopMenu)
menuIcon.addEventListener('click', toggleMobileMenu)
btnCarrito.addEventListener('click', toggleShoppingCart)


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'
})
productList.push({
    name: 'Computador',
    price: 2120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'
})
productList.push({
    name: 'Moto',
    price: 3120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'
})


renderProducts = (arr) => {
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '../curso_frontend_javascript/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);