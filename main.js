/* Variables para desplegar menu en desktop */
const navMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

/* Variables para desplegar menu en mobile */
const burgerMenu = document.querySelector(".burgerMenuButton");
const mobileMenu = document.querySelector(".mobile-menu");

/* Variables para desplegar el shopping-cart */
const shoppingCartButton = document.querySelector(".navbar-shopping-cart");
const shoppingCartAside = document.querySelector(".product-detail");

navMail.addEventListener("click", () => {
  desktopMenu.classList.toggle("inactive");
  shoppingCartAside.classList.add("inactive");
});

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("inactive");
  shoppingCartAside.classList.add("inactive");
});

shoppingCartButton.addEventListener("click", () => {
  shoppingCartAside.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
});

/* Product list */
const productList = [];
productList.push({
name: "Bike",
price: 120,
img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
name: "Screen",
price: 200,
img: "https://cdn.pixabay.com/photo/2014/04/05/09/30/tablet-314153_960_720.png",
});
productList.push({
name: "Computer",
price: 650,
img: "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg",
});
productList.push({
name: "Muffins",
price: 15,
img: "https://cdn.pixabay.com/photo/2017/03/27/14/20/cupcakes-2179039_960_720.jpg",
});

/* Render product list */

function renderProducts(arr){
    for (product of arr) {
        const cardsContainer = document.querySelector(".cards-container");
    
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productCardImg = document.createElement("img");
        productCardImg.setAttribute("src", product.img)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const divPContainer = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
        
        const productFigure = document.createElement("figure");
        const prodFigureImg = document.createElement("img");
        prodFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
        
        cardsContainer.appendChild(productCard);
        productCard.appendChild(productCardImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(divPContainer);
        productInfo.appendChild(productFigure);
        divPContainer.appendChild(productPrice);
        divPContainer.appendChild(productName);
        productFigure.appendChild(prodFigureImg);
    
    }
}



renderProducts(productList);