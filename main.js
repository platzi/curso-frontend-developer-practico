const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer=document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggledesktopmenu);
menuHamIcon.addEventListener("click", togglemobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoshoppingCartContainer);

function toggledesktopmenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
      }
      
    desktopMenu.classList.toggle("inactive");
}

function togglemobileMenu() {
    const isshoppingCartContainerClose=shoppingCartContainer.classList.contains("inactive");
    if(!isshoppingCartContainerClose){
        shoppingCartContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive"); 
}

function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClose=mobileMenu.classList.contains("inactive");
   
    if(!isMobileMenuClose){
        mobileMenu.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: "Bike",
    price: "120",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: "Carro",
    price: "520",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: "Avion",
    price: "1120",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: "Caballo",
    price: "820",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

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


function renderProducts (arr){
    for (product of productList){
    const productCard=document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo=document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv=document.createElement("div");
     
    const productPrice=document.createElement("p");
    productPrice.innerText="$" + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure=document.createElement("figure");
    const productImgCart=document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
   
    cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);