const btnOpenMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const btnMenMobile = document.querySelector("#btnMenMobile");
const mobileMenu = document.querySelector(".mobile-menu");
const btnCartIcon = document.querySelector("#btnCartIcon");
const cartProductDetails = document.querySelector("#cartProductDetails");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const btnCloseProductDetails = document.querySelector(".product-detail-close");
const closeCart = document.querySelector("#closeCart");

const productList = [];

function toggleShow(btn, elementToToggle, leaveEvent) {
  btn.addEventListener("click", () => {
    elementToToggle.classList.toggle("hidden");
  });

  if (leaveEvent) {
    elementToToggle.addEventListener("mouseleave", (e) => {
      elementToToggle.classList.add("hidden");
    });
  }
}

toggleShow(btnOpenMenu, desktopMenu, true);
toggleShow(btnMenMobile, mobileMenu, true);
toggleShow(btnCartIcon, cartProductDetails, true);
toggleShow(btnCloseProductDetails, productDetail);
toggleShow(closeCart, cartProductDetails, true);

function addProductToList(name, price, img, desc) {
  productList.push({
    name: name,
    price: price,
    img: img,
    desc: desc,
  });
}

function renderProduct(array) {
  let index = 0;
  for (product of array) {
    productNode = `
     <div --data-product-id="${index++}" class="product-card">
       <img src=${product.img} alt="">
       <div class="product-info">
         <div>
           <p>$${product.price}</p>
           <p>${product.name}</p>
         </div>
         <figure>
           <img src="./icons/bt_add_to_cart.svg" alt="">
         </figure>
       </div>
     </div>
    `;
    cardsContainer.innerHTML += productNode;
  }
}

function renderProductDetails(product) {
  let productDetailsInfo = document.querySelector(".product_details-info");
  productDetailsInfo.replaceChildren();

  let pPrice = document.createElement("p");
  pPrice.append(`$${product.price}`);
  let pName = document.createElement("p");
  pName.append(`${product.name}`);
  let pDescrip = document.createElement("p");
  pDescrip.append(`${product.desc}`);

  productDetailsInfo.append(pPrice, pName, pDescrip);
}

function openProduct() {
  let productId = document.querySelectorAll("[--data-product-id]");

  for (let i = 0; i < productId.length; i++) {
    productId[i].addEventListener("click", () => {
      renderProductDetails(productList[i]);
    });
    toggleShow(productId[i], productDetail,true);
  }
}

addProductToList(
  "Bike",
  120,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Lorem asddj  ahd asdsah dsad safaf safafsagf80afgsa09fag0f80sa"
);
addProductToList(
  "Coche",
  2000,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Lorem asddj  ahd asdsah dsad safaf safafsagf80afgsa09fag0f80sa"
);
addProductToList(
  "MotorBike",
  1200,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Lorem asddj  ahd asdsah dsad safaf safafsagf80afgsa09fag0f80sa"
);
addProductToList(
  "Cutter",
  20,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Lorem asddj  ahd asdsah dsad safaf safafsagf80afgsa09fag0f80sa"
);

renderProduct(productList);
openProduct();
