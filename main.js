// desktop menu / email menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
//burger menu / mobile menu
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
// Shopping cart / shopping cart preview
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartPreview = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
// Aside2 preview
const productAsideContainer = document.querySelector('.product-detail-secondary')
const productAsideCloser = document.querySelector('.product-detail-close-secondary')



navEmail.addEventListener('click', toogleMenu);
burgerMenu.addEventListener('click', toogleBurger);
shoppingCart.addEventListener('click', tooglePreview);
productAsideCloser.addEventListener('click', closeProductAside)


function toogleMenu(){
    const isCartPreviewClosed = shoppingCartPreview.classList.contains('inactive-cart-preview')
    if (!isCartPreviewClosed) {
        shoppingCartPreview.classList.toggle('inactive-cart-preview')
    }
    desktopMenu.classList.toggle('inactive')
}

function toogleBurger(){
    const isCartPreviewClosed = shoppingCartPreview.classList.contains('inactive-cart-preview')
    const isAsideClosed = productAsideContainer.classList.contains('inactive')
    if (!isCartPreviewClosed){
        shoppingCartPreview.classList.toggle('inactive-cart-preview')
    }
    if (!isAsideClosed){
        productAsideContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('activate-burger')
}

function tooglePreview(){
    const isBurgerClosed = mobileMenu.classList.contains('activate-burger')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isAsideClosed = productAsideContainer.classList.contains('inactive')
    if (isBurgerClosed){
        mobileMenu.classList.toggle('activate-burger')
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    if (!isAsideClosed) {
        productAsideContainer.classList.add('inactive')
    }
    shoppingCartPreview.classList.toggle('inactive-cart-preview')
}

function openProductAside (){
    productAsideContainer.classList.toggle('inactive')
}
function closeProductAside (){
    const isCartPreviewClosed = shoppingCartPreview.classList.contains('inactive-cart-preview')
    if (!isCartPreviewClosed){
        shoppingCartPreview.classList.add('inactive-cart-preview')
    }
    productAsideContainer.classList.add('inactive')
}


const productList = []; 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'TV',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'PC',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for (product of productList) { // eeste for of itera los "products" del array previamente creado "productList"
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', openProductAside)
    

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv= document.createElement('div');

    const productPrice= document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName= document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure= document.createElement('figure');
    const productImgCart= document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard)

}