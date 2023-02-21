const $ = (selector) => document.querySelector(selector);

const desktopMenu = $('.desktop-menu')
const menuEmail =$('.navbar-email');
const burguerMenu =$('.menu');
const mobileMenu =$('.mobile-menu');
const menuCart =$('.navbar-shopping-cart');
const productNav =$('.product-detail');
const cardsContainer =$('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobilepMenu);
menuCart.addEventListener('click', toggleproductNav);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productNav.classList.add('inactive');
}

function toggleMobilepMenu() {
    mobileMenu.classList.toggle('inactive');
    productNav.classList.add('inactive');
}

function toggleproductNav() {
    productNav.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: '1000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: "Xbox Series X",
    price: '500',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
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
        
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

console.log('JS JALA');
