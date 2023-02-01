console.log('js funcionando');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const shopingCar = document.querySelector('.navbar-shopping-cart');
const productShoping = document.querySelector('.product-shoping');

const cardsContainer = document.querySelector('.cards-container');



menu.addEventListener('click', toogleMobileMenu);

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productShoping.classList.add('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productShoping.classList.add('inactive');

}

shopingCar.addEventListener('click', toggleShopingCar);

function toggleShopingCar(){
    productShoping.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}



const productList = [];
productList.push({
    name:'bike',
    price:  200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
});
productList.push({
    name:'car',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
});
productList.push({
    name:'tv',
    price: 850,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
});
productList.push({
    name:'bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">',
});

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const ProductImg = document.createElement('img');
    
    ProductImg.setAttribute('src', product.image);

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
    productCard.append(ProductImg, productInfo);
    cardsContainer.append(productCard);
}   


const openProductInfoCard = document.querySelector('.product-card');
const productDropdown = document.querySelector('.product-dropdown');
const closeDropdown = document.querySelector('.product-dropdown-close');

openProductInfoCard.addEventListener('click', openProductDropdown);
function openProductDropdown(){
    console.log('paso');
    productDropdown.classList.remove('inactive');
}
closeDropdown.addEventListener('click', DropdownWindowClose);
function DropdownWindowClose(){
    console.log('');
    productDropdown.classList.add('inactive'); 
}
