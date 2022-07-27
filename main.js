const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const cartMenuIcon = document.querySelector(".navbar-shopping-cart");
const cart = document.querySelector(".shopping-cart-detail");

const mainContainer = document.querySelector(".main-container");
const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector(".product-detail")



emailMenu.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  cart.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

burguerMenuIcon.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  cart.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

cartMenuIcon.addEventListener("click", toggleCart);
function toggleCart() {
  cart.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
  mainContainer.classList.remove("inactive");
}


function openProductDetailAside(productIdentifier, arr) {
  desktopMenu.classList.add("inactive");
  cart.classList.add("inactive");
  // mainContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
  
  let name, price, image;

  for (product of arr) {
    if (product.id == productIdentifier) {
      name = product.name;
      price = product.price;
      image = product.image;
      break;
    }
  }

  const productDetailAside = createProductDetailContainer(name, price, image);

  productDetailContainer.innerHTML = "";
  productDetailContainer.append(productDetailAside);
}
function createProductDetailContainer(name, price, image) {
  const productDetail = document.createElement('div')

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
  productDescription.innerText = 'Description';

  const cartButton = document.createElement('button');
  cartButton.classList.add('primary-button');
  cartButton.classList.add('add-to-cart-button');
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



let productList = [];
productList.push ({
  id: 1,
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
  id: 2,
  name:'Bicycle helmet',
  price: 1200,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  id: 3,
  name:'Bicycle helmet',
  price: 1600,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
  id: 4,
  name:'Bicycle helmet',
  price: 1500,
  image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  id: 5,
  name:'Seat',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
  id: 6,
  name:'Tennis Mountain Bike',
  price: 2200,
  image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
  id: 7,
  name:'Sunglasses',
  price: 800,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
  id: 8,
  name:'Sunglasses',
  price: 600,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
  id: 9,
  name:'Bicycle seat bag',
  price: 876,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});




function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('product-identifier', product.id);
    productImg.addEventListener("click", function() {
      const productIdentifier = productImg.getAttribute('product-identifier');
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