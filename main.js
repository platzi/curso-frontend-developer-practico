const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer =document.querySelector(".cards-container");


            // MOSTRAR U OCULTAR MENUS

// DESKTOP

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains('inactive');

  if(isAsideOpen) {
    aside.classList.toggle('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

// MOBILE MENU

burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  const isAsideOpen = !aside.classList.contains('inactive');
  if(isAsideOpen) {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

// ASIDE

menuCarrito.addEventListener('click', toggleAside);

function toggleAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

if (isMobileMenuOpen || isDesktopMenuOpen ) {
  mobileMenu.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
}
  aside.classList.toggle('inactive');
}


// ASIGNACION DE PRODICTOS AL ARRAY


const productList = [];

productList.push ({
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
  name:'Bicycle helmet1',
  price: 1200,
  image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  name:'Bicycle helmet2',
  price: 1600,
  image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
  name:'Bicycle helmet3',
  price: 1500,
  image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
  name:'Seat',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
  name:'Tennis Montain Bike',
  price: 2200,
  image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
  name:'Sunglasses',
  price: 800,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
  name:'Sunglasses1',
  price: 600,
  image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
  name:'Bicycle seat bag',
  price: 876,
  image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
});



// MAQUETACION DE HTML EN JS

for (product of productList){



  const productCard = document.createElement('div');
  productCard.classList.add("product-card");


  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add("product-info");
  


  const productInfoDiv = document.createElement('div');
  productInfoDiv.classList.add("product-info-div");

  const productPrice = document.createElement('p');
  productPrice.classList.add("product-price");
  productPrice.innerText ='$' + product.price;

  const productName = document.createElement('p');
  productName.classList.add("product-name");
  productName.innerText=` $ ${product.name}`;

  productInfoDiv.append(productPrice, productName);


  const productFigure = document.createElement('figure');
  productFigure.classList.add("product-figure");

  const productFigureImg = document.createElement('img');
  productFigureImg.setAttribute('src', "./icons/bt_add_to_cart.svg")

  productFigure.append(productFigureImg);



  productInfo.append(productInfoDiv, productFigure);

  productCard.append(productImg, productInfo);

  cardsContainer.append(productCard);
  
}