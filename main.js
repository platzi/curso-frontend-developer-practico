const navEmail = document.querySelector (".navbar-email");
const menuEmail= document.querySelector (".desktop-menu");
const botonMenuMovil = document.querySelector (".menu");
const menuMovil = document.querySelector(".mobile-menu");
const carroCompras = document.querySelector(".navbar-shopping-cart");
const asaidCompras = document.querySelector(".product-detail");


//NO esta en uso-----FUNCION PARA MOSTRAR Y OCULTAR UN ELEMENTO 
function mostrarOcultarElemento (activador,elementoMostrar){
    activador.addEventListener("click", () => {
        elementoMostrar.classList.toggle("inactive");
    });
    
}

navEmail.addEventListener("click",() =>{
    if (asaidCompras.classList.contains("inactive") === false) {
        asaidCompras.classList.add("inactive");
        menuEmail.classList.toggle("inactive");    
    } else{
        menuEmail.classList.toggle("inactive")
    }
})

botonMenuMovil.addEventListener("click",() =>{
    if (asaidCompras.classList.contains("inactive") === false){
        console.log("menu movil escuchando")
        asaidCompras.classList.add("inactive");
        menuMovil.classList.toggle("inactive");    
    } else{
        menuMovil.classList.toggle("inactive")
    }
})

carroCompras.addEventListener("click",() =>{
    if (menuEmail.classList.contains("inactive") === false){        
        menuEmail.classList.add("inactive");
        asaidCompras.classList.toggle("inactive");    
    } else if (menuMovil.classList.contains("inactive") === false){
        menuMovil.classList.add("inactive");
        asaidCompras.classList.toggle("inactive");
    } else {
        asaidCompras.classList.toggle("inactive") 
    }
})

