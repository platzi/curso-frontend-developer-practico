//estaticos
const cardsContainer = document.querySelector(".cards-container")
//accionables
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarrito = document.querySelector(".product-detail-cart");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");

const productDetailAside = document.querySelector(".product-detail")
const imgProductCards = document.getElementsByClassName("product-card-img")
const buttonCloseProductDetailAside = document.querySelector(".product-detail-close")

const interactiveElements = document.querySelectorAll(".interactive");
console.log(interactiveElements);
//
const productList = [];

menuEmail.addEventListener("click", ()=> {blockOrNone(desktopMenu)});
burguerIcon.addEventListener("click", ()=> {blockOrNone(mobileMenu)});
menuCarritoIcon.addEventListener("click", ()=> {blockOrNone(menuCarrito)});

// main functions
function blockOrNone(element) {//https://platzi.com/comentario/3856000/
    if (element.classList.contains("inactive") === true) {
        displayNoneAll()
        element.classList.remove("inactive")
    } else {
        //displayNoneAll()
        element.classList.add("inactive")
    }
}
function displayNoneAll() {
    interactiveElements.forEach(function(interactiveElement){
        if (interactiveElement.classList.contains("inactive") === false) {
            interactiveElement.classList.add("inactive");
        }
    })
}
// products
class Product {
    constructor(name, price, image){
        this.name = name,
        this.price = price,
        this.image = image
    }
}
const bike = new Product("Bike", 120, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
const bicycleHelmet = new Product("Bicycle helmet", 1200, "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto" )
const seat = new Product("Seat", 300, "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg")
const tennisMountainBike = new Product("Tennis Montain Bike", 2200, "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg")
const sunglasses = new Product("Sunglasses", 800, "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602")

productList.push(bike, bicycleHelmet, seat, tennisMountainBike, sunglasses)
console.log(productList);

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-card-img">
            <div class="product-card-info">
            <div>
                <p>$${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>`;
        console.log(productCard);
        cardsContainer.append(productCard);
    }
}
renderProducts(productList);
//
function openProductDetailAside(array){
    for (let index = 0; index < array.length; index++) {
        imgProductCards[index].addEventListener("click", ()=> {
            displayNoneAll()
            productDetailAside.classList.remove("inactive")
        })
    }
}
openProductDetailAside(imgProductCards)
function closeProductDetailAside(){
    buttonCloseProductDetailAside.addEventListener("click", ()=> {
        productDetailAside.classList.add("inactive")
    })
}
closeProductDetailAside()
console.log(imgProductCards);