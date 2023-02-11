
// creation of a const in charge to open and close the desktop-menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toogleshoppingCartAside);
productDetailCloseIcon.addEventListener('click',closeProductDetail);

function toggleDesktopMenu(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    // The commented section was the challenge in the class and I did it in that way

    // if (desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // } else {
    //     desktopMenu.classList.add('inactive');
    // }

    //The teacher method:
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    // closing all open menus
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    //Opening mobile menu
    mobileMenu.classList.toggle('inactive');
}

function toogleshoppingCartAside(){
    // closing all open menus
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    // Opening Shopping Cart
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetail(){

    // closing all open menus
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');

    // Opening Product Detail
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Motorcyle',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Scooter',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Book',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Coffe Table',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Toy',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Max steel',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr) {
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName); // .append allows to add several elements
        
    
        const addToCart = document.createElement('figure');
        const imgAddToCart = document.createElement('img');
        imgAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        addToCart.appendChild(imgAddToCart); // .appendChils allows to add just one element
    
        productInfo.append(productInfoDiv, addToCart);
    
        productCard.append(productImg,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
   
}

renderProducts(productList);