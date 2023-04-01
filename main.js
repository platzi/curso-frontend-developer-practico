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
  },
  {
    id: 11,
    name: 'Dunk Low El año del conejo',
    price: 3199,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/489eade7-34d8-40e4-a5d0-865c83b9133f/fecha-de-lanzamiento-del-dunk-low-year-of-the-rabbit-fd4203-161.jpg',
    description: 'Oh, dulce nostalgia. Inspirada en el AF1 "Year of the Rabbit" de 2011 con temática de dulces, esta colección Dunk está espolvoreada con regalos llamativos que aluden a ciudades representativas de China.'
  },
  {
    id: 12,
    name: 'Air Jordan 2 para mujer Sunset Haze',
    price: 4899,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/7397bad5-aad0-41b7-8544-b9f92c199032/fecha-de-lanzamiento-del-air-jordan-2-sunset-haze-para-mujer-dx4400-118.jpg',
    description: '¿Buscas un clásico de uso diario que pueda completar un atuendo o aportar estilo con facilidad? Este AJ2 combina tonos neutros elegantes con detalles sutiles (el color puesta de sol neblina en la suela y el ribete destaca de maravilla) para que cuentes con un calzado sofisticado y listo para todo.'
  },
  {
    id: 13,
    name: 'Air Force 1 Low x Premium Goods para mujer The Sophia',
    price: 3599,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/a48ae694-f7df-400d-bd02-3446e2886693/fecha-de-lanzamiento-del-air-force-1-low-premium-goods-the-sophia-para-mujer-dv2957-001.jpg',
    description: 'El siguiente paso es tuyo en el Air Force 1 x Premium Goods "Sophia". Inspirado en el amor de Jennifer Ford por las joyas, así como en su trabajo en el pasado con ellas, este calzado reinventa el diseño icónico desde la perspectiva del lujo de alta calidad.'
  },
  {
    id: 14,
    name: 'AJKO 1 Low x UNION White',
    price: 3699,
    image: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/2fc7378c-8b90-445b-a2ba-e94de9e7f58d/fecha-de-lanzamiento-del-ajko-1-low-x-union-white-do8912-101.jpg',
    description: 'Mírate en el espejo, es increíble. Regresa a la era de los radiocasetes, el denim con acabado lavado con ácido y el traje Flight original, el primer AJKO 1 Low te conecta al estilo fuera de la cancha de los 80.'
  },
  {
    id: 15,
    name: 'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat perferendis atque tempore tenetur, facilis architecto facere'
  }
];

// # productos agregados al carrito
let listShoppingCart = [];

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
    descProductDetail = document.querySelector('#productDetail .product-info .product-description'),
    buttonProductDetail = document.querySelector('.product-info .add-to-cart-button');

  const foundProduct = productList.find(article => article.image === urlImages);
  if (typeof foundProduct === "object") {
    imageProductDetail.setAttribute('src', foundProduct.image);
    nameProductDetail.textContent = foundProduct.name;
    priceProductDetail.textContent = priceFormatted(foundProduct.price);
    descProductDetail.textContent = foundProduct.description;
    buttonProductDetail.setAttribute('value', foundProduct.id);
    buttonProductDetail.addEventListener('click', event => {
      addProductToShoppingCart(getValueFromNamedNodeMap(event));
    });
  }
}

// * Permite agregar el producto al carrito de compras
function addProductToShoppingCart(identifyProduct) {
  let productToShopping = {
    id: identifyProduct,
    name: productList[identifyProduct - 1].name,
    image: productList[identifyProduct - 1].image,
    price: productList[identifyProduct - 1].price,
    pricetotal: productList[identifyProduct - 1].price,
    quantity: 1
  };

  let content = validateProductToAddToShoppingCart(identifyProduct);
  if (content === false) {
    listShoppingCart.push(productToShopping);
  }
  renderProductsShoppingCart(listShoppingCart);
  updateTotalToPayAndQuantityOfProducts(listShoppingCart);
}

