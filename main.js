const $ = (r) => document.querySelector(r);

const menuEmail = $(".navbar-email");
const shoppingCartBtn = $(".navbar-shopping-cart");
const burgerMenu = $(".menu");
const desktopMenu = $(".desktop-menu");
const productDetail = $(".product-detail");
const mobileMenu = $(".mobile-menu");
const cardsContainer = $(".cards-container");

menuEmail.addEventListener("click", () => {
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
});
shoppingCartBtn.addEventListener("click", () => {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetail.classList.toggle("inactive");
});
burgerMenu.addEventListener("click", () => {
  productDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
});

const productList = [];

function productPushElements(name, price, img) {
  productList.push({
    name: name,
    price: price,
    img: img,
  });
}

productPushElements(
  "Bike",
  120,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

productPushElements(
  "Boke",
  150,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

productPushElements(
  "Buke",
  100,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

productPushElements(
  "Beke",
  170,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

productPushElements(
  "Bake",
  190,
  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
);

function renderProducts(arr) {
  const parser = new DOMParser();
  for (product of arr) {
    const divProduct = `<div class="product-card">
    <img src="${product.img}" alt="">
    <div class="product-info">
      <div>
        <p>$${product.price}</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>`;

    const doc = parser.parseFromString(divProduct, "text/html");
    const productCard = doc.querySelector(".product-card");
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList)