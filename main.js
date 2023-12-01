const menuEmail = document.querySelector('.navbar-email'); 
const menuHamIcon = document.querySelector('.menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); 
const closeIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu'); 
const mobileMenu = document.querySelector('.mobile-menu'); 
const shoppingcart = document.querySelector('#shopping-cart'); 
const productDetails = document.querySelector('#product-detail'); 
const cardsContainer = document.querySelector('.cards-container'); 

menuEmail.addEventListener('click', toggleDesktopMenu); 
menuHamIcon.addEventListener('click', toggleMobileMenu); 
menuCarritoIcon.addEventListener('click', toggleCarritoAside); 
closeIcon.addEventListener('click', closeAside); 

function toggleDesktopMenu() {
    const isshoppingcartClosed = shoppingcart.classList.contains('inactive'); 
    if (!isshoppingcartClosed) { 
        shoppingcart.classList.add('inactive');
     }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isshoppingcartClosed = shoppingcart.classList.contains('inactive'); 
    if (!isshoppingcartClosed) { 
        shoppingcart.classList.add('inactive'); 
    }

    closeAside();

    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isProductDetailsClosed = productDetails.classList.contains('inactive');

    if (!isProductDetailsClosed) {
        productDetails.classList.add('inactive');
    }
    if (!isMobileMenuClosed) { 
        mobileMenu.classList.add('inactive'); 
    }


    shoppingcart.classList.toggle('inactive');
}
function openAside() {
    shoppingcart.classList.add('inactive');

    productDetails.classList.remove('inactive');
}
function closeAside() {
    productDetails.classList.add('inactive');
}

const productList = []; 
productList.push({ 
    name: 'Bike', 
    price: 120, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 }); 

 productList.push({ 
    name: 'Pantalla', 
    price: 220, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 }); 
 productList.push({ 
    name: 'Compu', 
    price: 620, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 }); 
 
 function renderProducts(arr) { 
    for (product of arr) { 
        const productCard = document.createElement('div'); 
        productCard.classList.add('product-card'); 
        const productImg = document.createElement('img'); 
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openAside); 
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
    
renderProducts(productList);

