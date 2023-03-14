const navbarEmail = document.querySelector(".navbar-email");
const userMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const burguerMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", togglerUserMenu);

burguerIcon.addEventListener("click", togglerBurguerMenu);

cartIcon.addEventListener("click", togglerCartDetail);

// function togglerUserMenu() {
//   const isCartDetailClosed = cartDetail.classList.contains("inactive");

//   if (!isCartDetailClosed) {
//     cartDetail.classList.add("inactive");
//   }

//   userMenu.classList.toggle("inactive");
// }

// function togglerBurguerMenu() {
//   const isCartDetailClosed = cartDetail.classList.contains("inactive");

//   if (!isCartDetailClosed) {
//     cartDetail.classList.add("inactive");
//   }

//   burguerMenu.classList.toggle("inactive");
// }

// function togglerCartDetail() {
//   const isBurguerMenuClosed = burguerMenu.classList.contains("inactive");
//   const isUserMenuClosed = userMenu.classList.contains("inactive");

//   if (!isBurguerMenuClosed) {
//     burguerMenu.classList.add("inactive");
//   }

//   if (!isUserMenuClosed) {
//     userMenu.classList.add("inactive");
//   }

//   cartDetail.classList.toggle("inactive");
// }

/*SOLUCION SIMPLIFICADA*/

function togglerUserMenu() {
  cartDetail.classList.add("inactive");

  userMenu.classList.toggle("inactive");
}

function togglerCartDetail() {
  userMenu.classList.add("inactive");
  burguerMenu.classList.add("inactive");

  cartDetail.classList.toggle("inactive");
}

function togglerBurguerMenu() {
  cartDetail.classList.add("inactive");

  burguerMenu.classList.toggle("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 12700,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bicycle helmet",
  price: 1200,
  image:
    "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
productList.push({
  name: "Bicycle helmet",
  price: 1600,
  image: "https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg",
});
productList.push({
  name: "Bicycle helmet",
  price: 1500,
  image:
    "https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
productList.push({
  name: "Seat",
  price: 300,
  image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
});
productList.push({
  name: "Tennis Montain Bike",
  price: 2200,
  image:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
});
productList.push({
  name: "Sunglasses",
  price: 800,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
});
productList.push({
  name: "Sunglasses",
  price: 600,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603",
});
productList.push({
  name: "Bicycle seat bag",
  price: 876,
  image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
});

createCards(productList);

function createCards(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDescription = document.createElement("div");
    productInfoDescription.classList.add("product-info-description");

    const priceProduct = document.createElement("p");
    priceProduct.append(`$ ${product.price}`);

    const nameProduct = document.createElement("p");
    nameProduct.append(product.name);

    productInfoDescription.appendChild(priceProduct);
    productInfoDescription.appendChild(nameProduct);

    const figureCartIcon = document.createElement("figure");
    const cartIcon = document.createElement("img");
    cartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

    figureCartIcon.append(cartIcon);

    productInfo.append(productInfoDescription);
    productInfo.append(figureCartIcon);

    productCard.append(imgProduct);
    productCard.append(productInfo);

    cardsContainer.append(productCard);
  }
}
