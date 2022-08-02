const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//const inactive = document.querySelector('.inactive')
const menuHamIcon = document.querySelector(".menu");
const mobileMEnu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shopingCartContainer = document.querySelector("#shoping-cart-container");

const productDetail = document.querySelector("#product-detail");

navbarEmail.addEventListener("click", function () {
  desktopMenu.classList.toggle("inactive");
});
menuHamIcon.addEventListener("click", function () {
  productDetail.classList.add("inactive");
  shopingCartContainer.classList.add("inactive");
  mobileMEnu.classList.toggle("inactive");

  // let isshopingCartContainerClose = shopingCartContainer.classList.contains('inactive')
  // if(!isshopingCartContainerClose) shopingCartContainer.classList.add('inactive')
  // mobileMEnu.classList.toggle('inactive')
});

menuCarritoIcon.addEventListener("click", function () {
  mobileMEnu.classList.add("inactive");
  productDetail.classList.add("inactive");
  shopingCartContainer.classList.toggle("inactive");
  // let mobileMenuClose = mobileMEnu.classList.contains('inactive')
  // if(!mobileMenuClose)mobileMEnu.classList.add('inactive')
  // shopingCartContainer.classList.toggle('inactive')
});

const productList = [
  {
    name: "skate",
    price: 50,
    img: "https://bit.ly/3vVvQUD",
  },
  {
    name: "Bike",
    price: 120,
    img: "https://bit.ly/3BzhJHW",
  },
  {
    name: "Roller",
    price: 80,
    img: "https://bit.ly/3BAqLEH",
  },
];

function renderProducts(arr) {
  for (product of arr) {
    const htmlCards = `
        <div class="product-card hover">
            <img id=${product.name} src=${product.img} alt="">
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

    const cardContainer = document.querySelector(".cards-container");
    cardContainer.innerHTML += htmlCards;
  }

  arr.forEach((e) => {
    console.log("num");

    let hola = document.getElementById(e.name);

    hola.addEventListener("click", function () {
      if (productDetail.classList.contains("inactive")) {
        shopingCartContainer.classList.add("inactive");
        mobileMEnu.classList.toggle("inactive");
        productDetail.classList.remove("inactive");

        const detalles = `
                    
                    <div class="product-detail-close">
                      <img src="./icons/icon_close.png" alt="close">
                    </div>
                    <img src=${e.img} alt="bike">
                    <div class="product-info">
                      <p>${e.price}</p>
                      <p>${e.name}</p>
                      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                      <button class="primary-button add-to-cart-button">
                        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                        Add to cart
                      </button>
                    </div>
                    
                    `;
        productDetail.innerHTML = detalles;
        const productDetailClose = document.querySelector(
          ".product-detail-close"
        );
        productDetailClose.addEventListener("click", () => {
          productDetail.classList.add("inactive");
        });
      } else {
      }
    });
  });
}

renderProducts(productList);
