const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailcontainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

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
  closeProductDetailAside()
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isProductDetailcontainer = productDetailcontainer.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  if (!isProductDetailcontainer) {
    productDetailcontainer.classList.add('inactive');
  }
  console.log("click")
  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  Image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2016/08/28/00/57/tv-1625228_1280.jpg",
});
productList.push({
  name: "Computadora",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2014/05/05/16/09/tablet-338299_640.jpg",
});
productList.push({
  name: "Refrigerador",
  price: 1000,
  Image:
    "https://cdn.pixabay.com/photo/2016/10/24/21/03/appliance-1767311_640.jpg",
});
productList.push({
  name: "Cafetera",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2012/04/14/14/46/percolator-34180_640.png",
});
productList.push({
  name: "Microonda",
  price: 220,
  Image: "https://cdn.pixabay.com/photo/2012/04/11/17/29/microwave-29056_640.png",
});
productList.push({
  name: "Licuadora",
  price: 120,
  Image:
    "https://cdn.pixabay.com/photo/2011/12/05/14/51/blender-10935_640.jpg",
});
productList.push({
  name: "Cafetera",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2012/04/14/14/46/percolator-34180_640.png",
});
productList.push({
  name: "Sarten",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2014/12/02/14/50/pan-554072_640.jpg",
});
productList.push({
  name: "Bike",
  price: 120,
  Image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2016/08/28/00/57/tv-1625228_1280.jpg",
});
productList.push({
  name: "Computadora",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2014/05/05/16/09/tablet-338299_640.jpg",
});
productList.push({
  name: "Refrigerador",
  price: 1000,
  Image:
    "https://cdn.pixabay.com/photo/2016/10/24/21/03/appliance-1767311_640.jpg",
});
productList.push({
  name: "Cafetera",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2012/04/14/14/46/percolator-34180_640.png",
});
productList.push({
  name: "Microonda",
  price: 220,
  Image: "https://cdn.pixabay.com/photo/2012/04/11/17/29/microwave-29056_640.png",
});
productList.push({
  name: "Licuadora",
  price: 120,
  Image:
    "https://cdn.pixabay.com/photo/2011/12/05/14/51/blender-10935_640.jpg",
});
productList.push({
  name: "Cafetera",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2012/04/14/14/46/percolator-34180_640.png",
});
productList.push({
  name: "Sarten",
  price: 120,
  Image: "https://cdn.pixabay.com/photo/2014/12/02/14/50/pan-554072_640.jpg",
});
/*
<div class="product-card">
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
</div>
*/

//2 formas
//forma 01
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
    cardsContainer.appendChild(productCard);
  }
}
//renderProducts(productList);

//forma 01
function mostrarProductos(lista, contenedor) {
  for (product of lista) {
    const htmlContenedor = `<div class="product-card">
            <img src="${product.Image}" alt="" onclick="openProductDetailAside()">
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
    contenedor.innerHTML += htmlContenedor;

  }
}

mostrarProductos(productList, cardsContainer);

function openProductDetailAside(){
  const isshoppingCartContainer = shoppingCartContainer.classList.contains("inactive");
  if (!isshoppingCartContainer) {
    shoppingCartContainer.classList.add('inactive');
  }
  productDetailcontainer.classList.remove("inactive");
}

function closeProductDetailAside(){
  productDetailcontainer.classList.add("inactive");
}
