//desktop-menu - event listener
const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
email.addEventListener('click', function () {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

//mobile-menu - event listener
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('inactive');
    cartDetail.classList.add('inactive'); //close cart detail
    productDetail.classList.add('inactive'); //close product detail
});

//product detail - event listener
const cartDetail = document.querySelector('.cart-detail');
const cartDetailButton = document.querySelector('.navbar-shopping-cart');
cartDetailButton.addEventListener('click', function () {
    cartDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); //close mobile menu
    productDetail.classList.add('inactive'); //close product detail
});

// MAIN CONTAINER - PRODUCT LIST
const productList= [];
productList.push({
    name: 'Bike',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Car',
    price: 89000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Ferrari_488_GTB_IMG_4120.jpg'
})
productList.push({
    name: 'Screen',
    price: 9000,
    image: 'https://mac-center.com/cdn/shop/products/IMG-6206371.jpg?v=1658325568'
})
productList.push({
    name: 'Mac book air',
    price: 92000,
    image: 'https://mac-center.com/cdn/shop/products/IMG-6206371.jpg?v=1658325568'
})
productList.push({
    name: 'Iphone 12',
    price: 56000,
    image: 'https://mac-center.com/cdn/shop/products/IMG-6206371.jpg?v=1658325568'
})

// insert product list to html in cards-container
const cardsContainer = document.querySelector('.cards-container');

// create card for each product
function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-image');
    cardImage.src = product.image;
    card.appendChild(cardImage);

    const info = document.createElement('div');
    info.classList.add('product-info');

    const div3 = document.createElement('div');

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = product.name;
    div3.appendChild(cardTitle);

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-price');
    cardPrice.innerText = '$'+product.price;
    div3.appendChild(cardPrice);

    info.appendChild(div3);

    const figure = document.createElement('figure');
    const figureImg = document.createElement('img');
    figureImg.src = './icons/bt_add_to_cart.svg';
    figure.appendChild(figureImg);
    info.appendChild(figure);

    card.appendChild(info);

    return card;
}

// for every product in productList, create a card and insert it to cardsContainer
productList.forEach(function (product) {
    const card = createCard(product);
    cardsContainer.appendChild(card);
});


// SHOW PRODUCT DETAIL
const productCard = document.querySelectorAll('.product-card');
const buttonCloseProductDetail = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('.product-details');
productCard.forEach(function (card) {
    card.addEventListener('click', function () {
        productDetail.classList.toggle('inactive');
        cartDetail.classList.add('inactive'); //close cart detail
        mobileMenu.classList.add('inactive'); //close mobile menu
    })
})
buttonCloseProductDetail.addEventListener('click', function () {
    productDetail.classList.toggle('inactive');
})
