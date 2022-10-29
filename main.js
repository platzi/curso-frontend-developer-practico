const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const icon = document.querySelector(".icon");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCar = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");



menuEmail.addEventListener("click", showDesktopMenu);
icon.addEventListener("click", showMobileMenu);
iconCar.addEventListener("click", showAside)

function showAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("activo")    
    if(isMobileMenuClosed){
        mobileMenu.classList.remove("activo")
        aside.classList.toggle("inactive");
    }else{
        //Abrir el Aside
        aside.classList.toggle("inactive");
    }
}

function showDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive")    
    const isDesktopMenuOpen = desktopMenu.classList.contains("activar")
    
    if(isAsideClosed){
        desktopMenu.classList.toggle("activar");
    }else{
        aside.classList.add("inactive");
        desktopMenu.classList.toggle("activar");
    }
    
}

function showMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive")    
    
    if(isAsideClosed){
        mobileMenu.classList.toggle("activo");
    }else{
        aside.classList.add("inactive");
        mobileMenu.classList.toggle("activo");
    }
}

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
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //Ahora le creamos la etiqueta de imagen para que ella se encuenetre dentro de nuestro div
    const img = document.createElement("img");
    img.setAttribute("src",product.image);


    //Creamos el siguiente div product-info
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-Info");
    

    //div vacio con el cotenido de nuestros productos
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$"+ product.price;
    const productname = document.createElement("p");
    productPrice.innerText = product.name;
    
    
    //Cramos nuestro figure
    const figure = document.createElement("figure");
    const figureImg = document.createElement("img");
    figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
    //Terminamos el maquetado insertando en donde correspondan cada etiqueta
    /*figure.appendChild(figureImg);
    productInfoDiv.append(productPrice, productname);
    productInfoDiv.appendChild(figure)
    productInfo.append(productInfoDiv, figure);
    productCard.append(img,productInfo);
    cardsContainer.appendChild(productCard);*/
    productInfoDiv.appendChild(figureImg);
    

}
