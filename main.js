const menuEmail = document.querySelector(".navbar-email");
const burguerMenu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() { //no podemos mostrar a la vez menu shoppingCartContainer y menu mobile, asi que:
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoshoppingCartContainer() { //no podemos mostrar a la vez menu shoppingCartContainer y menu mobile, asi que:
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive"); // comprueba si menu mobile está cerrado
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    
    if (!isMobileMenuClosed) { // si mobileMenu no está cerrado lo cierra
        mobileMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive"); // como ya hemos cerrado el mobile menu actúa nuestro shoppingCartContainer
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive"); // en este caso nos vale simplemente así porque esta funcion solo abre, no abre y cierra el elemento
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Bottle",
    price: 12,
    image: "https://images.pexels.com/photos/12913573/pexels-photo-12913573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Jacket",
    price: 60,
    image: "https://images.pexels.com/photos/13033819/pexels-photo-13033819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Summer dress",
    price: 40,
    image: "https://images.pexels.com/photos/13014413/pexels-photo-13014413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Decorative flowers",
    price: 10,
    image: "https://images.pexels.com/photos/11858609/pexels-photo-11858609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Motorbike",
    price: 1500,
    image: "https://images.pexels.com/photos/10049163/pexels-photo-10049163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Goat",
    price: 200,
    image: "https://images.pexels.com/photos/12973509/pexels-photo-12973509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Top and skirt",
    price: 75,
    image: "https://images.pexels.com/photos/12823102/pexels-photo-12823102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Dress",
    price: 55,
    image: "https://images.pexels.com/photos/12652637/pexels-photo-12652637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Candles",
    price: 15,
    image: "https://images.pexels.com/photos/12696725/pexels-photo-12696725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "A weird breakfast",
    price: 10,
    image: "https://images.pexels.com/photos/7631262/pexels-photo-7631262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Dress",
    price: 75,
    image: "https://images.pexels.com/photos/12763989/pexels-photo-12763989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Hat",
    price: 8,
    image: "https://images.pexels.com/photos/12720385/pexels-photo-12720385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Shoes",
    price: 25,
    image: "https://images.pexels.com/photos/12750409/pexels-photo-12750409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Flower in a cup",
    price: 9,
    image: "https://images.pexels.com/photos/12567363/pexels-photo-12567363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Reflex camera",
    price: 450,
    image: "https://images.pexels.com/photos/10592693/pexels-photo-10592693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "Boots",
    price: 45,
    image: "https://images.pexels.com/photos/11762028/pexels-photo-11762028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

function renderProducts(arr) {
    for (product of arr) { // si usamos for in nos trae el índice
        const productCard = document.createElement("div"); // replicamos la estructura html (abajo está comentada)
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image); // para la imagen usamos la declarada en cada objeto de nuestra lista
        productImg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice); // con appendChild colocamos cada cosa dentro de su contenedor
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
    /*<div class="product-card">
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
        </div>*/
    }
}

renderProducts(productList);
