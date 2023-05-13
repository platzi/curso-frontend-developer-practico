const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamburger = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const closeButtom = document.querySelector(".product-detail-close");
const AsidePanelDetail = document.querySelector(".product-detail");
const containerCard = document.querySelector(".cards-container");
const productDetailAsideConstainer = document.querySelector(".product-detail-right");

mail.addEventListener("click", unHiddenDesktopMenu);
menuHamburger.addEventListener("click", showMenuMobile);
cartIcon.addEventListener("click", showAsidePanel);
closeButtom.addEventListener("click", closeProductDetailAside);


function unHiddenDesktopMenu() {
  const isAsidePanelClosed = AsidePanelDetail.classList.contains("inactive");
  if (!isAsidePanelClosed) {
    AsidePanelDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function showMenuMobile() {
  const isAsidePanelClosed = AsidePanelDetail.classList.contains("inactive");
  if (!isAsidePanelClosed) {
    AsidePanelDetail.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function showAsidePanel() {



  // Si el Menu de mobile esta abierto lo cerramos
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  // Si el aside de product-detail-right esta abierto lo cerramos
  const isProDetailRightClosed =
    productDetailAsideConstainer.classList.contains("inactive");
  if (!isProDetailRightClosed) {
    productDetailAsideConstainer.classList.add("inactive");
  }
  AsidePanelDetail.classList.toggle("inactive");



}


function closeProductDetailAside() {
  productDetailAsideConstainer.classList.add("inactive");
}

const productList = [];
productList.push({
  dataId: 1,
  name: "  Keyboard 65% Black RGB Blue Gamer",
  price: 250,
  image:
    "https://preview.redd.it/2rpowbo5jhua1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=68dcf9a85e643770d7514229f0299b9a8395ff17",
});

productList.push({
  dataId: 2,
  name: "KB 65% White Letters Japanese",
  price: 1250,
  image:
    "https://preview.redd.it/xe7lf2lvqhua1.jpg?width=3394&format=pjpg&auto=webp&v=enabled&s=773d2ca2cac05e64af6d31d070e55cbfae287be8",
});

productList.push({
  dataId: 3,
  name: "Keyboard 60% with White old Color",
  price: 550,
  image:
    "https://preview.redd.it/hzp1o72q9fua1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=437d784c478cb17ca1354f867a9f1cc79a6488ed",
});

productList.push({
  dataId: 4,
  name: "Keyboard Full-Sized White old Japanese Letters",
  price: 450,
  image:
    "https://preview.redd.it/8jlqs8qgaaua1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=d5688ef9e3f37e1059fbe1e23235eaad35859e18",
});

productList.push({
  dataId: 5,
  name: "Keyboard 60 Yellow and Black",
  price: 110,
  image:
    "https://preview.redd.it/bydj50hxo1xa1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=1709874a23e22cd416864f3a15f0a2743c36e11d",
});

productList.push({
  dataId: 6,
  name: "Keyboard 65 Colorful Duck",
  price: 220,
  image:
    "https://preview.redd.it/7dzd1qwmgywa1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=b01c6f4f0ddc3ba35197f8ad0a96ff5ed3656ec1",
});

productList.push({
  dataId: 7,
  name: "Keyboard 65 Black with purple light",
  price: 400,
  image:
    "https://preview.redd.it/nqbva5ahezwa1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=f9b46bd9ac0bd4d589636b3b4ccb6c68c789c726",
});

productList.push({
  dataId: 8,
  name: "Keyboard 65 White with Green Transparent",
  price: 1000,
  image:
    "https://preview.redd.it/2gnipisoxwwa1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=36caa6c362db15c9a23265239368393445422367",
});

productList.push({
  dataId: 9,
  name: "Keyboard 65 White Honey",
  price:700 ,
  image:
    "https://preview.redd.it/al9050596xk61.jpg?width=960&crop=smart&auto=webp&v=enabled&s=feff9789f982803f64b7859bd7f8991f57d76ec5",
});

productList.push({
  dataId: 10,
  name: "Keyboard 65 White Minimalistic",
  price: 300,
  image:
    "https://preview.redd.it/ojx8y30duj061.jpg?width=960&crop=smart&auto=webp&v=enabled&s=d0854685ed956d235803cc5d1a36a39985ecff4c",
});


function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.addEventListener("click", () =>{

      AsidePanelDetail.classList.add("inactive");
      productDetailAsideConstainer.classList.remove("inactive");
      
      const productId = this.product.dataset.id;

      // Buscar la información del producto en el arreglo de productos
      const clickedProduct = productList.find(product => product.dataId === productId);
    
      // mostrar los valores del objeto en el aside
      productDetailAsideConstainer.innerHTML = `
        <h2>${clickedProduct.name}</h2>
        <p>Precio: ${clickedProduct.price}</p>
        <img src="${clickedProduct.image}" alt="${clickedProduct.name}">
      `;
    
      
    });

    const productImg = document.createElement("img");
    productImg.src = product.image;
    //""MANERA DEL CURSO"" img.setAttribute('src' ,product.image);

    

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

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    containerCard.appendChild(productCard);
  }
}

renderProducts(productList);
