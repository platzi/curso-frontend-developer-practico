const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('#productDetail');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
productDetail.addEventListener('click', toggleProductDetailClose);


function toggleDesktopMenu() {
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    let isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    productDetail.classList.add('inactive')

    if(!isShoppingCartClosed){
        shoppingCartContainer.classList.add('inactive');  
}
    desktopMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    productDetail.classList.add('inactive')
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    } 
    if(!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
    } 
    
    shoppingCartContainer.classList.toggle('inactive');
}
  
function toggleMobileMenu() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCartContainer.classList.add('inactive')
    }    
        mobileMenu.classList.toggle('inactive');
}

function openProductCard() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function toggleProductDetailClose() {
    productDetail.classList.toggle('inactive')
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/* <div class="product-card">
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
</div> */
function renderProducts(arr){
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
   
    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', openProductCard);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfofigure = document.createElement('figure');
    const figureImg = document.createElement('img');
    figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
   
     productInfofigure.appendChild(figureImg);
    
     productInfo.appendChild(productInfoDiv);
     productInfo.appendChild(productInfofigure);
    
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
   

    const cardsContainer =document.querySelector('.cards-container');
    cardsContainer.appendChild(productCard)

    const mainContainer =document.querySelector('.main-container');
    mainContainer.appendChild(cardsContainer)

}

}

renderProducts(productList);



