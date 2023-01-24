"use strict";

// # Carga de productos
const productList = [
  {
    id: 1,
    name: 'Air Jordan 2 Lucky Green',
    price: 4599,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/a37120c9-c53e-4737-886e-3a942da82d12/fecha-de-lanzamiento-del-air-jordan-2-lucky-green-dr8884-103.jpg ',
    description: 'Sutil, limpieza del paladar, sustancial. El clásico calzado high que abrió paso a una dinastía del calzado regresa en una nueva combinación de colores.'
  },
  {
    id: 2,
    name: 'Dunk Low Setsubun',
    price: 2899,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/1fb65ac6-2324-4f02-8a21-97ee8cd84526/fecha-de-lanzamiento-del-dunk-low-setsubun-dq5009-268.jpg',
    description: 'Unámonos en la salud, la prosperidad y la buena fortuna a través de la tradición japonesa del festival Setsubun.'
  },
  {
    id: 3,
    name: 'Terminator High',
    price: 3499,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/d42e209e-deaa-4859-a212-e98b7d6b5eed/fecha-de-lanzamiento-del-terminator-high-noble-green-fd0650-100.jpg',
    description: 'Intacto, inalterado y sacado directamente de los archivos; ya sabes a qué nos referimos. El Terminator High te permite volver a la era de los tiros de gancho, las rodilleras y los calcetines altos.'
  },
  {
    id: 4,
    name: 'Air Force 1 x Slam Jam Black and Off Noir',
    price: 4299,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/f106b16d-f32a-42dd-a622-3725ab44e614/fecha-de-lanzamiento-del-air-force-1-x-slam-jam-black-and-off-noir-dx5590-001.jpg',
    description: 'Tu ícono de estilo para el básquetbol y las calles acaba de recibir un cambio de imagen italiano. En colaboración con Slam Jam, esta versión artesanal del AF1 cuenta con el sello de aprobación de la marca italiana de moda urbana.'
  },
  {
    id: 5,
    name: 'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat perferendis atque tempore tenetur, facilis architecto facere'
  },
  {
    id: 6,
    name: 'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat perferendis atque tempore tenetur, facilis architecto facere'
  },
  {
    id: 7,
    name: 'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat perferendis atque tempore tenetur, facilis architecto facere'
  },
  {
    id: 8,
    name: 'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat perferendis atque tempore tenetur, facilis architecto facere'
  },
  {
    id: 9,
    name: 'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat perferendis atque tempore tenetur, facilis architecto facere'
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
  GenerateProductDetail(e);
};
productDetailClose.addEventListener('click', () => {
  productDetail.classList.add('inactive');
});

// * Permite mostrar la info del producto seleccionado
function GenerateProductDetail(event) {
  const urlImages = event.target.attributes.src.value,
    imageProductDetail = document.querySelector('#productDetail img'),
    nameProductDetail = document.querySelector('#productDetail .product-info .product-name'),
    priceProductDetail = document.querySelector('#productDetail .product-info .product-price'),
    descProductDetail = document.querySelector('#productDetail .product-info .product-description');
  productList.find(article => {
    if (article.image === urlImages) {
      imageProductDetail.setAttribute('src', article.image);
      nameProductDetail.textContent = article.name;
      priceProductDetail.textContent = article.price;
      descProductDetail.textContent = article.description;
    }
  });
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
    const priceFormatted = products.price.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN'
    });
    productPrice.textContent = priceFormatted;
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

