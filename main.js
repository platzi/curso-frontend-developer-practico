// General elements
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');

// Show / Hide Desktop Menu
const toggleDesktopMenu = () => {
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
};
const menuEmail = document.querySelector('.navbar-email');
menuEmail.addEventListener('click', toggleDesktopMenu);

// Show / Hide Mobile menu
const toggleMobileMenu = () => {
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
};
const menuHamIcon = document.querySelector('.menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

// Show / Hide Shopping cart
const toggleShoppingCart = () => {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
};
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
menuShoppingCart.addEventListener('click', toggleShoppingCart);

// Show / Hide Product Detail
const toggleProductDetail = (product) => {
  productDetail.querySelector('#productDetail .product-detail-image').setAttribute('src', product.image);
  productDetail.querySelector('#productDetail .product-info-price').innerText = '$' + product.price;
  productDetail.querySelector('#productDetail .product-info-name').innerText = product.name;
  productDetail.querySelector('#productDetail .product-info-description').innerText = product.description;

  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetail.classList.toggle('inactive');
}

// Close Product Detail
document.querySelector('.product-detail-close img').addEventListener('click', () => {
  productDetail.classList.add('inactive');
});

// Product List
const productList = [];
productList.push ({
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1200,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
  description: 'Black bicycle helmet'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1600,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
  description: 'Complete bicycle helmet'
});
productList.push ({
  name:'Bicycle helmet',
  price: 1500,
  image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
  description: 'Modern bicycle helmet'
});
productList.push ({
  name:'Seat',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
  description: 'Ergonomic and comfortable bicycle seat'
});
productList.push ({
  name:'Tennis Montain Bike',
  price: 2200,
  image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
  description: 'Great and comfortable Tennis'
});
productList.push ({
  name:'Sunglasses',
  price: 800,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
  description: 'Modern style sunglasses'
});
productList.push ({
  name:'Sunglasses',
  price: 600,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
  description: 'Modern yellow style sunglasses'
});
productList.push ({
  name:'Bicycle seat bag',
  price: 876,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
  description: 'Black waterproof bicycle seat bag'
});

const renderProducts = (productList) => {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click', toggleProductDetail.bind(this, product), false);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('p');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoDiv.append(productPrice, productName);

    productInfoFigure.appendChild(productImageCart);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImage, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);