const menuMail = document.getElementById("menuMail");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamburgesa = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const shoppingCar = document.querySelector(".navbar-shopping-cart");
const order_detail = document.querySelector(".order-detail");
const product_detail = document.querySelector(".product-detail");
const productCard = document.querySelector(".product-card");
const productsContainer = document.querySelector(".cards-container");
const product_detail_close = document.querySelector(".product-detail-close");

// pantallla gris
const darker = document.querySelector(".darker")
//
class productGenerator {
    constructor({
        src = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name = "Productaso",
        price = 69,
    }) {
        this.name = name;
        this.price = price;
        this.src = src;
    }
    render(place) {
        const cardsContainer = document.createElement("div");
        cardsContainer.setAttribute("class", "cards-container");
        const productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");
        const productImg = document.createElement("img");
        productImg.setAttribute("src", this.src);
        productImg.setAttribute("alt", `${this.name}!!, que buen producto`);
        const productInfo = document.createElement("div");
        productInfo.setAttribute("class", "product-info");
        const productInfoDetail = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = `$${this.price}.00`;
        const productName = document.createElement("p");
        productName.innerText = `${this.name}`;
        const productIconContainer = document.createElement("figure");
        const productIcon = document.createElement("img");
        productIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
        // empaquetando todos los elementos
        productIconContainer.appendChild(productIcon);
        productInfoDetail.append(productPrice, productName);
        //...
        productInfo.append(productInfoDetail, productIconContainer);
        //..
        productCard.append(productImg, productInfo);
        productCard.addEventListener("click", openDetails);
        place.appendChild(productCard);
    }
}

//eventos
menuMail.addEventListener("click", toggleMenu);
menuHamburgesa.addEventListener("click", toggleMenuMobile);
shoppingCar.addEventListener("click", toggleMenushoppingCar);
product_detail_close.addEventListener("click", closeDetails);
darker.addEventListener("click",closeMenusandDarker)


// //
const firstProduct = new productGenerator({});
const lastProduct = new productGenerator({ name: "Ultimo", price: 1000 });

const products = [];
products.push(firstProduct);
products.push(lastProduct);

renderElements(products);

//// 1. Que la pagina de detalles de producto aparesca cuando le de clic en el producto
//// 2.Que funcione el boton cerrar
//DINAMISMO DE LA VENTANA DE PRODUCT-DETAIL
            //interaccion con los demas menus
                //// -mennuhamburgues
                //menude uuario
                //menu del carito
//aparezcan los valores reales del producto
//
//

{
        /* <div class="product-detail-close">
            <img src="./icons/icon_close.png" alt="close">
          </div>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
          <div class="product-info">
            <p>$35,00</p>
            <p>Bike</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button class="primary-button add-to-cart-button primary-button-pd">
              <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
              Add to cart
            </button>
          </div> */
}

//Funciones

function openDetails() {
    if(!product_detail.classList.contains("inactive")){
        return
    };
    if(!menuDesktop.classList.contains("inactive")){
        menuDesktop.classList.add("inactive")
    }
    if (!order_detail.classList.contains("inactive")) {
        order_detail.classList.add("inactive");
    }
    product_detail.classList.remove("inactive");
}
function closeDetails() {
    product_detail.classList.add("inactive");
}
function renderElements(arr) {
    for (let product of products) {
        const cardsContainer = document.createElement("div");
        cardsContainer.setAttribute("class", "cards-container");
        const productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");
        const productImg = document.createElement("img");
        productImg.setAttribute(
            "src",
            "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        );
        productImg.setAttribute("alt", `${product.name}!!, que buen producto`);
        const productInfo = document.createElement("div");
        productInfo.setAttribute("class", "product-info");
        const productInfoDetail = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = `$${product.price}.00`;
        const productName = document.createElement("p");
        productName.innerText = `${product.name}`;
        const productIconContainer = document.createElement("figure");
        const productIcon = document.createElement("img");
        productIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
        // empaquetando todos los elementos
        productIconContainer.appendChild(productIcon);
        productInfoDetail.append(productPrice, productName);
        //...
        productInfo.append(productInfoDetail, productIconContainer);
        //..
        productCard.append(productImg, productInfo);
       
        productsContainer.appendChild(productCard);



        productIcon.addEventListener("click", addToCar);
        productImg.addEventListener("click", openDetails)
        productInfoDetail.addEventListener("click", openDetails)
    }
}
function addToCar(){
   
    console.log("Agregado al carrito")
}
function toggleMenu() {
   
    if(!product_detail.classList.contains("inactive")){
        product_detail.classList.add("inactive");
    }
    if (!order_detail.classList.contains("inactive")) {
        order_detail.classList.add("inactive");
    }
    menuDesktop.classList.toggle("inactive");
    if(true){
        if(menuDesktop.classList.contains("inactive")){
            darker.classList.add("inactive");
        }else{
            darker.classList.remove("inactive");
        }
    }
}

function toggleMenuMobile() {
    if (!order_detail.classList.contains("inactive")) {
        order_detail.classList.add("inactive");
    }
    if (!menuDesktop.classList.contains("inactive")) {
        menuDesktop.classList.add("inactive");
    }
    if (!product_detail.classList.contains("inactive")) {
        product_detail.classList.add("inactive");
    }

    menuMobile.classList.toggle("inactive");
}
function toggleMenushoppingCar() {
    console.log("hola");

    if (!menuDesktop.classList.contains("inactive")) {
        menuDesktop.classList.add("inactive");
    }
    if (!menuMobile.classList.contains("inactive")) {
        menuMobile.classList.add("inactive");   
    }
    if (!product_detail.classList.contains("inactive")) {
        product_detail.classList.add("inactive");
    }
    order_detail.classList.toggle("inactive");
    if(true){
        if(order_detail.classList.contains("inactive")){
            darker.classList.add("inactive");
        }else{
            darker.classList.remove("inactive");
        }
    }
}

function closeMenusandDarker(){
    if(!darker.classList.contains("inactive")){
        darker.classList.add("inactive");
    }
    if(!menuDesktop.classList.contains("inactive")){
        menuDesktop.classList.add("inactive");
        return
    }
    if (!order_detail.classList.contains("inactive")) {
        order_detail.classList.add("inactive");
        return
    }
}
