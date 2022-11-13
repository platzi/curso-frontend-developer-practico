const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const botonMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const botonShoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrder = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
botonMenuMobile.addEventListener('click', togglemobileMenu);
botonShoppingCart.addEventListener('click',togglemyOrder);


function toggleDesktopMenu() {
    mobileMenu.classList.add('inactive');
    myOrder.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function togglemobileMenu() {
    mobileMenu.classList.toggle('inactive');
    myOrder.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
function togglemyOrder() {
    mobileMenu.classList.add('inactive');
    myOrder.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}

const producList = [];
producList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
producList.push({
    name: 'PC',
    price: 620,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
producList.push({
    name: 'Pantalla',
    price: 220,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*<div class="product-card">
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
      </div>
      */

for (product of producList){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image);

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

    cardsContainer.appendChild(productCard);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfoFigure.appendChild(productImgCart);

}