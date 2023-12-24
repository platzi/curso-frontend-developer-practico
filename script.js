const navbarR = document.querySelector(".navbar-email");
const carrito = document.querySelector(".navbar-shopping-cart");
const btn_movilMenu = document.querySelector(".menu");
const containerProductos = document.querySelector(".cards-container");

const menuPerfil = document.querySelector(".desktop-menu");
const movilMenu =  document.querySelector(".mobile-menu");
const asideCarrito = document.querySelector(".product-detail");

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
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productos.push({
    name:"Carro",
    price:"220",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productos.push({
    name:"Paleta",
    price:"10",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productos.push({
    name:"Arroz",
    price:"320",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

//Control de aparición de interfaces
navbarR.addEventListener("click",()=>{
    menuPerfil.classList.toggle("inactive");
    asideCarrito.classList.add("inactive");
});

btn_movilMenu.addEventListener("click",()=>{
    movilMenu.classList.toggle("inactive");
    
    if(asideCarrito.classList.contains("inactive")){
        return;
    }else{
        asideCarrito.classList.add("inactive");
    }
});

carrito.addEventListener("click",()=>{
    asideCarrito.classList.toggle("inactive");
    menuPerfil.classList.add("inactive");

    if(movilMenu.classList.contains("inactive")){
        return;
    }else{
        movilMenu.classList.add("inactive");
    }
});

//Integración de  los productos usando el DOM
function renderProductos(x){
    for(let i=0; i<x.length; i++){
        let tarjeta = document.createElement("div");
        
        tarjeta.setAttribute("class","product-card");
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

renderProductos(productos);