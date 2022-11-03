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
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")    
    const isAsideClosed = desktopMenu.classList.contains("activar")
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
        shoppingCartContainer.classList.toggle("inactive")
    }else if(isMobileMenuClosed){
        mobileMenu.classList.remove("activo")
        shoppingCartContainer.classList.toggle("inactive")
    }else if(isAsideClosed){
        desktopMenu.classList.remove("activar")
        shoppingCartContainer.classList.toggle("inactive")
    }else{
        shoppingCartContainer.classList.toggle("inactive")
    }

}

//El Menu Desktop ya funciona (Email)
function showDesktopMenu() {
    const isAsideClosed = productDetailContainer.classList.contains("inactive")
    const isProductDetailClosed = shoppingCartContainer.classList.contains("inactive")
    
    if(!isAsideClosed){
        productDetailContainer.classList.add("inactive");
        desktopMenu.classList.toggle("activar");
    }else if(!isProductDetailClosed){
        shoppingCartContainer.classList.add("inactive");
        desktopMenu.classList.toggle("activar")
    }else{
        desktopMenu.classList.toggle("activar")
    }

}
//El Menu Mobile ya funciona
function showMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")    
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")    
        
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
        mobileMenu.classList.add("activo")
    }else if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
        mobileMenu.classList.add("activo")
    }else{
        mobileMenu.classList.toggle("activo")
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

productList.push({
    name:"NFT-Son Goku Super Sayajin",
    price:"500",
    image: "/img/Son.Goku.(DRAGON.BALL).full.1576118.jpg",
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
