const navbarR = document.querySelector(".navbar-email");
const carrito = document.querySelector(".navbar-shopping-cart");
const btn_movilMenu = document.querySelector(".menu");
const containerProductos = document.querySelector(".cards-container");

const menuPerfil = document.querySelector(".desktop-menu");
const movilMenu =  document.querySelector(".mobile-menu");

const carritoInfo = document.querySelector("#carrito");
const productInfo = document.querySelector("#productoInfo");
const btn_productInfo = document.querySelector(".product-detalles-close");

//Array de Productos 
const productos = [];

productos.push({
    name:"Cicla",
    price:"120",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productos.push({
    name:"TV",
    price:"110",
    img:"https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=600"
});

productos.push({
    name:"Carro",
    price:"220",
    img:"https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productos.push({
    name:"Paleta",
    price:"10",
    img:"https://images.pexels.com/photos/2838605/pexels-photo-2838605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productos.push({
    name:"Arroz",
    price:"320",
    img:"https://images.pexels.com/photos/724300/pexels-photo-724300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

//Control de aparición de interfaces
navbarR.addEventListener("click",()=>{
    menuPerfil.classList.toggle("inactive");
    
    if(!carritoInfo.classList.contains("inactive")){
        carritoInfo.classList.add("inactive");
        carritoInfo.classList.remove("product-detail");
    }

    if(!productInfo.classList.contains("inactive")){
        productInfo.classList.add("inactive");
    }
});

btn_movilMenu.addEventListener("click",()=>{
    movilMenu.classList.toggle("inactive");
    
    if(!carritoInfo.classList.contains("inactive")){
        carritoInfo.classList.add("inactive");
        carritoInfo.classList.remove("product-detail");
    }

    if(!productInfo.classList.contains("inactive")){
        productInfo.classList.add("inactive");
    }
});

carrito.addEventListener("click",()=>{
    carritoInfo.classList.toggle("inactive");
    carritoInfo.classList.add("product-detail");

    if(!menuPerfil.classList.contains("inactive")){
        menuPerfil.classList.add("inactive");
    }

    if(!productInfo.classList.contains("inactive")){
        productInfo.classList.add("inactive");
    }

    if(!movilMenu.classList.contains("inactive")){
        movilMenu.classList.add("inactive")
    }
});

btn_productInfo.addEventListener("click",()=>{
    productInfo.classList.add("inactive");
});

//Integración de  los productos usando el DOM
function renderProductos(x){
    for(let i=0; i<x.length; i++){
        let tarjeta = document.createElement("div");
        
        tarjeta.setAttribute("class","product-card");
        tarjeta.addEventListener("click",()=>{
            verProducto();
        });

        tarjeta.innerHTML = `
            <img src="${x[i].img}" alt="${x[i].name}">
            <div class="product-info">
                <div>
                    <p>${x[i].price}</p>
                    <p>${x[i].name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        `;
    
        containerProductos.append(tarjeta);
    }
}

function verProducto(){
    productInfo.classList.remove("inactive");

    if(!menuPerfil.classList.contains("inactive")){
        menuPerfil.classList.add("inactive");
    }

    if(!carritoInfo.classList.contains("inactive")){
        carritoInfo.classList.add("inactive");
        carritoInfo.classList.remove("product-detail");
    }


}

renderProductos(productos);