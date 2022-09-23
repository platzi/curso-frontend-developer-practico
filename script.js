const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleMenuDesktop);
menuHamIcon.addEventListener('click', toggleMenuMobile);
iconCart.addEventListener('click', toggleShoppingCart);


function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive');
}

function toggleMenuMobile() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');

    if (!isMenuMobileClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'bikpce',
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'morral',
    price: 40,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr){
for (arr of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', arr.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const infoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + arr.price;
    const productName = document.createElement('p');
    productName.innerText = arr.name; 

    infoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const figureImg = document.createElement('img');
    figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(figureImg);

    productInfo.append(infoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);


}
}

renderProducts(productList);

