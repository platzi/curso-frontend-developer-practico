//ELEMENTOS HTML
const navEmail = document.querySelector(".navbar-email");
const menuEmail = document.querySelector(".desktop-menu");
const botonMenuMovil = document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");
const carroCompras = document.querySelector(".navbar-shopping-cart");
const asaidCompras = document.querySelector(".product-detail");
const contedorTarjetas = document.querySelector(".cards-container");

//VARIABLES JS
const listaProductos = [];


//NO esta en uso-----FUNCION PARA MOSTRAR Y OCULTAR UN ELEMENTO 
function mostrarOcultarElemento(activador, elementoMostrar) {
    activador.addEventListener("click", () => {
        elementoMostrar.classList.toggle("inactive");
    });

}

navEmail.addEventListener("click", () => {
    if (asaidCompras.classList.contains("inactive") === false) {
        asaidCompras.classList.add("inactive");
        menuEmail.classList.toggle("inactive");
    } else {
        menuEmail.classList.toggle("inactive")
    }
})

botonMenuMovil.addEventListener("click", () => {
    if (asaidCompras.classList.contains("inactive") === false) {
        console.log("menu movil escuchando")
        asaidCompras.classList.add("inactive");
        menuMovil.classList.toggle("inactive");
    } else {
        menuMovil.classList.toggle("inactive")
    }
})

carroCompras.addEventListener("click", () => {
    if (menuEmail.classList.contains("inactive") === false) {
        menuEmail.classList.add("inactive");
        asaidCompras.classList.toggle("inactive");
    } else if (menuMovil.classList.contains("inactive") === false) {
        menuMovil.classList.add("inactive");
        asaidCompras.classList.toggle("inactive");
    } else {
        asaidCompras.classList.toggle("inactive")
    }
})

//insertar productos------------------------------------------------------------
listaProductos.push({
    nombre: "Bike",
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaProductos.push({
    nombre: "casco",
    precio: 30,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaProductos.push({
    nombre: "lentes",
    precio: 15,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaProductos.push({
    nombre: "Termo",
    precio: 20,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})



/*< div class="product-card" >
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="">
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

//el of = opera en el contenido del array
//Cada iteracion es un objeto diferente

//Convertir este ciclo en una funcion
for (productos of listaProductos) {
    console.log(productos)
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src",productos.imagen);    

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");    

    const pdiv = document.createElement("div");

    const pCosto = document.createElement("p");
    pCosto.innerText = "$" + productos.precio;

    const pNombre = document.createElement("p");
    pNombre.innerText = productos.nombre;

    const figuraProduct = document.createElement("figure");
    const iconoProduct = document.createElement("img");
    iconoProduct.setAttribute("src","./icons/bt_add_to_cart.svg");

    //agregar los elementos    
    figuraProduct.appendChild(iconoProduct);

    pdiv.appendChild(pCosto);
    pdiv.appendChild(pNombre);    

    productInfo.appendChild(pdiv);
    productInfo.appendChild(figuraProduct);    

    productCard.appendChild(imgCard);
    productCard.appendChild(productInfo);
    
    contedorTarjetas.appendChild(productCard);
};