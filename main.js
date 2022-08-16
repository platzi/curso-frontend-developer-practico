
const navbarEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuHamIcon =document.querySelector('.menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const productDetailIcon = document.querySelector('.product-detail-close') 
const cardsContainer = document.querySelector('.cards-container');
const shoppingCartContainer =document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail')


navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
productDetailIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClose2 = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClose2){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClose){
       shoppingCartContainer.classList.add('inactive');     
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}
function toggleCarritoMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClose){
       mobileMenu.classList.add('inactive');    
    }else if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }
    const isProductDetailClosed= productDetailContainer.classList.contains('inative');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
    
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

function renderProduct(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImge = document.createElement('img');
        productImge.setAttribute('src', product.image);
        productImge.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText ='$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImg);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImge);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}





const productList = []
productList.push({
    name:'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name:'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name:'CPU',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

renderProduct(productList);