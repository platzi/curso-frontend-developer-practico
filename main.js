const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}

function toggleMobileMenu() {
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

function toggleCartAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
} 
const productList = [];
productList.push({
    name:"Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:"Pantalla",
    price: 120,
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name:"Toyota FJ 80",
    price: 1000,
    image: "https://images.pexels.com/photos/11756872/pexels-photo-11756872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name:"Yamaha Dt 200",
    price: 500,
    image: "https://i.ebayimg.com/images/g/GTwAAOSwopRYm1cI/s-l1600.jpg"
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
// El método classList.add se utiliza para agregar una o varias clases a un elemento HTML en el DOM (Modelo de Objetos del Documento).

        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice= document.createElement("p");
// La propiedad innerText se utiliza para obtener o establecer el contenido de texto de un elemento en el DOM (Modelo de Objetos del Documento).
// A diferencia de innerHTML, innerText solo devuelve el texto visible dentro del elemento, sin incluir etiquetas HTML.

        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement("p");
        productName.innerText =  product.name ;

// El método appendChild se utiliza para agregar un elemento como hijo al final de otro elemento dentro del DOM (Modelo de Objetos del Documento).

// Se crean y agregan elementos HTML al DOM para construir una tarjeta de producto en un contenedor de tarjetas.
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
    }
};
renderProducts(productList);