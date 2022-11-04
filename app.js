let DesktoMenu = document.querySelector(".desktop-menu");
let Email = document.querySelector(".navbar-email");
let LogoMenu = document.querySelector(".menu");
let MobileMenu = document.querySelector(".mobile-menu");
let ShoppingCart = document.querySelector(".navbar-shopping-cart");
let CartProducts = document.querySelector(".products-cart");
let CardsContainer = document.querySelector(".cards-container");
let OpenProductDetail = document.querySelector(".product-detail");
let Productdetailclose = document.querySelector(".product-detail-close");

Email.addEventListener("click", ShowMenuDesktop);
LogoMenu.addEventListener("click", ShowMenuMobile);
ShoppingCart.addEventListener("click", ShowShoppingCart);
Productdetailclose.addEventListener("click", CloseProductDetail);

function ShowMenuDesktop(){
    DesktoMenu.classList.toggle("on-off-desktop_menu");
    CartProducts.classList.add("on-off-order_cart");
    OpenProductDetail.classList.add("on-off-product_detail");
}

function ShowMenuMobile(){
    MobileMenu.classList.toggle("on-off-mobile_menu");
    CartProducts.classList.add("on-off-order_cart");
    OpenProductDetail.classList.add("on-off-product_detail");
}

function ShowShoppingCart(){
    CartProducts.classList.toggle("on-off-order_cart");
    MobileMenu.classList.add("on-off-mobile_menu");
    DesktoMenu.classList.add("on-off-desktop_menu");
    OpenProductDetail.classList.add("on-off-product_detail");
}

function ShowProductDetail(){
    OpenProductDetail.classList.remove("on-off-product_detail");
    CartProducts.classList.add("on-off-order_cart");
    DesktoMenu.classList.add("on-off-desktop_menu");
    MobileMenu.classList.add("on-off-mobile_menu");
}

function CloseProductDetail(){
    OpenProductDetail.classList.add("on-off-product_detail");
}

let producList = [];

producList.push({
    name: "Bike",
    precio: 100,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

producList.push({
    name: "Bike",
    precio: 180,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

producList.push({
    name: "Bike",
    precio: 150,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

producList.push({
    name: "Bike",
    precio: 150,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

producList.push({
    name: "Bike",
    precio: 150,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

producList.push({
    name: "Bike",
    precio: 150,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

producList.push({
    name: "Bike",
    precio: 150,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

for (let i = 0; i<producList.length; i++) {

    let productcart = document.createElement("div");
    productcart.classList.add("product-card");

    let img = document.createElement("img");
    img.setAttribute("src", producList[i].imagen);
    img.addEventListener("click", ShowProductDetail);

    let productinfo = document.createElement("div");

    productinfo.classList.add("product-info");
    let productinfodiv = document.createElement("div");
    let productprecio = document.createElement("p");
    productprecio.innerText = "$ " + producList[i].precio;
    let productname = document.createElement("p");
    productname.innerText = producList[i].name;

    let figure = document.createElement("figure");
    let imgcart = document.createElement("img");
    imgcart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    CardsContainer.append(productcart);
    productcart.append(img, productinfo);
    productinfo.append(productinfodiv,figure)
    productinfodiv.append(productname,productprecio);
    figure.append(imgcart);
}
