const navbarR = document.querySelector(".navbar-email");
const carrito = document.querySelector(".navbar-shopping-cart");
const btn_movilMenu = document.querySelector(".menu");

const menuPerfil = document.querySelector(".desktop-menu");
const movilMenu =  document.querySelector(".mobile-menu");
const asideCarrito = document.querySelector(".product-detail");


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