// 1 - Define the element in the HTML, in this example I used classes. I chose the name of the const, I tried to explain the conts of easy way 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMobileMenu = document.querySelector('.icon-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.aside-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')


// 2- Listen the even and declare the function, in this case we created a script where user to click on an element and then a function will be run

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMobileMenu.addEventListener('click', toggleMobileMenu);
iconShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetail);


// 3- create the function. The mayority of the functions are same, beacuse we wanted to hide or display some elements. Even we applied a logic without if, for example, when click on the shopping cart we hide the rest of the element like a desktop menu or mobile menu.

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
    shoppingCart.classList.add('inactive'); // closing ShoppingCart
    productDetailContainer.classList.add("inactive"); // closing Product Detail
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
    shoppingCart.classList.add('inactive'); // closing ShoppingCart
    productDetailContainer.classList.add("inactive"); // closing Product Detail
}

function toggleShoppingCart () {
    shoppingCart.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); // closing Mobile Menu
    desktopMenu.classList.add('inactive'); // closing Desktop Menu
    productDetailContainer.classList.add("inactive"); // closing Product Detail
}

function openProductDetail () {
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetail () {
    productDetailContainer.classList.add('inactive')
}

const ProductList = [];
ProductList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Laptop',
    price: 1500.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Cellphone',
    price: 1110.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Laptop',
    price: 1500.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
ProductList.push({
    name: 'Cellphone',
    price: 1110.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProduct (ArrayProducts) {
    for (product of ArrayProducts) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
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
    
        const productInfoFigure = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(imgFigure);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.append(productCard);
    }
}
renderProduct(ProductList);