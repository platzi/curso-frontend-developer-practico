const desktopMenu = document.querySelector("#desktop-menu");
const navbarEmail = document.querySelector("#navbar-email");
const menuResponsive = document.querySelector("#menu");
const mobileMenu = document.querySelector("#mobile-menu");
const navbarShoppingCart = document.querySelector("#navbar-shopping-cart");
const navbarProductDetail = document.querySelector("#product-detail");
const cardsContainer = document.querySelector(".cards-container");
const detailProductMain = document.querySelector('#product-detail-main');
const closeDetailProduct = document.querySelector('#product-detail-main-close');

navbarEmail.addEventListener("click", () => {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (isDesktopMenuClosed) {
    mobileMenu.classList.add("inactive");
    navbarProductDetail.classList.add("inactive");
    detailProductMain.classList.add('inactive');
  }

  desktopMenu.classList.toggle("inactive");
});

menuResponsive.addEventListener("click", () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (isMobileMenuClosed) {
    navbarProductDetail.classList.add("inactive");
    detailProductMain.classList.add('inactive');
  }

  mobileMenu.classList.toggle("inactive");
});

navbarShoppingCart.addEventListener("click", () => {
  const isNavbarProductDetailClosed =
    navbarProductDetail.classList.contains("inactive");
  const isNavbarEmailClosed = desktopMenu.classList.contains("inactive");

  if (isNavbarProductDetailClosed || isNavbarEmailClosed) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    detailProductMain.classList.add('inactive');
  }

  navbarProductDetail.classList.toggle("inactive");
});

closeDetailProduct.addEventListener('click', () => {
    detailProductMain.classList.add('inactive');
})

// detailProductMain.addEventListener("click", () => {
//     const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  
//     if (isMobileMenuClosed) {
//       navbarProductDetail.classList.add("inactive");
//       detailProductMain.classList.add('inactive');
//     }
  
//     mobileMenu.classList.toggle("inactive");
//   });


function openDetailProduct (){
    detailProductMain.classList.remove('inactive');
  }

const productList = [];

productList.push(
  {
    id: 1,
    name: "Bike",
    price: "120,000$",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id:2,
    name: "Bike",
    price: "120,000$",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }
);

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
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
      productImgCart.addEventListener("click", openDetailProduct);

      productInfoFigure.appendChild(productImgCart);
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
      cardsContainer.appendChild(productCard);
    }
  }
  renderProducts(productList);

  
