const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const productList = [];
const cardsContainer = document.querySelector('.cards-container')

function toggleDesktopMenu(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive');
    if (isProductDetailOpen){
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleProductDetail(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive');
    if (isProductDetailOpen){
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
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

navEmail.addEventListener('click', toggleDesktopMenu);
shoppingCart.addEventListener('click', toggleProductDetail);
menuHamburguer.addEventListener('click', toggleMobileMenu);
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


