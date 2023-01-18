const btnEmail=document.querySelector(".navbar-email");
const btnBurg=document.querySelector(".menu");
const btnCarrito=document.querySelector(".navbar-shopping-cart");
const desktopMenu=document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu")
const aside=document.querySelector(".product-detail")
const cardContainer=document.querySelector(".cards-container")

btnEmail.addEventListener("click",toggleDesktopMenu);
btnBurg.addEventListener("click",toggleMobileMenu);
btnCarrito.addEventListener("click",toggleAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive")
    console.log("me tocaste")
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    aside.classList.add("inactive")
    console.log("tocaste la hamburguesa")
}
function toggleAside(){
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    aside.classList.toggle("inactive")
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
listaProductos.push({name:"celular",price:300,img:"https://http2.mlstatic.com/D_NQ_NP_899859-MLA52747760371_122022-O.webp"})
listaProductos.push({name:"zapatos",price:50,img:"https://ringostore.ar/web-experto/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbk0rIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--15c5fb6cc22a58ec77c345ec5df6130cd979767c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--9e4335f98fdd86f10e04195d2c760312997e95c2/1644342908-Ryker01_atanado_caoba_lateral.jpg"})
listaProductos.push({name:"camisa",price:12,img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})


function renderProductos(arr){
    for(let product of arr){
        let productCard=document.createElement("div");
        productCard.classList.add("product-card");
        let imgProduct=document.createElement("img");
        imgProduct.setAttribute("src",product.img);
        productCard.appendChild(imgProduct);
        let productInfo=document.createElement("div");
        productInfo.classList.add("product-info");
        let productInfoDiv=document.createElement("div");
        let priceProduct=document.createElement("p")
        priceProduct.innerText=product.price
        let nameProduct=document.createElement("p");
        nameProduct.innerText=product.name;
        productInfoDiv.appendChild(nameProduct);
        productInfoDiv.appendChild(priceProduct);
        productInfo.appendChild(productInfoDiv)
        let productFigure=document.createElement("figure")
        let btnCarrito=document.createElement("img")
        btnCarrito.setAttribute("src","./icons/bt_add_to_cart.svg")
        productFigure.appendChild(btnCarrito);
        productInfo.appendChild(productFigure)
        productCard.appendChild(productInfo)
        cardContainer.appendChild(productCard)
    }
}
renderProductos(listaProductos)
