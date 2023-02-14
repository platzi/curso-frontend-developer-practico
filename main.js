const menuEMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburIcon = document.querySelector(".menu");
const productDetailCloseIcon =document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector ("#product-detail");
const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

menuEMail.addEventListener("click",toogleDesktopMenu);
menuHamburIcon.addEventListener("click",tooglemobileMenu);
menuCarrito.addEventListener("click",toogleCarrito);
productDetailCloseIcon.addEventListener("click", closeopenProductDetail);

function toogleDesktopMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");   
    }
function tooglemobileMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    closeopenProductDetail();
    mobileMenu.classList.toggle("inactive");
}
function toogleCarrito(){
    const isMobileClosed = mobileMenu.classList.contains("inactive");
  
    if (!isMobileClosed) {mobileMenu.classList.add("inactive");}
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");

}
function openProductDetail(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
    }
function closeopenProductDetail (){
    productDetailContainer.classList.add("inactive");
}



const listaProductos = [];
listaProductos.push({
    name: "Chuli Classic",
    precio: 3,
    imagen: "Fotos/Chulis (1).jpeg",
});
listaProductos.push({
    name: "Chuli Guitarrista",
    precio: 5,
    imagen: "Fotos/Chulis (2).jpeg",
});
listaProductos.push({
    name: "Chuliando",
    precio: 10,
    imagen: "Fotos/Chulis (4).jpeg",
});
listaProductos.push({
    name: "Chuli Magic",
    precio: 25,
    imagen: "Fotos/Chulis (7).jpeg",
});
listaProductos.push({
    name: "Chuli Simple",
    precio: 50,
    imagen: "Fotos/Chulis (14).jpeg",
});
listaProductos.push({
    name: "Chuli Gavilan",
    precio: 55,
    imagen: "Fotos/Chulis (12).jpeg",
});
listaProductos.push({
    name: "Chuli Recargado",
    precio: 100,
    imagen: "Fotos/Chulis (23).jpeg",
});
listaProductos.push({
    name: "Chulo",
    precio: 1,
    imagen: "Fotos/Chulis (19).jpeg",
});
listaProductos.push({
    name: "Chuli Barrial",
    precio: 75,
    imagen: "Fotos/Chulis (5).jpeg",
});
listaProductos.push({
    name: "Chuli Veraniego",
    precio: 65,
    imagen: "Fotos/Chulis (10).jpeg",
});

function renderProductos(arr){
for (producto of arr){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imgagen = document.createElement("img");
    imgagen.setAttribute("src", producto.imagen);
    imgagen.addEventListener("click", openProductDetail);


    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productprecio = document.createElement("p");
    productprecio.innerText = producto.precio + " Siestas";

    const productName = document.createElement("p");
    productName.innerText = producto.name;

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfoFigure.appendChild(productImgCart);


    productInfoDiv.appendChild(productprecio);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(imgagen);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}}
renderProductos(listaProductos);