// * Permite generar el listado de productos
function renderProducts(arr) {
  const cardContainer = document.querySelector('.cards-container');
  let toRender = [];
  for (let products of arr) {
    // * creacion de elementos del html
    let productCard = document.createElement('div'),
      productImages = document.createElement('img'),
      productInfo = document.createElement('div'),
      productInfoDiv = document.createElement('div'),
      productName = document.createElement('p'),
      productPrice = document.createElement('p'),
      productAddCart = document.createElement('figure'),
      productIconCart = document.createElement('img');

    // * Se agregan complementos al html
    productCard.classList.add('product-card', `key-${products.id}`);
    productImages.addEventListener('click', showProductDetail);
    AddListAttr(productImages, {
      'src': products.image,
      'alt': products.name,
      'title': products.name,
      'with': '240',
      'height': '240'
    });

    productInfo.classList.add('product-info');
    productName.textContent = products.name;
    productPrice.textContent = priceFormatted(products.price);
    AddListAttr(productIconCart, {
      'src': './icons/bt_add_to_cart.svg',
      'data-value': products.id
    });
    productIconCart.addEventListener('click', event => {
      addProductToShoppingCart(getValueFromNamedNodeMap(event));
    });

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

// * Permite generar listado de productos que se encuentran en el carrito
function renderProductsShoppingCart(array) {
  cleanShoppingCart();
  const shoppingCartContent = document.querySelector('.shopping-cart-content');

  let toRender = [];
  for (let products of array) {
    // * Creacion de elementos html
    let productShoppingCard = document.createElement('div'),
      productShoppingFigure = document.createElement('figure'),
      productShoppingImage = document.createElement('img'),
      productShoppingName = document.createElement('span'),
      productShoppingQuantity = document.createElement('span'),
      productShoppingPrice = document.createElement('span'),
      productShoppingIcon = document.createElement('img');

    //* Se agregan complementos al HTML
    productShoppingCard.classList.add('shopping-cart', `key-${products.id}`);
    AddListAttr(productShoppingImage, {
      'src': products.image,
      'alt': products.name,
      'width': 70,
      'height': 70
    });
    productShoppingName.classList.add('product-name', 'mb-0');
    productShoppingName.textContent = products.name;
    productShoppingQuantity.classList.add('product-quantity');
    productShoppingQuantity.textContent = products.quantity;
    productShoppingPrice.classList.add('product-price', 'mb-0');
    productShoppingPrice.textContent = priceFormatted(products.pricetotal);
    AddListAttr(productShoppingIcon, {
      'src': './icons/icon_close.png',
      'alt': 'Close',
      'data-value': products.id
    });
    productShoppingIcon.addEventListener('click', event => {
      removeProductToShoppingCart(getValueFromNamedNodeMap(event));
    });

    //*Se le da estructura al html Generado
    productShoppingFigure.append(productShoppingImage);
    productShoppingCard.append(
      productShoppingFigure, productShoppingQuantity, productShoppingName, productShoppingPrice, productShoppingIcon
    );

    toRender.push(productShoppingCard);
  }

  //* Se agrega estructura al array creado, modificando solo una vez el DOM
  shoppingCartContent.append(...toRender);
}

//* Permite eliminar un producto del carrito
function removeProductToShoppingCart(idProduct) {
  const newListOfProductsToShopping = listShoppingCart.filter(item => item.id != idProduct);
  listShoppingCart = [];
  newListOfProductsToShopping.forEach(item => listShoppingCart.push(item));
  renderProductsShoppingCart(listShoppingCart);
  updateTotalToPayAndQuantityOfProducts(listShoppingCart);
}

//* validamos que el producto no exista en el carrito de compras para agregarlo
function validateProductToAddToShoppingCart(identifyProduct) {
  let productFound = false;
  listShoppingCart.forEach(product => {
    if (product.id == identifyProduct) {
      productFound = true;
      let basePrice = product.price,
        incrementQuantity = product.quantity + 1,
        totalPay = updateTotalandQuantityProduct(incrementQuantity, basePrice);
      product.quantity = incrementQuantity;
      product.pricetotal = totalPay;
    }
  });
  return productFound;
}

// * Permite actualizar total a pagar y conteno de productos agregados al carrito
function updateTotalToPayAndQuantityOfProducts(arrayOfProducts) {
  let shoppingCartTotalToPay = document.querySelector('.order-total-to-pay'),
    badgeOfQuantityProducts = document.querySelector('.navbar-shopping-cart .badge');

  shoppingCartTotalToPay.textContent = priceFormatted(getTotalToPayment(arrayOfProducts));
  badgeOfQuantityProducts.textContent = getCountTotalProductsToShoppingCart(arrayOfProducts);
}

//* Realiza suma de total a pagar por un producto
function updateTotalandQuantityProduct(quantity, price) {
  let total = quantity * price;
  return total;
}

//* Realiza suma de total a pagar de los productos agregados al carrito
function getTotalToPayment(arrayOfProducts) {
  let totalToPay = 0;
  arrayOfProducts.forEach(product => {
    totalToPay += product.pricetotal;
  });
  return totalToPay;
}

//* Realiza conteo total de productos agregados al carrito
function getCountTotalProductsToShoppingCart(arrayOfProducts) {
  let countProducts = 0;
  arrayOfProducts.forEach(product => {
    countProducts += product.quantity;
  });
  return countProducts;
}

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

//* Permite vaciar el carrito cada que se agrega un producto
function cleanShoppingCart() {
  let cleanShoppinCart = document.querySelectorAll('.shopping-cart');
  cleanShoppinCart.forEach(product => {
    product.remove();
  });
}

/*
* Permite que el NamedNodeMap generado mediante el evento de un click 
* contenga el valor esperado para la funcion del agregar productos al carrito
*/
function getValueFromNamedNodeMap(event) {
  const attrMap = event.target.attributes;
  let attrToSend = "";
  switch (true) {
    case attrMap.getNamedItem("value") !== null:
      attrToSend = attrMap.getNamedItem("value").value;
      break;
    case attrMap.getNamedItem("data-value") !== null:
      attrToSend = attrMap.getNamedItem("data-value").value;
      break;
  }

  return attrToSend;
}