const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const icon = document.querySelector(".icon");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCar = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.getElementById("shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");


menuEmail.addEventListener("click", showDesktopMenu);
icon.addEventListener("click", showMobileMenu);
iconCar.addEventListener("click", showAside)


function showAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("activo")    
    if(isMobileMenuClosed){
        mobileMenu.classList.remove("activo")
    }
    shoppingCartContainer.classList.toggle("inactive");
}

//El Menu Mobile ya funciona (Email)
function showDesktopMenu() {
    const isAsideClosed = productDetailContainer.classList.contains("inactive")
    const isAside = shoppingCartContainer.classList.contains("inactive")
    
    if(!isAsideClosed){
        productDetailContainer.classList.add("inactive");
        desktopMenu.classList.toggle("activar");
    }else if(!isAside){
        shoppingCartContainer.classList.add("inactive");
        desktopMenu.classList.toggle("activar")
    }else{
        desktopMenu.classList.toggle("activar")
    }

}

function showMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")    
    
    if(isAsideClosed){
        mobileMenu.classList.toggle("activo");
    }else{
        shoppingCartContainer.classList.add("inactive");
        mobileMenu.classList.toggle("activo");
    }
}

function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}
productDetailClose.addEventListener("click", closeProductDetailAside); 

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "XBOX",
    price: 500,
    image: "/img/xbox.jpg",
});
productList.push({
    name: "Compu",
    price: 7000,
    image: "/img/portatil.jpg",
})

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
*/


for (const product of productList) {
    //Creamos nuestro div product-card
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productcardImg = document.createElement("img");
    productcardImg.setAttribute("src", product.image);
    productcardImg.addEventListener("click", openProductDetailAside);

    //Creamos nuestro segundo div junto a su div anonimo
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const infoDiv = document.createElement("div");

    //Creamos los parrafos 
    const productPrice = document.createElement("p")
    productPrice.innerText = "$"+product.price;
    const productName = document.createElement("p")
    productName.innerText = product.name;

    //Creamos nuestro figure
    const figure = document.createElement("figure");
    const figureImg = document.createElement("img");
    figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //Aca insertamos de la manera correspondiente los datos
    figure.appendChild(figureImg);
    infoDiv.append(productPrice, productName);
    productInfo.append(infoDiv, figure);
    productCard.append(productcardImg, productInfo);

    cardsContainer.appendChild(productCard);
}
