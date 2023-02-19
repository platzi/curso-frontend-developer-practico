const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container")
const productDetail = document.querySelector("#productDetail")
const productDetailCloseIcon = document.querySelector(".product-detail-close")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetail)

//El toggle lo que hace es poner o eliminar una clase
function toggleDesktopMenu() {
    productDetail.classList.add("inactive")
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    productDetail.classList.add("inactive")
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.toggle("inactive");
}

function toggleMobileMenu() {
  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
  productDetail.classList.add("inactive")
}

function openProductDetail(){
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.remove("inactive")
    mobileMenu.classList.add("inactive");
}

function closeProductDetail(){
    productDetail.classList.add("inactive")
}

const productList = [];
productList.push({
  name: "Pantalla",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pc",
  price: 450,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
        productImg.addEventListener('click', openProductDetail)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)

