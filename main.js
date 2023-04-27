const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carMenu = document.querySelector(".navbar-shopping-cart");
const asideCar = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);
carMenu.addEventListener("click", toggleCarMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle("inactive"); //Pone y quita la clase
    mobileMenu.classList.add("inactive");
    asideCar.classList.add("inactive");

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    asideCar.classList.add("inactive");
}

function toggleCarMenu(){
    asideCar.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");

}

const productsList = []
productsList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: "Laptop",
    price: 700,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: "Phone",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: "Laptop",
    price: 700,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productsList.push({
    name: "Phone",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts(arr){
    for (product of productsList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
       
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
        const productPrice= document.createElement("p");
        productPrice.innerText = `$${product.price}`; 
        const productName= document.createElement("p");
        productName.innerText =product.name; 
        
        const productFigure= document.createElement("figure");
        const productFigureImage= document.createElement("img");
        productFigureImage.setAttribute("src", "./icons/bt_add_to_cart.svg");
        
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productFigure.appendChild(productFigureImage);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productsList);