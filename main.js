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
    name: 'Jordan x UNION Playera',
    price: 1299,
    image: 'https://static.nike.com/a/images/w_640,c_limit/b64bb07e-2807-4ae1-b77f-4a9476f00ddd/fecha-de-lanzamiento-de-la-colecci%C3%B3n-de-prendas-y-accesorios-jordan-x-union.png',
    description: 'Esta playera es ideal para combinar gracias a sus gráficos y un parche tejido que apoya a Jordan y UNION.'
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
    name: 'AJKO 1 Low x UNION White',
    price: 3699,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/2fc7378c-8b90-445b-a2ba-e94de9e7f58d/fecha-de-lanzamiento-del-ajko-1-low-x-union-white-do8912-101.jpg',
    description: 'Mírate en el espejo, es increíble. Regresa a la era de los radiocasetes, el denim con acabado lavado con ácido y el traje Flight original, el primer AJKO 1 Low te conecta al estilo fuera de la cancha de los 80.'
  },
  {
    id: 8,
    name: 'Air Force 1 Low x Premium Goods para mujer The Sophia',
    price: 3599,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/a48ae694-f7df-400d-bd02-3446e2886693/fecha-de-lanzamiento-del-air-force-1-low-premium-goods-the-sophia-para-mujer-dv2957-001.jpg',
    description: 'El siguiente paso es tuyo en el Air Force 1 x Premium Goods "Sophia". Inspirado en el amor de Jennifer Ford por las joyas, así como en su trabajo en el pasado con ellas, este calzado reinventa el diseño icónico desde la perspectiva del lujo de alta calidad.'
  },
  {
    id: 9,
    name: 'Air Jordan 2 para mujer Sunset Haze',
    price: 4899,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/7397bad5-aad0-41b7-8544-b9f92c199032/fecha-de-lanzamiento-del-air-jordan-2-sunset-haze-para-mujer-dx4400-118.jpg',
    description: '¿Buscas un clásico de uso diario que pueda completar un atuendo o aportar estilo con facilidad? Este AJ2 combina tonos neutros elegantes con detalles sutiles (el color puesta de sol neblina en la suela y el ribete destaca de maravilla) para que cuentes con un calzado sofisticado y listo para todo.'
  },
  {
    id: 10,
    name: 'Dunk Low El año del conejo',
    price: 3199,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/489eade7-34d8-40e4-a5d0-865c83b9133f/fecha-de-lanzamiento-del-dunk-low-year-of-the-rabbit-fd4203-161.jpg',
    description: 'Oh, dulce nostalgia. Inspirada en el AF1 "Year of the Rabbit" de 2011 con temática de dulces, esta colección Dunk está espolvoreada con regalos llamativos que aluden a ciudades representativas de China.'
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
      priceProductDetail.textContent = priceFormatted(article.price);
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
    productPrice.textContent = priceFormatted(products.price);
    productIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productIconCart.setAttribute('value', products.id);

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

// * Permite darle formato al precio
function priceFormatted(price) {
  let addPriceFormatted = price.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN'
  });
  return addPriceFormatted;
}

//* Permite agregar una lista de atributos
function AddListAttr(element, attrs) {
  for (let key in attrs) {
    element.setAttribute(key, attrs[key]);
  }
}
