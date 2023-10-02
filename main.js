const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobilepMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  if(!aside.classList.contains("inactive")){
    aside.classList.add("inactive");
  }
}

function toggleMobilepMenu(){
    mobileMenu.classList.toggle("inactive");
    console.log("Menu");
    if(!aside.classList.contains("inactive")){
        aside.classList.add("inactive");
    }
}

function toggleCarritoAside (){
    aside.classList.toggle("inactive");
    if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.add("inactive");
    }
    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.add("inactive");
    }
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "PC-Portatil",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts (arr) {
    for (let product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.image)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = `$ ${product.price}`;
        
        const productName = document.createElement("p");
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    
    }
}

renderProducts(productList)

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
      </div>
    </div>
*/