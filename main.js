/* Variables */
    /* Menu Desktop */
const menuEmail     = document.querySelector('.navbar-email');
const desktopMenu   = document.querySelector('.desktop-menu');
    /* Menu Mobile */
const menuLinesLeft = document.querySelector('.menu');
const mobileMenu    = document.querySelector('.mobile-menu');
    /* shopping kart */
const shoppingKart  = document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer  = document.querySelector('#shoppingCar')
    /* Product List */
const cardContainer = document.querySelector('.cards-container')
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Wheel',
    price: 80,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Lever',
    price: 40,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({name: 'Reloj', price: 120, img: 'https://media.istockphoto.com/vectors/round-wall-clock-mock-up-front-view-vector-id994179940?k=20&m=994179940&s=612x612&w=0&h=b5DMJZcGTxBgJVAg37lF5GKZ_ThJYwy--9OfevoiqpE='})

/* Eventos */
    /* Menu Desktop */
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingKart.addEventListener('click', toggleAsideProduct);
    /* Mobile Menu */
menuLinesLeft.addEventListener('click', toggleMobileMenu);
    /* Product List */


/* Funtions */
    /* Menu Desktop */
function toggleDesktopMenu(){
    shoppingCardContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}
function toggleAsideProduct(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCardContainer.classList.toggle('inactive')
}
/* Mobile Menu */
function toggleMobileMenu(){
    shoppingCardContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}
/* Product List */

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const cartFigure = document.createElement('figure');
        const cartFigureImg = document.createElement('img');
        cartFigureImg.setAttribute('src', "./icons/bt_add_to_cart.svg");

        cardContainer.append(productCard);
        productCard.append(productImg, productInfo);
        productInfo.append(productInfoDiv, cartFigure);
        productInfoDiv.append(productPrice, productName);
        cartFigure.append(cartFigureImg);
    }

}

renderProducts(productList);