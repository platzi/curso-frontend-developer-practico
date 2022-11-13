const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const botonMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const botonShoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrder = document.querySelector('.product-detail');

const botonCloseDetails = document.querySelector('.close');

const productDetailSecondary = document.querySelector('.product-detail-secondary');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
botonMenuMobile.addEventListener('click', togglemobileMenu);
botonShoppingCart.addEventListener('click',togglemyOrder);
botonCloseDetails.addEventListener('click',closeDetails);


function toggleDesktopMenu() {
    mobileMenu.classList.add('inactive');
    myOrder.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productDetailSecondary.classList.add('inactive');
}
function togglemobileMenu() {
    mobileMenu.classList.toggle('inactive');
    myOrder.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailSecondary.classList.add('inactive');
}
function togglemyOrder() {
    mobileMenu.classList.add('inactive');
    myOrder.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productDetailSecondary.classList.add('inactive');
}
function toggleproductInfoSecondary() {
    mobileMenu.classList.add('inactive');
    myOrder.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailSecondary.classList.remove('inactive');
}
function closeDetails() {
    productDetailSecondary.classList.add('inactive');
}


const producList = [];
producList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
producList.push({
    name: 'PC',
    price: 620,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
producList.push({
    name: 'Pantalla',
    price: 220,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
 
function renderArray (Arr){
    for (product of Arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
        productImg.addEventListener('click', toggleproductInfoSecondary);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        cardsContainer.appendChild(productCard);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfoFigure.appendChild(productImgCart);
    
    } 
}   

renderArray(producList);