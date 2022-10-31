const menuEmail = document.querySelector('.navbar-email');
const menuHabIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHabIcon.addEventListener('click', togglemobileHabMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideCartMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    // si el menu aside está abierto, entonces hay que cerrarlo
    if (!isAsideCartMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (!isProductDetailContainerClosed){
        productDetailContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function togglemobileHabMenu () {
    const isAsideCartMenuClosed = shoppingCartContainer.classList.contains('inactive');
    // si el menu aside está abierto, entonces hay que cerrarlo
    if (!isAsideCartMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isEmailMenuClosed = menuEmail.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    // si el Mobile Menu está abierto, hay que cerrarlo
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isEmailMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    /* const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    } */
    /* Logica sencilla de Juan DC */
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
	name: 'iPhone 13',
	price: 890,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
	name: 'Computer',
	price: 430,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

/* Esta función muestra los productos que ofrecemos en la tienda */
function renderProducts(arr) {
  /* Ahora vamos a crear elemento por elemento de html desde javascript */
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img'); /* creamos el elemento img */
    productImg.setAttribute('src', product.image); /* Agregamos el atributo src a la imagen */
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info'); 
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
    productInfoFigure.appendChild(productImgCart);
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName); 
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}
/* Llamamos a la función renderProducts con cuyo argumento es el array  que contiene la lista de productos, pero que mañana más tarde nuestros productos pueden venir desde una base de datos externa*/
renderProducts(productList);