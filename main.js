const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://yuhmak.vteximg.com.br/arquivos/ids/157870/1C05243-000-1--1-.jpg",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://ekardegas.com/pub/media/catalog/product/cache/thumbnail/528x420/beff4985b56e3afdbeabfc89641a4582/w/w/ww1.png",
});
productList.push({
  name: "Notebook",
  price: 620,
  image:
    "https://s3-sa-east-1.amazonaws.com/saasargentina/nxdeksn9Q8ohmTwqoCaq/imagen",
});
productList.push({
  name: "Celular",
  price: 200,
  image:
    "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/feature/levant-feature---531473582?$FB_TYPE_A_MO_JPG$",
});
productList.push({
  name: "Moto",
  price: 700,
  image:
    "https://www.blogdecoches.net/wp-content/uploads/2017/06/Zanella-Ceccato-R150-2017-en-Argentina-Precio-Financiaci%C3%B3n-03.jpg",
});
productList.push({
  name: "Guitarra",
  price: 250,
  image:
    "https://blog.guitargear.com.mx/wp-content/uploads/2019/03/Taylor-300s.jpg",
});
productList.push({
  name: "Sillon",
  price: 400,
  image:
    "https://d2r9epyceweg5n.cloudfront.net/stores/001/684/404/products/saporitti-3-cuerpos-31-c2833ea6846890874c16347428686289-1024-1024.jpeg",
});
productList.push({
  name: "Auto",
  price: 990,
  image:
    "https://www.karvi.com.ar/blog/wp-content/uploads/2020/10/208II3-850x567.jpg",
});
productList.push({
  name: "Cocina",
  price: 120,
  image:
    "https://www.fussetti.com/1260-large_default/cocina-escorial-master-multigas.jpg",
});
productList.push({
  name: "Piscina",
  price: 500,
  image:
    "https://i0.wp.com/www.piscineria.com/wp-content/uploads/2018/06/membrana-pvc-liner-impermeabilicacion-y-reparaci%C3%B3n-de-piscinas-Piscineria-6.jpg?fit=1000%2C600&ssl=1",
});

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
    productPrice.innerHTML = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerHTML = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
