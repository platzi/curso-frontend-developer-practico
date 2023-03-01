const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
/* Constante para listas de productos */
const template = document.getElementById('product-template').content;
const fragment = document.createDocumentFragment();


function toggleDesktopMenu() {
  /* Variable para saber si carrito stá activo */
  const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

  desktopMenu.classList.toggle('inactive');

  /* ¿Menú carrito desplegado? */
  (!isCarritoAsideClosed) ? shoppingCartContainer.classList.add('inactive'): false;

}

function toggleMobileMenu() {
  /* Variable para saber si carrito está activo */
  const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

  mobileMenu.classList.toggle('inactive');

  /* ¿Menú carrito desplegado? */
  (!isCarritoAsideClosed) ? shoppingCartContainer.classList.add('inactive'): false;

}

function toggleCarritoAside() {
  /* Variable para saber si menú mobile está activo */
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  /* Variable para saber si desktop menu está activo */
  const isDesktopMenu = desktopMenu.classList.contains('inactive');

  shoppingCartContainer.classList.toggle('inactive');

  /* ¿Menú hamburguesa desplegado? */
  (!isMobileMenuClosed) ? mobileMenu.classList.add('inactive'): false;

  /* ¿Menú desktop desplegado? */
  (!isDesktopMenu) ? desktopMenu.classList.add('inactive'): false;

  

}


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 1120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Computadora',
  price: 2120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 1120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Computadora',
  price: 2120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});  

/*
for (const product of productList) {
const productCard = document.createElement('div');
productCard.classList.add('product-card');
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
      const productInfoDiv = document.createElement('div');
        const productPrice= document.createElement('p');
        productPrice.innerText = '$' + product.price;
        productInfoDiv.appendChild(productPrice)
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
        productInfoDiv.appendChild(productName);
      const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
      productInfo.append(productInfoDiv, productInfoFigure);
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);


cardsContainer.appendChild(productCard);
}
*/



productList.forEach((Element) => lista(Element))


function lista(Element) {
  template.querySelector('.product-info div p').textContent = Element.price;
  template.querySelector('.product-info div p:nth-of-type(2)').textContent = Element.name;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
}

cardsContainer.appendChild(fragment);
















