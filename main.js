const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCardContainer = document.querySelector("#shoppingCardContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const productInfoDetailImage = document.querySelector(".product-info-detail-image");
const productInfoDetailPrice = document.querySelector(".product-info-detail-price");
const productInfoDetailTitle = document.querySelector(".product-info-detail-title");
const productInfoDetailDescription = document.querySelector(".product-info-detail-description");

menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoShoppingCardContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toogleDesktopMenu(){
  const isShoppingCardContainerClosed = shoppingCardContainer.classList.contains("inactive");
  
  if(!isShoppingCardContainerClosed){
    shoppingCardContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu(){
  const isShoppingCardContainerClosed = shoppingCardContainer.classList.contains("inactive");
  
  if(!isShoppingCardContainerClosed){
    shoppingCardContainer.classList.add("inactive");
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle("inactive");
}

function toogleCarritoShoppingCardContainer(){
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
 
  if(!isMobileMenuClosed){
    mobileMenu.classList.add("inactive");
  }
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add("inactive");
  }
 if(!isProductDetailClosed){
  productDetailContainer.classList.add("inactive");
 }

  shoppingCardContainer.classList.toggle("inactive");
}

function openProductDetailAside(event){
  shoppingCardContainer.classList.add("inactive");

  //Obtengo el id de la imagen clickeada y lo utilizo como indice del string
  const idCard = parseInt(event.path[1].id.substring(2));
   
  productInfoDetailImage.setAttribute("src", productList[idCard].image);
  productInfoDetailPrice.innerText = "$"+ productList[idCard].price;
  productInfoDetailTitle.innerText = productList[idCard].name;
  productInfoDetailDescription.innerText = productList[idCard].description;


  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
  name: 'Skate',
  price: 60,
  image: 'https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'Description about  this product. In the this case is a skate.',
});
productList.push({
  name: 'Dron',
  price: 300,
  image: 'https://images.pexels.com/photos/1809576/pexels-photo-1809576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: 'Description about  this product. In the this case is a dron.',
});


function renderProducts(arr) {
  let i=0;
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("id", "pl"+ i);
    i++;
  
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
  }
}

renderProducts(productList);