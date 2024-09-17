let productList = [];
productList.push ({
  id: 1,
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: 'Everyday use bicycle'
});
productList.push ({
  id: 2,
  name:'Standard helmet',
  price: 1200,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
  description: 'Standard bicycle helmet'
});
productList.push ({
  id: 3,
  name:'Ventilated helmet',
  price: 1600,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
  description: 'Ventilated helmet'
});
productList.push ({
  id: 4,
  name:'Pro helmet',
  price: 1500,
  image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
  description: 'Professional helmet'
});
productList.push ({
  id: 5,
  name:'Seat',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
  description: 'Sport bicycle seat'
});
productList.push ({
  id: 6,
  name:'Tennis Mountain Bike',
  price: 2200,
  image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9e3e9a0b5bd54125a4f2ad5200e578e4_9366/Five_Ten_Trailcross_GORE-TEX(r)_Mountain_Bike_Shoes_Black_S29146_01_standard.jpg',
  description: 'Specialized mountain bike shoes'
});
productList.push ({
  id: 7,
  name:'Sunglasses',
  price: 800,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
  description: 'Blue sunglasses - Frame and visor'
});
productList.push ({
  id: 8,
  name:'Sunglasses',
  price: 600,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
  description: 'Yellow sunglasses visor'
});
productList.push ({
  id: 9,
  name:'Bicycle seat bag',
  price: 876,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
  description: 'Easy portable bike seat bag'
});


let shoppingCart = []




const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartMenuIcon = document.querySelector(".navbar-shopping-cart");
const cart = document.querySelector(".shopping-cart-detail");
const closeCartIcon = document.querySelector(".close-cart");

const mainContainer = document.querySelector(".main-container");
const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector(".product-detail")



emailMenu.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  productDetailContainer.classList.add("inactive");
  closeCart();
}

burguerMenuIcon.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productDetailContainer.classList.add("inactive");
  closeCart()
}

cartMenuIcon.addEventListener("click", toggleCart);
function toggleCart() {
  if (cart.classList.contains('inactive')) {
    // Aparece
    renderCartProducts(shoppingCart);
    cart.classList.remove("inactive");
    mainContainer.classList.remove("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
  } else {
    // Desaparece
    closeCart();
  }
}


function openProductDetailAside(productIdentifier, arr) {
  desktopMenu.classList.add("inactive");
  cart.classList.add("inactive");
  closeCart()
  productDetailContainer.classList.remove("inactive");
  
  let name, price, image, description;

  for (product of arr) {
    if (product.id == productIdentifier) {
      name = product.name;
      price = product.price;
      image = product.image;
      description = product.description;
      break;
    }
  }

  const productDetailAside = createProductDetailContainer(productIdentifier, name, price, image, description);

  productDetailContainer.innerHTML = "";
  productDetailContainer.append(productDetailAside);
}
function createProductDetailContainer(id, name, price, image, description) {
  const productDetail = document.createElement('div')
  productDetail.setAttribute('product-identifier', id);
  const productIdentifier = productDetail.getAttribute('product-identifier');

  const productDetailClose = document.createElement('div');
  productDetailClose.classList.add('product-detail-close');
  productDetailClose.addEventListener("click", closeProductDetailAside)

  const imgClose = document.createElement('img');
  imgClose.setAttribute('src', './icons/icon_close.png');

  const img = document.createElement('img');
  img.setAttribute('src', image);

  const productDetailInfo = document.createElement('div');
  productDetailInfo.classList.add('product-detail-info');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + price;

  const productName = document.createElement('p');
  productName.innerText = name;

  const productDescription = document.createElement('p');
  productDescription.innerText = description;

  const cartButton = document.createElement('button');
  cartButton.classList.add('primary-button');
  cartButton.classList.add('add-to-cart-button');
  cartButton.addEventListener("click", function() {
    addProductToCart(productIdentifier, productList);
  });
  cartButton.innerText = 'Add to cart';

  const cartIcon = document.createElement('img');
  cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');


  cartButton.appendChild(cartIcon);
  productDetailInfo.appendChild(productPrice);
  productDetailInfo.appendChild(productName);
  productDetailInfo.appendChild(productDescription);
  productDetailInfo.appendChild(cartButton);
  productDetailClose.appendChild(imgClose);
  productDetail.appendChild(productDetailClose);
  productDetail.appendChild(img);
  productDetail.appendChild(productDetailInfo);

  return productDetail;
}


function closeProductDetailAside() {
  mainContainer.classList.remove("inactive");
  productDetailContainer.classList.add("inactive");
}


closeCartIcon.addEventListener("click", closeCart);
function closeCart() {
  cart.classList.add("inactive");
  unrenderCartProducts();
}




function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('product-identifier', product.id);
    const productIdentifier = productCard.getAttribute('product-identifier');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener("click", function() {
      openProductDetailAside(productIdentifier, arr);
    });
    
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
    productImgCart.addEventListener("click", function() {
      addProductToCart(productIdentifier, arr);
    })


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
renderProducts(productList);



/* Shopping Cart Functionality *///////////////////////////////////////////////////////////

function updateCart() {
  unrenderCartProducts();
  renderCartProducts(shoppingCart);  
}


/* ADD */
function addProductToCart(productIdentifier, arr) {
  for (product of arr) {
    if (productIdentifier == product.id) {
      shoppingCart.push(product);
      break;
    }
  }

  const shoppingQuantity = document.querySelector(".shopping-quantity");
  shoppingQuantity.innerText = shoppingCart.length;

  if (!cart.classList.contains('inactive')) {
    updateCart();
  }
}

function renderCartProducts(shoppingCart) {
  const orderContent = document.querySelector('.order');

  let priceSum = 0;
  const summaryTotal = document.querySelector('.summary-total');

  for (product of shoppingCart) {
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('shopping-cart');
    cartProduct.setAttribute('product-identifier', product.id);
    
    const figure = document.createElement('figure');
    
    const cartProductImg = document.createElement('img');
    cartProductImg.setAttribute('src', product.image);

    const cartProductName = document.createElement('p');
    cartProductName.innerText = product.name;
    
    const cartProductPrice = document.createElement('p');
    cartProductPrice.innerText = product.price;

    const removeFromCart = document.createElement('img');
    removeFromCart.setAttribute('src', './icons/icon_close.png');
    removeFromCart.setAttribute('alt', 'remove');
    removeFromCart.addEventListener("click", function() {
      const productIdentifier = cartProduct.getAttribute('product-identifier');
      removeProductFromCart(productIdentifier);
    })


    figure.append(cartProductImg);
    cartProduct.appendChild(figure);
    cartProduct.appendChild(cartProductName);
    cartProduct.appendChild(cartProductPrice);
    cartProduct.appendChild(removeFromCart);
    

    priceSum += product.price;
    orderContent.appendChild(cartProduct);
  }

  summaryTotal.innerText = "$ " + priceSum;
}

function unrenderCartProducts() {
  const orderContent = document.querySelector('.order');
  orderContent.innerHTML = "";
}

/* REMOVE */
function removeProductFromCart(productIdentifier) {
  for (product of shoppingCart) {
    if (product.id == productIdentifier) {
      const productIndex = shoppingCart.indexOf(product);
      shoppingCart.splice(productIndex, 1);
      break;
    }
  }

  const shoppingQuantity = document.querySelector(".shopping-quantity");
  shoppingQuantity.innerText = shoppingCart.length;

  updateCart();
}