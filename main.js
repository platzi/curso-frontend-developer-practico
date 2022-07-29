//Global Variables
let productsList = [];

//Selectors

const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const mobileBurger = document.querySelector('.menu');
const showCartBtn = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.products-cart');
const cartArrow = document.querySelector('.cart-arrow');
const cardsContainer = document.querySelector('.cards-container');
const cardImage = document.querySelector('.product-card-img');
const productCartInfo = document.querySelector('.product-detail')

//Event listeners
mobileBurger.addEventListener('click', () => {
  menuMobile.classList.toggle('slide-right');
  shoppingCart.classList.remove('slide-left');
});

navBarEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive');
  shoppingCart.classList.remove('slide-left');
});

showCartBtn.addEventListener('click', () => {
shoppingCart.classList.toggle('slide-left');
menuMobile.classList.remove('slide-right');
desktopMenu.classList.add('inactive');
});

cartArrow.addEventListener('click', () => shoppingCart.classList.remove('slide-left'))


function addProduct(image, price, name) {
  const obj = {
    img: image,
    price: price,
    name: name,
  }
  productsList = [...productsList, obj];
  return productsList
}

function showProductCards(arr) {
  cleanHTML();
  arr.forEach( (cur) => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', cur.img)
    productImg.classList.add('product-card-img')

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const subDiv = document.createElement('div')

    const price = document.createElement('p')
    price.textContent = `$ ${cur.price}`

    const name = document.createElement('p')
    name.textContent = cur.name;

    const figure = document.createElement('figure');
    const cartLogoImg = document.createElement('img');
    cartLogoImg.src = './icons/bt_add_to_cart.svg'

    subDiv.append(price, name);

    figure.appendChild(cartLogoImg);

    productInfo.append(subDiv, figure);

    card.append(productImg, productInfo);

    console.log(card);
    cardsContainer.appendChild(card);

    card.addEventListener('click', showProductInfo)
  })
}

function cleanHTML() {
  while(cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
}

function showProductInfo(e) {
  console.log(e.target.parentElement());
}