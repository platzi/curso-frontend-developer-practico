const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', togleDesktopMenu);

function togleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    orderShopping.classList.add('inactive');
};


const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click', togleMobileMenu);

function togleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    orderShopping.classList.add('inactive');
};


const menuShopping = document.querySelector('.navbar-shopping-cart');
const orderShopping = document.querySelector('.product-detail');
menuShopping.addEventListener('click', togleShoppingMenu);

function togleShoppingMenu() {
    orderShopping.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
};


const productList = [];
productList.push({
    name: 'Bici BMX',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
},
{
    name: 'Casco',
    price: 15,
    image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/628/448/products/ktm-factory-youth-01-8d0c8fabf156f46fe915258806367423-640-0.jpg',
},
{
    name: 'Inflador',
    price: 10,
    image: 'https://borabikes.com.ar/51998-large_default/Inflador-Bicicleta-Medidor-Presion-Beto-Doble-Accion-003ag.jpg',
},
{
    name: 'Bici BMX',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
},
{
    name: 'Casco',
    price: 15,
    image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/628/448/products/ktm-factory-youth-01-8d0c8fabf156f46fe915258806367423-640-0.jpg',
},
{
    name: 'Inflador',
    price: 10,
    image: 'https://borabikes.com.ar/51998-large_default/Inflador-Bicicleta-Medidor-Presion-Beto-Doble-Accion-003ag.jpg',
},
{
    name: 'Bici BMX',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
},
{
    name: 'Casco',
    price: 15,
    image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/628/448/products/ktm-factory-youth-01-8d0c8fabf156f46fe915258806367423-640-0.jpg',
},
{
    name: 'Inflador',
    price: 10,
    image: 'https://borabikes.com.ar/51998-large_default/Inflador-Bicicleta-Medidor-Presion-Beto-Doble-Accion-003ag.jpg',
},
);

const cardsContainer = document.querySelector('.cards-container');
function renderProducts (array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        const productInfoFigure = document.createElement('figure');
        const imageProductCart = document.createElement('img');
        imageProductCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        cardsContainer.appendChild(productCard);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure);
        productInfoFigure.appendChild(imageProductCart);
    }
};
renderProducts(productList);

/* <section class="main-container">
    <div class="cards-container">
      <div class="product-card">
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
  </section> */      