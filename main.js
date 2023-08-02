let nav_email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let MovileMenu = document.querySelector(".mobile-menu")
let menuMovile = document.querySelector(".menu")
let detalleProducto = document.querySelector(".product-detail")
let carritoCompras = document.querySelector(".navbar-shopping-cart")

let mostrarcarrito = detalleProducto.classList.contains("inactive")
let mostrarMenuDesktop = desktopMenu.classList.contains("inactive")
let mostrarMenuMobile = MovileMenu.classList.contains("inactive")


nav_email.addEventListener("click" , aparecer);

// La función .clasList.toggle muestra y desaparece el css que esta relacionado.

function aparecer()
{
   if(mostrarcarrito)
   {
      detalleProducto.classList.add("inactive");
   } 
   
   desktopMenu.classList.toggle("inactive")
}

menuMovile.addEventListener("click" , aparecerMenu );

function aparecerMenu()
{
if(mostrarMenuMobile)
{
   detalleProducto.classList.add("inactive");
}

   MovileMenu.classList.toggle("inactive");
}

carritoCompras.addEventListener("click" , aparacerDetalleDeCompra)

function aparacerDetalleDeCompra()
{
   if(mostrarMenuDesktop)
   {
       desktopMenu.classList.add("inactive");
       MovileMenu.classList.add("inactive");      
   }

   detalleProducto.classList.toggle("inactive")  
}


