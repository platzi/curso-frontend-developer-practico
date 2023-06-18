const user_menu = document.querySelector(".user-menu");
const email = document.querySelector(".navbar-email a");

const mobile_menu = document.querySelector(".mobile-menu");
const icon_menu = document.querySelector(".menu");

const shopping_car = document.querySelector(".navbar-shopping-cart");
const products_car = document.querySelector(".products-car");
const return_products_car = document.querySelector(".title-container img");

const productDetailContainer = document.querySelector(".product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

email.addEventListener("click", toggleDesktopUser);
icon_menu.addEventListener("click", toggleMobileMenu);

shopping_car.addEventListener("click", toggleProductsCar);
return_products_car.addEventListener("click", toggleProductsCar);

productDetailClose.addEventListener("click", closeProductDetailAside);

function toggleDesktopUser(event) {
  event.preventDefault();
  if (!products_car.classList.contains("inactive")) {
    products_car.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
  user_menu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!products_car.classList.contains("inactive")) {
    products_car.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
  mobile_menu.classList.toggle("inactive");
}

function toggleProductsCar() {
  if (!mobile_menu.classList.contains("inactive")) {
    mobile_menu.classList.add("inactive");
  }
  if (!user_menu.classList.contains("inactive")) {
    user_menu.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
  products_car.classList.toggle("inactive");
}

function openProductDetailAside() {
  productDetailContainer.classList.remove("inactive");
  if (!mobile_menu.classList.contains("inactive")) {
    mobile_menu.classList.add("inactive");
  }
  if (!user_menu.classList.contains("inactive")) {
    user_menu.classList.add("inactive");
  }
  if (!products_car.classList.contains("inactive")) {
    products_car.classList.add("inactive");
  }
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

// Products Cards
const productsList = [];
productsList.push({
  name: "Bike",
  precio: 130,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "Pantalla",
  precio: 210,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "Llanta",
  precio: 80,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

{
  /* <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> */
}

const cardsContainer = document.querySelector(".cards-container");

renderProducts(productsList);

function renderProducts(productsList) {
  for (product of productsList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    cardsContainer.append(productCard);

    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", product.image);
    productCard.append(imageProduct);

    imageProduct.addEventListener("click", openProductDetailAside);

    const productoInfo = document.createElement("div");
    productoInfo.classList.add("product-info");
    productCard.append(productoInfo);

    const productoInfoDiv = document.createElement("div");
    productoInfo.append(productoInfoDiv);
    const productoInfoDivPrice = document.createElement("p");

    const productoInfoDivName = document.createElement("p");
    productoInfoDiv.append(productoInfoDivPrice, productoInfoDivName);

    productoInfoDivPrice.innerText = "$" + product.precio;
    productoInfoDivName.innerHTML = product.name;

    const figure_product = document.createElement("figure");
    const img_shopping_car = document.createElement("img");
    img_shopping_car.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productoInfo.append(figure_product);
    figure_product.append(img_shopping_car);
  }
}
