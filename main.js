const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
/* Constante para listas de productos */
const template = document.getElementById('product-template').content;
const fragment = document.createDocumentFragment();
const productDetailContainer= document.querySelector('#productDetail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside); //menú del carrito desplegado
productDetailContainer.addEventListener('click', closeProductDetailAside); 




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
  const isproductDetailContainer = productDetailContainer.classList.contains('inactive');

  /* ¿Menú carrito desplegado? */
  (!isCarritoAsideClosed) ? shoppingCartContainer.classList.add('inactive'): false;
  (!isproductDetailContainer) ? productDetailContainer.classList.add('inactive'): false;

  closeProductDetailAside() //función que cierra el detalle del producto
}

function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle('inactive');
  /* Variable para saber si menú mobile está activo */
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  /* Variable para saber si desktop menu está activo */
  const isDesktopMenu = desktopMenu.classList.contains('inactive');


  /* ¿Menú hamburguesa desplegado? */
  (!isMobileMenuClosed) ? mobileMenu.classList.add('inactive'): false;

  /* ¿Menú desktop desplegado? */
  (!isDesktopMenu) ? desktopMenu.classList.add('inactive'): false;

  /* Variable para saber si aside product está activo */
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  /* ¿Menú aside product desplegado? */
  (!isProductDetailClosed) ? productDetailContainer.classList.add('inactive'): false;


}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive'); //clic en producto para mostrar aside
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');

 se;
}


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


for (const product of productList) {
const productCard = document.createElement('div');
productCard.classList.add('product-card');
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.addEventListener('click', openProductDetailAside)

  //console.log(productImg)
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

fragment.appendChild(productCard)

}

cardsContainer.appendChild(fragment);





/* function lista(Element) {
  
  template.querySelector('.product-info div p').textContent = Element.price;
  template.querySelector('.product-info div p:nth-of-type(2)').textContent = Element.name;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
  
  cardsContainer.appendChild(fragment);

  const productImg = document.getElementById('productImg2');
  console.log(productImg)
  
  
  productImg.addEventListener('click', console.log)
}


productList.forEach((Element) => {
  lista(Element)
}); */








  














