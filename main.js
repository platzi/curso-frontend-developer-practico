const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCartContainer = document.querySelector("#shopingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshopingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isshopingCartContainerClosed = shopingCartContainer.classList.contains('inactive');

  if (!isshopingCartContainerClosed) {
    shopingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isshopingCartContainerClosed = shopingCartContainer.classList.contains('inactive');

  if (!isshopingCartContainerClosed) {
    shopingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshopingCartContainer() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }

  const isproductDetailContainer = productDetailContainer.classList.contains('inactive');
  
  if (!isproductDetailContainer) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shopingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
  shopingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image: "https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2963482.jpg?scale=550",
});
productList.push({
  name: "Computadora",
  price: 620,
  image: "http://i0.wp.com/comofuncionaque.com/wp-content/uploads/cfq/2015/09/computadora-de-escritorio.jpg?resize=700%2C394",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
  
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
  
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCard);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  };
};

renderProducts(productList);