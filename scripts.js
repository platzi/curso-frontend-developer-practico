const btnEmail=document.querySelector(".navbar-email");
const btnBurg=document.querySelector(".menu");
const btnCarrito=document.querySelector(".navbar-shopping-cart");
const desktopMenu=document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu")
const shoppingCartContainer=document.querySelector("#shoppingCartContainer")
const cardContainer=document.querySelector(".cards-container")

btnEmail.addEventListener("click",toggleDesktopMenu);
btnBurg.addEventListener("click",toggleMobileMenu);
btnCarrito.addEventListener("click",toggleAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive")
    console.log("me tocaste")
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    shoppingCartContainer.classList.add("inactive")
    console.log("tocaste la hamburguesa")
}
function toggleAside(){
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    shoppingCartContainer.classList.toggle("inactive")
    console.log("tocaste la carrito de compras")
}

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
</div>
</div> */

const listaProductos=[];
listaProductos.push({name:"celular",price:300,img:"https://images.fravega.com/f1000/491d28e113b36fb06f6a9bcdf65f74e8.jpg"})
listaProductos.push({name:"zapatos",price:50,img:"https://ringostore.ar/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbk0rIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--15c5fb6cc22a58ec77c345ec5df6130cd979767c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--9e4335f98fdd86f10e04195d2c760312997e95c2/1644342908-Ryker01_atanado_caoba_lateral.jpg"})
listaProductos.push({name:"camisa",price:12,img:"https://http2.mlstatic.com/D_NQ_NP_788292-MLA45154543703_032021-O.jpg"})


function renderProductos(arr){
    for(let product of arr){
        let productCard=document.createElement("div");//se crea el div
        productCard.classList.add("product-card");//se le agrega la clase 
        let imgProduct=document.createElement("img");//se crea el elemento img
        imgProduct.setAttribute("src",product.img);//se le agrega el atributo src para enlazarse con su arr
        productCard.appendChild(imgProduct);//se le agrega como hijo a el div productCar
        let productInfo=document.createElement("div");//se crea el div que contendra la informacion del producto
        productInfo.classList.add("product-info");//se le agrega la clase
        let productInfoDiv=document.createElement("div");//se crea un div para contener las descripciones
        let priceProduct=document.createElement("p")//se crea un parrafo para el precio del producto
        priceProduct.innerText=product.price//se ingresa el precio del producto directamente del array
        let nameProduct=document.createElement("p");//se crea un parrafo para el nombre el producto
        nameProduct.innerText=product.name;//se ingresa el nombre del producto directamente del array 
        productInfoDiv.appendChild(nameProduct);//se ingresa como hijo el nombre del producto con su estructura 
        productInfoDiv.appendChild(priceProduct);//se ingresa como hijo el precio del producto con su estructura 
        productInfo.appendChild(productInfoDiv);//se ingresa como hijo el div con los elementos precio y nombre
        let productFigure=document.createElement("figure");//se creo el elemento figure
        let btnCarrito=document.createElement("img");//se crea elemento btnCarrito
        btnCarrito.setAttribute("src","./icons/bt_add_to_cart.svg");//se le agrega el atributo src con su imagen
        productFigure.appendChild(btnCarrito);//se agrega btnCarrito como hijo a productFigure
        productInfo.appendChild(productFigure);//se agrega productFigure como hijo a productInfo con su contenido
        productCard.appendChild(productInfo);//se agrega productInfo como hijo a productCard con su contenido 
        cardContainer.appendChild(productCard);//
    }
}
renderProductos(listaProductos)
