const menuMail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu-burger");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

menuMail.addEventListener("click", toggleDeskTopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarrito);

function toggleDeskTopMenu(){

    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed ){
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
};


//abrir y cerrar mobile menu

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed ){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
};


//abrir y cerrar toggle carrito

function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
   
   
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
} 

const productList = [];

productList.push({

    name: "Bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    
    name: "Compu",
    price: 260,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    
    name: "TV",
    price: 180,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

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
    </div> */
function renderProducts(arr) {
for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

//product = {name, price, img} --> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", console.log);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info"); 
    
    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText =  product.name;

    const productName = document.createElement("p");
    productName.innerText =  "$" + product.price;

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
}};


renderProducts(productList);