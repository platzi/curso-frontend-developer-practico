"use strict";

// # Carga de productos
const productList = [
  {
    id: 1,
    name: 'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 2,
    name: 'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
  },
  {
    id: 3,
    name: 'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
  },
  {
    id: 4,
    name: 'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
  },
  {
    id: 5,
    name: 'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
  },
  {
    id: 6,
    name: 'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
  },
  {
    id: 7,
    name: 'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
  },
  {
    id: 8,
    name: 'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
  },
  {
    id: 9,
    name: 'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
  }
];

let navEmail = document.querySelector('.navbar-email'),
  deskMenu = document.querySelector('.desktop-menu'),
  burgerMenu = document.querySelector('.menu'),
  mobMenu = document.querySelector('.mobile-menu'),
  shoppingCart = document.querySelector('.navbar-shopping-cart'),
  productShoppingCart = document.querySelector('#productShoppingCart'),
  productDetail = document.querySelector('#productDetail'),
  productDetailClose = document.querySelector('.product-detail-close');

// # secuencia que muestra y oculta menu,carrito compras y detalle producto
let showDeskMenu = () => {
  productDetail.classList.add('inactive');
  mobMenu.classList.add('hide-menu');
  productShoppingCart.classList.add('inactive');
  deskMenu.classList.toggle('inactive');
};
navEmail.addEventListener('click', showDeskMenu);

let ShowMobMenu = () => {
  deskMenu.classList.add('inactive');
  productShoppingCart.classList.add('inactive');
  productDetail.classList.add('inactive');
  mobMenu.classList.toggle('hide-menu');
};
burgerMenu.addEventListener('click', ShowMobMenu);

let ShowShoppingCart = () => {
  mobMenu.classList.add('hide-menu');
  deskMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  productShoppingCart.classList.toggle('inactive');
};
shoppingCart.addEventListener('click', ShowShoppingCart);

let showProductDetail = (e) => {
  mobMenu.classList.add('hide-menu');
  deskMenu.classList.add('inactive');
  productShoppingCart.classList.add('inactive');
  productDetail.classList.remove('inactive');
};
productDetailClose.addEventListener('click', () => {
  productDetail.classList.add('inactive');
});

// * Permite mostrar la info del producto seleccionado
function GenerateProductDetail(event) {
  console.log(event);
}

// * Permite generar el listado de productos
function renderProducts(arr) {
  const cardContainer = document.querySelector('.cards-container');
  let toRender = [];
  for (let products of arr) {
    // * creacion de elementos del html
    const productCard = document.createElement('div'),
      productImages = document.createElement('img'),
      productInfo = document.createElement('div'),
      productInfoDiv = document.createElement('div'),
      productName = document.createElement('p'),
      productPrice = document.createElement('p'),
      productAddCart = document.createElement('figure'),
      productIconCart = document.createElement('img');

    // * Se agregan complementos al html
    productCard.classList.add('product-card', `key-${products.id}`);
    productImages.setAttribute('src', products.image);
    productImages.addEventListener('click', showProductDetail);
    productInfo.classList.add('product-info');
    productName.textContent = products.name;
    productPrice.textContent = '$' + products.price;
    productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    // * Se le da estructura al html generado
    productInfoDiv.append(productName, productPrice);
    productAddCart.appendChild(productIconCart);
    productInfo.append(productInfoDiv, productAddCart);
    productCard.append(productImages, productInfo);

    // * Agrego las cards al nuevo array creado al principio
    toRender.push(productCard);
  }

  // * Pasamos todo el array a la vez, modificando solo una vez el DOM
  cardContainer.append(...toRender);
}

renderProducts(productList);

