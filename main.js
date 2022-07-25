const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".aside-close");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingcartcontainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurguer.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoshoppingcartcontainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


function toggleDesktopMenu() {
    const isshoppingcartcontainerClosed = shoppingcartcontainer.classList.contains("inactive");

    if (!isshoppingcartcontainerClosed) {
        shoppingcartcontainer.classList.add("inactive");
    }
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isshoppingcartcontainerClosed) {
       productDetailContainer.classList.add("inactive");
   
}
}
function toggleMobileMenu () {
    const isshoppingcartcontainerClosed = shoppingcartcontainer.classList.contains("inactive");

    if (!isshoppingcartcontainerClosed) {
        shoppingcartcontainer.classList.add("inactive");
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoshoppingcartcontainer () {
    const isMobileMenuOpenClosed = mobileMenu.classList.contains("inactive");
    
    if (!isMobileMenuOpenClosed) {
        mobileMenu.classList.add("inactive");
    }
    shoppingcartcontainer.classList.toggle("inactive");
}
function openProductDetailAside() {
    shoppingcartcontainer.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Pantalla",
    price: 220,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Pc",
    price: 600,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
  name: "Bike",
  price: 120,
  image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
  name: "Pantalla",
  price: 220,
  image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
  name: "Pc",
  price: 600,
  image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

      for (product of productList) {
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
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
      }
      