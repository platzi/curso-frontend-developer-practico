const API_URL = 'https://api.escuelajs.co/api/v1'

const burguerMenu  = document.querySelector('.menu');
const menuEmail = document.querySelector('.navbar-email');
const shoppingCartNavbar = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideProductDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartNavbar.addEventListener('click', toggleProductDetail )


function toggleDesktopMenu() {

  const isAsideDetailClosed = asideProductDetail.classList.contains('inactive');

  if( !isAsideDetailClosed ) {
    asideProductDetail.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  
  const isAsideDetailClosed = asideProductDetail.classList.contains('inactive')

  if( !isAsideDetailClosed ) {
    asideProductDetail.classList.add('inactive');
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {

  const isMobileClosed = mobileMenu.classList.contains('inactive');
  const isDesktopClosed = desktopMenu.classList.contains('inactive');

  if( !isMobileClosed ) {
    mobileMenu.classList.add('inactive')
  }

  if( !isDesktopClosed ) {
    desktopMenu.classList.add('inactive')
  }

  asideProductDetail.classList.toggle('inactive')

}

const createProductDiv = (options) => {
  const divCard = document.createElement('div');
  const divProductInfo = document.createElement('div');
  const divInfo = document.createElement('div');
  const productPrice = document.createElement('p');
  const productName = document.createElement('p');
  const figure = document.createElement('figure');
  const imgProduct = document.createElement('img');
  const imgIcon = document.createElement('img');

  divCard.classList.add('product-card');
  divProductInfo.classList.add('product-info');
  
  productPrice.textContent = `$${options.price}`
  productName.textContent = options.name
  
  imgProduct.setAttribute('src', `${options.src}`)
  imgProduct.setAttribute('alt', `${options.name}`)

  imgIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
  imgIcon.setAttribute('alt', `Add to cart ${options.name}`)
  
  figure.append(imgIcon);
  divInfo.append(productPrice, productName);
  divProductInfo.append(divInfo, figure); 
  divCard.append(imgProduct, divProductInfo);

  return divCard;

}



const getProducts = async() => {
  const res = await fetch(`${ API_URL }/products?offset=20&limit=15`);
  const data = await res.json();
  console.log(data);
  const cardsContainer = document.querySelector('.cards-container');

  const fragment = new DocumentFragment;

  data.forEach( item => {
    const productDiv = createProductDiv({
      id: item.id,
      src: item.category.image,
      name: item.title,
      price: item.price
    })
    fragment.append(productDiv);
  })
  cardsContainer.append(fragment);
}

getProducts();