const emailNavbar = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const menuCart = document.querySelector(".navbar-shopping-cart");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const productsList = [];

let classToToggle = "inactive";
let mobileMen = document.querySelector(".mobile-menu");
let shoppingCartContainer = document.querySelector("#shoppingCartContainer");

emailNavbar.addEventListener("click", changeVisibilityMenuEmail);
function changeVisibilityMenuEmail() {
  if (!menuDesktop.classList.toggle(classToToggle)) {
    //Each one of other elements that must be disabled when this one opens
    if (!shoppingCartContainer.classList.contains(classToToggle)) {
      shoppingCartContainer.classList.add(classToToggle);
    } else if (!productDetailContainer.classList.contains(classToToggle)) {
      productDetailContainer.classList.add(classToToggle);
    } else if (!mobileMen.classList.contains(classToToggle)) {
      mobileMen.classList.add(classToToggle);
    }
  }
}

menuMobileIcon.addEventListener("click", () => {
  if (!mobileMen.classList.toggle(classToToggle)) {
    //Each one of other elements that must be disabled when this one opens
    if (!shoppingCartContainer.classList.contains(classToToggle)) {
      shoppingCartContainer.classList.add(classToToggle);
    } else if (!productDetailContainer.classList.contains(classToToggle)) {
      productDetailContainer.classList.add(classToToggle);
    } else if (!menuDesktop.classList.contains(classToToggle)) {
      menuDesktop.classList.add(classToToggle);
    }
  }
});
menuCart.addEventListener("click", () => {
  if (!shoppingCartContainer.classList.toggle(classToToggle)) {
    //Each one of other elements that must be disabled when this one opens
    if (!mobileMen.classList.contains(classToToggle)) {
      mobileMen.classList.add(classToToggle);
    } else if (!productDetailContainer.classList.contains(classToToggle)) {
      productDetailContainer.classList.add(classToToggle);
    } else if (!menuDesktop.classList.contains(classToToggle)) {
      menuDesktop.classList.add(classToToggle);
    }
  }
});
productDetailCloseIcon.addEventListener("click", () => {
  if (!productDetailContainer.classList.contains(classToToggle)) {
    productDetailContainer.classList.add(classToToggle);
  }
});

productsList.push(
  {
    id: 1,
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Bike",
    description:
      "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
  },
  {
    id: 2,
    name: "Computer",
    price: 900,
    image:
      "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg",
    alt: "Computer",
    description: "Work anywhere",
  },
  {
    id: 3,
    name: "Skis",
    price: 450,
    image:
      "https://cdn.pixabay.com/photo/2017/12/15/09/32/cross-country-skiing-3020748_960_720.jpg",
    alt: "Skis",
    description: "Go outside and try them",
  },
  {
    id: 4,
    name: "Skateboard",
    price: 200,
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/07/43/skateboard-5221914_960_720.jpg",
    alt: "Skateboard",
    description: "For the adventurers",
  },
  {
    id: 5,
    name: "Roller skates",
    price: 230,
    image:
      "https://cdn.pixabay.com/photo/2016/12/17/09/01/sport-1913035_960_720.png",
    alt: "Roller skates",
    description: "Time to roll!",
  }
);

renderCardProducts(productsList);

function renderCardProducts(products) {
  for (product of products) {
    //Declarations
    const cardsContainer = document.querySelector(".cards-container");
    const cardProduct = document.createElement("div");
    const infoProduct = document.createElement("div");
    const infoProductPriceName = document.createElement("div");
    const imgProduct = document.createElement("img");
    const priceProduct = document.createElement("p");
    const nameProduct = document.createElement("p");
    const figureProduct = document.createElement("figure");
    const figureImgProduct = document.createElement("img");

    //Attributes
    cardProduct.classList.add("product-card");
    imgProduct.setAttribute("src", product.image);
    imgProduct.setAttribute("alt", product.alt);
    imgProduct.setAttribute("class", "product--img__class");
    imgProduct.setAttribute("id", `product--img__${product.id}`);
    imgProduct.addEventListener("click", showProduct, false);
    imgProduct.paramId = `product--img__${product.id}`;
    infoProduct.classList.add("product-info");
    priceProduct.innerText = `\$${product.price}`;
    nameProduct.innerText = `${product.name}`;
    figureImgProduct.setAttribute("src", "./icons/bt_add_to_cart.svg");
    infoProductPriceName.append(priceProduct, nameProduct);

    //Appends
    cardsContainer.appendChild(cardProduct);
    cardProduct.append(imgProduct, infoProduct);
    infoProduct.append(infoProductPriceName, figureProduct);
    infoProductPriceName.append(priceProduct, nameProduct);
    figureProduct.appendChild(figureImgProduct);
  }
}
function showProduct(e) {
  let id = e.currentTarget.paramId;
  if (id === undefined) return;

  let actualImg = document.querySelector(`#${id}`);
  console.log(actualImg);
  let product = productsList.find(
    (product) => `product--img__${product.id}` == actualImg.id
  );

  productDetailContainer.classList.remove(classToToggle);

  //Each one of other elements that must be disabled when this one opens
  if (!mobileMen.classList.contains(classToToggle)) {
    mobileMen.classList.add(classToToggle);
  } else if (!shoppingCartContainer.classList.contains(classToToggle)) {
    shoppingCartContainer.classList.add(classToToggle);
  } else if (!menuDesktop.classList.contains(classToToggle)) {
    menuDesktop.classList.add(classToToggle);
  }

  document
    .getElementById("product-detail--img")
    .setAttribute("src", `${product.image}`);
  document
    .getElementById("product-detail--img")
    .setAttribute("alt", `${product.alt}`);
  document.getElementById(
    "product-detail--p__price"
  ).innerText = `$${product.price}`;
  document.getElementById(
    "product-detail--p__name"
  ).innerText = `${product.name}`;
  document.getElementById(
    "product-detail--p__description"
  ).innerText = `${product.description}`;
}
