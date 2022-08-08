const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileBoton = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
/* Creamos el contenedor de cardscontainer con los elementos de abajo para clonarlo */
const cardsContainer = document.querySelector(".cards-container")
/* QuerySelector selecciona cualquier selector ya sea clase/id */

menuEmail.addEventListener("click", toggleDesktopMenu); 
menuMobileBoton.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
        desktopMenu.classList.remove("inactive");
    }

     /* Si no hay conflictos, que togglée */
    else{
        desktopMenu.classList.toggle("inactive");
    }
    /* El método "toogle" lo que hace es alternar entre on y off
    
    En este caso lo que hace es cambiar el display: none que previamente hemos especificado en el CSS*/
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    /* Si el aside está abierto entonces lo cerramos y abrimos este */
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
        menuMobile.classList.remove("inactive");
    }
    /* De lo contrario que togglée sin problema */
    else{
        menuMobile.classList.toggle("inactive");
    }
}

function toggleCarritoAside(){
    const isMobileMenuClosed = menuMobile.classList.contains("inactive");

/*     Si el menú mobile está abierto entonces lo cierras y abrimos este */
    if(!isMobileMenuClosed){
        menuMobile.classList.add("inactive");
        shoppingCartContainer.classList.remove("inactive");
    }

     /* Si no hay conflictos, que togglée */
    else{
        shoppingCartContainer.classList.toggle("inactive");
    }
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "TV",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Ordenador",
    price: 90,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div> */


/* Ahora traemos los elementos HTML al JS correspondientes al HTML, dentro de un ciclo para que traiga un elemento total por cada producto del array de productos, interactuando con las características de los objetos de este array */

/* También todo este ciclo lo puedo meter en una función con un array como parámetro y así la tendría encapsulada para reutilizar en otra ocasión */
function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        //product = {name, price, image} => product.image
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", console.log);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "€" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
        const producImgCart = document.createElement("img");
        producImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        /* Ahora metemos los elementos unos dentro de sus padres correspondiendo al texto referencia del HTML */
    
        productInfoFigure.appendChild(producImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        /* Y aquí metemos el div en la clase padre general, mirar HTML */
        cardsContainer.appendChild(productCard);
    } 
}
/* Y ahora la ejecutamos con el array que nos interesa "productList" */
renderProducts(productList);