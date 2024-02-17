const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const shoppingCartConteiner = document.querySelector("#shoppingCartConteiner");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");



menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)


function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartConteiner.classList.contains("inactive");  
  desktopMenu.classList.toggle("inactive");
  if (!isAsideClosed) {
    shoppingCartConteiner.classList.add("inactive");
  }
mobileMenu.classList.toggle("inactive");
};

function toggleMobileMenu(){
  const isAsideClosed = shoppingCartConteiner.classList.contains("inactive");  

  if (!isAsideClosed) {
    shoppingCartConteiner.classList.add("inactive");
  }
  closeProductDetailAside()

mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");  

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");  

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  shoppingCartConteiner.classList.toggle("inactive");
}

function openProductDetailAside(){
shoppingCartConteiner.classList.add("inactive")
;productDetailContainer.classList.remove("inactive");

;}
function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Camiseta básquet",
  precio: 120,
  image: "https://i.pinimg.com/originals/30/5a/f8/305af8f3829d18054b5beb2a11d0f888.jpg" 
});

productList.push({
  name: "Camiseta alternativa",
  precio: 200,
  image: "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/H/T/HT3683_0.jpg" 
});

productList.push({
  name: "Camiseta alternativa celeste",
  precio: 200,
  image: "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/ekqgcqbeqqs8cw4d2d7iuqv3rs13/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5" 
});

productList.push({
  name: "Camiseta jugador",
  precio: 250,
  image: "https://sporting.vtexassets.com/arquivos/ids/554270/6HE6323-000-1.jpg?v=637926277464630000" 
});

function renderProducts(arr){ 
for (product of arr){
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
//product={name, price, image}
  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.addEventListener("click", openProductDetailAside);
  

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText= "$" + product.precio;
  const productName = document.createElement("p");
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);


  const productInfoFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}
}

renderProducts(productList);