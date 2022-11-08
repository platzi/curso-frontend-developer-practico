console.log('connected');

// get elements of the html.
const mailButton = document.getElementById('email');
const AccountMenu = document.getElementById('accountmenu');
const hamMenu = document.getElementById('hamMenu');
const mobileMenu = document.getElementById('mobileMenu');
const shoppingCart = document.getElementById('shoppingCart')
const asideMen = document.getElementById('carAside');
const cardsContainer = document.getElementById('Container-cards');

//create events listeners
mailButton.addEventListener('click', toggleMenu);
hamMenu.addEventListener('click', toggleMobile);
shoppingCart.addEventListener('click', toggleShoppingCart);

//create functions.
function toggleMenu() {
    let isAsideMenuClose = asideMen.classList.contains('inactive')
    if (!isAsideMenuClose) {
        asideMen.classList.toggle('inactive');
    }
    AccountMenu.classList.toggle('inactive');
}

function toggleMobile() {
    let isShoppingCarClose = asideMen.classList.contains('inactive');
    
    if (!isShoppingCarClose) {
        asideMen.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    let isMobileMenuClose = mobileMenu.classList.contains('inactive');
    let isDesktopMenuClose = AccountMenu.classList.contains('inactive');

    if (!isDesktopMenuClose) {
        AccountMenu.classList.toggle('inactive');
    }

    if (!isMobileMenuClose) {
        mobileMenu.classList.toggle('inactive');
    }
    asideMen.classList.toggle('inactive');
}

productsApi = [];

productsApi.push({
    name : 'bike',
    price : 750,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productsApi.push({
    name : 'car',
    price : 1278,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productsApi.push({
    name : 'computer',
    price : 350,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

for (product of productsApi) {
    // create the structure of the element
    let productCar = document.createElement('div');
    productCar.classList.add('product-card');

    let imageContent = document.createElement('img');
    imageContent.setAttribute('src', product.image);
    productCar.appendChild(imageContent);

    let ProductInfo = document.createElement('div');
    ProductInfo.classList.add('product-info');
    productCar.appendChild(ProductInfo)

    let mainDiv = document.createElement('div');
    ProductInfo.appendChild(mainDiv);
    
    let productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    mainDiv.appendChild(productPrice);

    let productName = document.createElement('p');
    productName.innerText = product.name;
    mainDiv.appendChild(productName);

    let BtnFigure = document.createElement('figure');
    ProductInfo.appendChild(BtnFigure);

    let ProductBtn = document.createElement('img');
    ProductBtn.setAttribute('src', './icons/bt_add_to_cart.svg');
    ProductBtn.setAttribute('alt', '');
    BtnFigure.appendChild(ProductBtn);

    cardsContainer.appendChild(productCar);
}