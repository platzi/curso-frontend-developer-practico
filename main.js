const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuAmburgesa = document.querySelector(".menu");
const movileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");

/*.***Navbar desktop Menu*** */
menuEmail.addEventListener("click", toogleDesktopMenu);
/* *** Menu en movile *** */

menuAmburgesa.addEventListener("click", toogleMovileMenu);

/* ***** Carrito de compras***** */

menuCarritoIcon.addEventListener("click", toogleCarritoAside);

/* *********************** */
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

/* **************************** */
function toogleDesktopMenu() {
    const isAsiceClose = shoppingCartContainer.classList.contains("inactive");
    const isProductDetailContainer =
        productDetailContainer.classList.contains("inactive");

    if (!isAsiceClose) {
        shoppingCartContainer.classList.add("inactive");
    }
    if (!isProductDetailContainer) {
        productDetailContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toogleMovileMenu() {
    const isAsiceClose = shoppingCartContainer.classList.contains("inactive");

    if (!isAsiceClose) {
        shoppingCartContainer.classList.add("inactive");
    }
    closeProductDetailAside();
    movileMenu.classList.toggle("inactive");
}

function toogleCarritoAside() {
    const isMovilMenuClose = movileMenu.classList.contains("inactive");
    const isDesktopMenu = desktopMenu.classList.contains("inactive");

    const isProductDetailContainer =
        productDetailContainer.classList.contains("inactive");

    if (!isDesktopMenu) {
        desktopMenu.classList.add("inactive");
    }

    if (!isMovilMenuClose) {
        movileMenu.classList.add("inactive");
    }
    if (!isProductDetailContainer) {
        productDetailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}
/* ***Lista de Productos*** */

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "CPU",
    price: 920,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*   <div class="product-card">
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
            </div>  */
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const productImg = document.createElement("img");
        //product = (name, precio, image)-> product.image
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);

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
renderProducts(productList);
