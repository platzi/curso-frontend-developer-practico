//ELEMENTOS HTML
const navEmail = document.querySelector(".navbar-email");
const menuEmail = document.querySelector(".desktop-menu");
const botonMenuMovil = document.querySelector(".menu");
const menuMovil = document.querySelector(".mobile-menu");
const carroCompras = document.querySelector(".navbar-shopping-cart");
const asaidCompras = document.querySelector(".product-detail");
const contedorTarjetas = document.querySelector(".cards-container");
const asaid2 = document.querySelector(".product-detail-as2");
const closeAsaid2 = document.querySelector(".product-detail-close");
const cartasProductos = document.querySelector(".cards-container");
const cartasProductos2 = document.querySelector(".main-container");

const precio2 = document.getElementById("valorAsaid2");
const nombre2 = document.getElementById("productoAsaid2");


//VARIABLES JS
const listaProductos = [];
let anchoVentana = null;

//VARIABLES MOSTRAR/OCULTAR ELEMENTOS
let asaidComprasView = asaidCompras.classList.contains("inactive");
let menuEmailView = menuEmail.classList.contains("inactive")
let menuMovilView = menuMovil.classList.contains("inactive")



//NO esta en uso-----FUNCION PARA MOSTRAR Y OCULTAR UN ELEMENTO 
function mostrarOcultarElemento(activador, elementoMostrar) {
    activador.addEventListener("click", () => {
        elementoMostrar.classList.toggle("inactive");
    });

}

//ESCUCHO LA PANTALLA Y LA GUARDO EL ANCHO EN UNA VARIABLE
window.addEventListener("resize", () => {
    anchoVentana = window.innerWidth;
    //console.log(typeof(anchoVentana))
});

//se deben tener en cuenta:
        //menuEmail
        //asaidCompras
        //menuMovil
        //asaid2

navEmail.addEventListener("click", () => {    

    if (asaidCompras.classList.contains("inactive") === false || asaid2.classList.contains("inactive") === false) {
        asaidCompras.classList.add("inactive");        
        menuEmail.classList.toggle("inactive");
        menuEmail.style.zIndex = "1";
    } else {
        menuEmail.classList.toggle("inactive")
    }
})

botonMenuMovil.addEventListener("click", () => {
   
    if (asaidCompras.classList.contains("inactive") === false || asaid2.classList.contains("inactive") === false) {
        console.log("menu movil escuchando")
        asaidCompras.classList.add("inactive");
        asaid2.classList.add("inactive");
        menuMovil.classList.toggle("inactive");
    } else {
        menuMovil.classList.toggle("inactive")
    }
})

carroCompras.addEventListener("click", () => {    

    if (window.innerWidth > 641){

        if (menuEmail.classList.contains("inactive") === false || asaid2.classList.contains("inactive") === false) {
            menuEmail.classList.add("inactive");
            asaidCompras.classList.toggle("inactive");
            asaidCompras.style.zIndex = "1";
        } else if (menuMovil.classList.contains("inactive") === false) {
            menuMovil.classList.add("inactive");
            asaidCompras.classList.toggle("inactive");
        } else {
            asaidCompras.classList.toggle("inactive")
        }
    }
    
    if (window.innerWidth < 641){

        if (menuEmail.classList.contains("inactive") === false || asaid2.classList.contains("inactive") === false) {
            menuEmail.classList.add("inactive");
            asaidCompras.classList.toggle("inactive");
            asaid2.classList.toggle("inactive");
            
        } else if (menuMovil.classList.contains("inactive") === false) {
            menuMovil.classList.add("inactive");
            asaidCompras.classList.toggle("inactive");
        } else {
            asaidCompras.classList.toggle("inactive")
        }
    }    
})

//Funcionalidad del boton de la X del assaid2
closeAsaid2.addEventListener("click",() => {
    if (window.innerWidth > 641){
        //console.log("asaid2")
        asaid2.classList.toggle("inactive")
        cartasProductos2.classList.remove("inactive")        
    }
    
    if (window.innerWidth < 641){
        asaid2.classList.toggle("inactive")        
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
listaProductos.push({
    nombre: "Herramienta",
    precio: 80,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaProductos.push({
    nombre: "Lica Deportiva",
    precio: 150,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaProductos.push({
    nombre: "Silla acolchada",
    precio: 45,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaProductos.push({
    nombre: "Gorra",
    precio: 17,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
listaProductos.push({
    nombre: "Luces de transito",
    precio: 71,
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
    //console.log(productos)
    const productCard = document.createElement("div"); 
    productCard.classList.add("product-card");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src",productos.imagen);
    imgCard.classList.add("imgCardProducto");    

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

//se deben tener en cuenta:
        //menuEmail
        //asaidCompras
        //menuMovil

const imgCP = document.querySelectorAll(".imgCardProducto");

imgCP.forEach((imagenProducto) => {

    imagenProducto.addEventListener("click",() =>{
        
        const asaid2View = asaid2.classList.contains("inactive")

        /*if (window.innerWidth > 641){

            if (asaid2View === true){
                asaid2.classList.toggle("inactive")
                menuEmail.classList.add("inactive")
                asaidCompras.classList.add("inactive")
                menuMovil.classList.add("inactive")
                cartasProductos2.classList.add("inactive")
            } else {
                asaid2.classList.toggle("inactive")
            }
        }
        
        if (window.innerWidth < 641){

            if (asaid2View === true){
                asaid2.classList.toggle("inactive")
                menuEmail.classList.add("inactive")
                asaidCompras.classList.add("inactive")
                menuMovil.classList.add("inactive")                
            } else {
                asaid2.classList.toggle("inactive")
            }                   
        }*/

        if (asaid2View === true){
            asaid2.classList.toggle("inactive")
            menuEmail.classList.add("inactive")
            asaidCompras.classList.add("inactive")
            menuMovil.classList.add("inactive")
            //cartasProductos2.classList.add("inactive")
        } else {
            asaid2.classList.toggle("inactive")
        }
    })
})






