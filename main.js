const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const btnBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCar = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
btnBurger.addEventListener("click", toggleMobileMenu);
menuCar.addEventListener("click", toggleCar);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  aside.classList.add("inactive");
}

function toggleCar() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Harley Davidson Sportster S 2021",
  price: 120,
  img: 
  "https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-sportster-s-2021.jpg",
});

productList.push({
  name: "Harley Davidson Softail Slim 2018",
  price: 120,
  img: 
  "https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-softail-slim-2018.jpg",
});

productList.push({
  name: "Harley Davidson 115th Anniversary Softail Breakout 114 2018",
  price: 120,
  img: 
  "https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-115th-softail-breakout-114-2018.jpg",
});

productList.push({
  name: "Harley Davidson CVO Pro Street Breakout 2017",
  price: 120,
  img: 
  "https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-cvo-pro-street-breakout.jpg",
});

productList.push({
  name: "Harley Davidson Pan America Special 2021",
  price: 120,
  img: 
  "https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-pan-america-2021_2.jpg",
});

productList.push({
  name: "Harley Davidson Softail Fat Boy 114 2018",
  price: 120,
  img: 
  "https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-softail-fatboy-114-2018.jpg",
});

productList.push({
  name: "Harley Davidson Softail Deluxe 2018",
  price: 120,
  img: 
  "https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-softail-deluxe-2018.jpg",
});

productList.push({
  name: "Harley Davidson Softail 115 Anniversary Heritage Classic 114 2018",
  price: 120,
  img: 
  "https://motos-b60.kxcdn.com/sites/default/files/harley-davidson-softail-115-anniversary-herritage-classic-114-2018.jpg",
});


function renderProducts (arr) {
  for (product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card') 
  
    const img= document.createElement('img');
    img.setAttribute('src', product.img);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
   
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    //****** */ .append for all****** 
    cardContainer.append(productCard);
    productCard.append(img, productInfo);
    productInfo.append(productInfoDiv, productInfoFigure);
    productInfoDiv.append(productPrice, productName);
    productInfoFigure.append(productImgCart);
   
  }
}

renderProducts(productList)






























