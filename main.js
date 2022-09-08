const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
    if (!aside.classList.contains("inactive")) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
    if (!aside.classList.contains("inactive")) {
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}
function toggleCartAside() {
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");
}
{
    /* <div class="product-card">
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
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
const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "bike",
    price: 300,
    image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "bike",
    price: 200,
    image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const divPrice = document.createElement("div");

        const price = document.createElement("p");
        price.innerText = "$" + product.price;

        const name = document.createElement("p");
        name.innerText = product.name;

        const figure = document.createElement("figure");

        const imgIcon = document.createElement("img");
        imgIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

        figure.appendChild(imgIcon);
        divPrice.appendChild(price);
        divPrice.appendChild(name);
        productInfo.appendChild(divPrice);
        productInfo.appendChild(figure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);