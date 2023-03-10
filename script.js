const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container")
const productDetailCloseIcon = document.querySelector(".product-detail-close")


//codigo para navbar lado derecho-perfil usuario.
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
// si carro de compras esta abierto, cierralo cuando de click al correo usuario.
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

//codigo para icono hamburguesa lado izquierdo.
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
//si carro de compras esta abierto, cierralo cuando de click en menu hamburguesa.
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

//cuando le demos click al icono hamburgues, cierra lo que este abierto.
    closeProductDetailAside()

    mobileMenu.classList.toggle("inactive");
}

//codigo para el carro de compras.
menuCarIcon.addEventListener("click", toggleCarShopping);

function toggleCarShopping() {
//si menu hamburguesa esta abierto, cierralo cuando de click en carro de compras.
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

// si correo usuario esta abierto, cierralo cuando de click al carro de compras.
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

//si la imagen esta abierta, cierrala cuando de click en carro de compras.
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

//codigo para el click de cada imagen que queremos ver.
function openProductDetailAside() {

//este codigo shoppingCart.... abre el carro de compras y cierra la imagen.
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

//codigo para cerrar la imagen previamente abierta.
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}


const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Monitor pc",
    price: 800,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Lamparas",
    price: 450,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "computadores",
    price: 600,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "escritorios",
    price: 230,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "mouse",
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "teclado",
    price: 110,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "celulares",
    price: 1450,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// encapsulo el for en una funcion para poder llamarla luego mas facil
function renderProducts(arr){
for(product of arr) {
    // se crea un contenedor de las cards de imagen.
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");


    // product = {name, price, image} -> product.image
    const productImg = document.createElement("img");
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

// llamo la funcion y el array que necesito ver
renderProducts(productList);