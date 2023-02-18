const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const BurgerMenu = $('.menu'); 
const mobileMenu = $('.mobile-menu');
const ShoppingMenu = $('.product-detail');
const ShoppingCart = $('.navbar-shopping-cart');
const cardscontainer = $('.cards-container')


//Function para el desktop menu
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isShoppingMenuClose = ShoppingMenu.classList.contains('inactive');
   
    if (!isShoppingMenuClose) {
        ShoppingMenu.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive') ;
    
}
//Function para el boton menu izquierdo mobile
BurgerMenu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    const isShoppingMenuClose = ShoppingMenu.classList.contains('inactive');
   
    if (!isShoppingMenuClose) {
        ShoppingMenu.classList.add('inactive')
    }



    mobileMenu.classList.toggle('inactive') ;
    
}

//Function para el carrito de compras
ShoppingCart.addEventListener('click', toggleProductCart)

function toggleProductCart() {
   const isMobileMenuClose = mobileMenu.classList.contains('inactive');
   
if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive')
}

const isdesktopMenuClose = desktopMenu.classList.contains('inactive');
   
if (!isdesktopMenuClose) {
    desktopMenu.classList.add('inactive')
}

 ShoppingMenu.classList.toggle('inactive') ;
    
 
}

//Products list

const productlist = [];
productlist.push({
    name: 'bike',
    price: '120',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productlist.push({
    name: 'labtop',
    price: '620',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productlist.push({
    name: 'car',
    price: '7000',
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

// Maquetacion renderProducts

function renderProducts(arr) {
for (product of productlist) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card');

    const productimg = document.createElement('img');
    productimg.setAttribute('src', product.Image);

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info');

    const productFeature = document.createElement('div')

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productFeature.appendChild(productPrice);
    productFeature.appendChild(productName);


    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productFeature);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productimg);
    productCard.appendChild(productInfo);

    cardscontainer.appendChild(productCard);


}
}

renderProducts(productlist)
