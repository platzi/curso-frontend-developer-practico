const menuEmail = document.querySelector(".navbar-email");
const menuBurger = document.querySelector(".menu");
const cartList = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const productDetailImg = document.querySelector("#productImg");
const productDetailName = document.querySelector("#productDetailName");
const productDetailPrice = document.querySelector("#productDetailPrice");
const productDetailDesc = document.querySelector("#productDetailDesc");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
cartList.addEventListener("click", toggleCartList);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}
function toggleCartList() {
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.add("inactive");
}

function openProductDetailAside(prod) {
  console.log(prod);
  productDetailImg.setAttribute("src", prod.image);

  productDetailPrice.innerText = "$" + prod.price;
  productDetailName.innerText = prod.name;
  productDetailDesc.innerText = prod.description;
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [
  {
    name: "Bicicleta",
    price: "120.00",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Bicicleta económica de altas prestaciones",
  },
  {
    name: "Cellphone",
    price: "520.00",
    image:
      "https://www.fda.gov/files/styles/main_image_medium/public/smartphone.jpg?itok=Iqc_wjqn",
    description: "Teléfono nueva generación, wifi, bluetoot, dual-sim",
  },
  {
    name: "Pantalla",
    price: "220.00",
    image:
      "https://oasis.opstatics.com/content/dam/oasis/page/frankfurt/27-share.jpg",
    description:
      "Pantalla de alta definición 4k a 60hz, orientación vertical u horizontal",
  },
  {
    name: "Computadora",
    price: "620.00",
    image:
      "https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2..v1656623239.jpg",
    description: "Gamer con tajeta de video de 4gb, octacore, RGB",
  },
  {
    name: "Silla de escritorio",
    price: "80.00",
    image:
      "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/11/silla-escritorio-2866991.jpg",
    description: "Silla ergonómica y cómoda para trabajar en el escritorio",
  },
  {
    name: "Microondas",
    price: "120.00",
    image:
      "https://m.economictimes.com/thumb/msid-95457328,width-1600,height-860,resizemode-4,imgsize-78912/mmm-.jpg",
    description: "Microondas de alta capacidad para calentar comidas",
  },
  {
    name: "Refrigerador",
    price: "400.00",
    image:
      "https://www.cnet.com/a/img/hub/2017/05/25/d1df7091-3fc7-4fad-9a9f-2720cff6511c/samsung-rf28k9380sg-refrigerator-product-photos-13.jpg",
    description: "Refrigerador con capacidad para guardar alimentos frescos",
  },
  {
    name: "Lámpara de mesa",
    price: "30.00",
    image:
      "https://www.sukasa.com/227063-medium_default/lampara-de-mesa-con-pantalla-negra.jpg",
    description: "Lámpara de mesa con ajuste de intensidad de luz",
  },
  {
    name: "Aspiradora",
    price: "80.00",
    image:
      "https://t1.uc.ltmcdn.com/es/posts/5/5/4/como_escoger_una_aspiradora_17455_600_square.jpg",
    description: "Aspiradora con capacidad para recoger polvo y suciedad",
  },
  {
    name: "Plancha de ropa",
    price: "50.00",
    image:
      "https://imagenes.elpais.com/resizer/Q18bCZiO8zfX1G0UfkJ7sDQuHm8=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/NOZFKWL52FGWLPXIXZIDLPDV5Q.png",
    description: "Plancha con tecnología antiarrugas y vaporización",
  },
  {
    name: "Estufa",
    price: "200.00",
    image:
      "https://images.homify.com/image/upload/c_scale,h_375,w_500/v1578936748/p/photo/image/3315842/2.jpg",
    description: "Estufa de gas con 4 quemadores y horno",
  },
  {
    name: "Lavadora",
    price: "350.00",
    image:
      "https://img.blogs.es/tecnologialg/wp-content/uploads/2018/10/WiFi-Lavadora-1080x675.jpg",
    description: "Lavadora con capacidad para lavar grandes cargas de ropa",
  },
  {
    name: "Toallas de baño",
    price: "20.00",
    image:
      "https://www.sukasa.com/240146-medium_default/toalla-de-bano-solido-nora-cannon.jpg",
    description: "Toallas de baño suaves y absorbentes",
  },
  {
    name: "Cortinas",
    price: "30.00",
    image: "https://m.media-amazon.com/images/I/41mjBnBABlS._SL500_.jpg",
    description: "Cortinas con diseños modernos y ajuste de luz",
  },
];

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener(
      "click",
      (function (p) {
        return function () {
          openProductDetailAside(p);
        };
      })(product)
    );

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

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
