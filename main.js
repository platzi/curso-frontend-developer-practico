let nav_email = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let MovileMenu = document.querySelector(".mobile-menu");
let menuMovile = document.querySelector(".menu");
let detalleProducto = document.querySelector(".product-detail");
let carritoCompras = document.querySelector(".navbar-shopping-cart");
let cardsContainer = document.querySelector(".cards-container");
let infoDelProducto = document.querySelector(".product-detail-info");
let cerrarInfoProducto = document.querySelector(".product-detail-close");

// let otros = document.querySelector(".otros");

let mostrarcarrito = detalleProducto.classList.contains("inactive");
let mostrarMenuDesktop = desktopMenu.classList.contains("inactive");
let mostrarMenuMobile = MovileMenu.classList.contains("inactive");
let mostrarInfoDelProducto = infoDelProducto.classList.contains("inactive");

nav_email.addEventListener("click" , aparecer);

// La función .clasList.toggle muestra y desaparece el css que esta relacionado.

function aparecer()
{
   if(mostrarcarrito)
   {
      detalleProducto.classList.add("inactive") 
   } 

   desktopMenu.classList.toggle("inactive");

   if(mostrarInfoDelProducto)
{
   infoDelProducto.classList.add("inactive");
}
   
}

menuMovile.addEventListener("click" , aparecerMenu );

function aparecerMenu()
{
if(mostrarMenuMobile)
{
   detalleProducto.classList.add("inactive");
}

   MovileMenu.classList.toggle("inactive");

if(mostrarInfoDelProducto)
{
   infoDelProducto.classList.add("inactive");
}
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

   if(mostrarInfoDelProducto)
   {
      infoDelProducto.classList.add("inactive");
   }
}

// Aparecer y desaparecer información del producto.

function aparacerinfoproducto()
{
 
   infoDelProducto.classList.remove("inactive")

   if(mostrarcarrito)
   {
      detalleProducto.classList.add("inactive") 
   }
   
   if(mostrarMenuDesktop)
   {
      desktopMenu.classList.add("inactive");
   }

   if(mostrarMenuMobile)
   {
      MovileMenu.classList.add("inactive");
   }
  
};

cerrarInfoProducto.addEventListener("click" , cerrarinformacion);

function cerrarinformacion()
{   
   
   infoDelProducto.classList.add("inactive");
  
}



// Insertr array Aquí se crean los productos y la spropiedades que tiene cada uno de ellos.

let productList = [];

productList.push ({
   name: "Bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push ({
   name: "Tires",
   price: 90,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push ({
   name: "Breaks",
   price: 30,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


// esta es la estructura del contenido que debe aparecer en HTML

// div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>


// Se puede meter el ciclo for dentro de una función, para poder reutilizar el ciclo en cualquier otra parte del proyecto



// otros.addEventListener("click" , renderProducts);
// function renderProducts ()

// // Crea un producto de la lista de productos, el producto es crear la estructura HTML 

// {
   for (product of productList)
{
   // Creación del div contenedor product card
   let productCard = document.createElement("div");
   productCard.classList.add("product-card");
   // Creación de la imagen, en este caso no se adiciona una clase, en cambio se añade el atributo e buscar la imagen y
   //  la propiedad image

   let imagens = document.createElement("img");
   imagens.setAttribute("src" , product.image);
   imagens.addEventListener("click" , aparacerinfoproducto)

   // Creación del div de la información del producto
   let productInfo = document.createElement("div");
   productInfo.classList.add("product-info");
   
// Creación del div contenedor product card
   let datosProduct = document.createElement("div");
    
   let productPrice = document.createElement("p");
   productPrice.innerText = "$" + product.price

   let productName = document.createElement("p");
   productName.innerText =  product.name

   let productFigure = document.createElement("figure");
   let productFigureImage = document.createElement("img");
   productFigureImage.setAttribute("src" , "./icons/bt_add_to_cart.svg" );

   productFigure.appendChild(productFigureImage);
    
   datosProduct.appendChild(productName);
   datosProduct.appendChild(productPrice);

   productInfo.appendChild(datosProduct);
   productInfo.appendChild(productFigure);

   productCard.appendChild(imagens);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);
}











