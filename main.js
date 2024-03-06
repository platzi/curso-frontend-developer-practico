const barraCompleta = document.querySelector('.navbar-email');
const imagenIII = document.querySelector('.menu-III');
const compraSuperior = document.querySelector('.navbar-shopping-cart');
const menuCorreo = document.querySelector('.desktop-menu');
const menuGrande = document.querySelector('.mobile-menu');
const menuCompras = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

barraCompleta.addEventListener('click', abrirCerrarCorreo);
imagenIII.addEventListener('click', abrirCerrarMenuGrande);
compraSuperior.addEventListener('click', abrirCerrarCarrito);

function abrirCerrarCorreo() {
    const siMenuComprasCerrado = menuCompras.classList.contains('esconderse');

    if (!siMenuComprasCerrado) {
        menuCompras.classList.add('esconderse');
    }

    menuCorreo.classList.toggle('esconderse');
}

function abrirCerrarMenuGrande() {
    const siMenuComprasCerrado = menuCompras.classList.contains('esconderse');

    if (!siMenuComprasCerrado) {
        menuCompras.classList.add('esconderse');
    }

    menuGrande.classList.toggle('esconderse');
}

function abrirCerrarCarrito() {
    const siMenuGrandeCerrado = menuGrande.classList.contains('esconderse');
    const siMenuCorreoCerrado = menuCorreo.classList.contains('esconderse');

    if (!siMenuGrandeCerrado) {
        menuGrande.classList.add('esconderse');
    }

    if (!siMenuCorreoCerrado) {
        menuCorreo.classList.add('esconderse');
    }

    menuCompras.classList.toggle('esconderse');

}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    // const principal cardsContainer
    const productCard = document.createElement('div'); 
    productCard.classList.add('product-card'); 
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
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
}

renderProducts(productList);


