// menu pequeño con click
const navEmail = document.querySelector(".navbar-email")
const menupequeño = document.querySelector(".desktop-menu")
/* menu  en responsivo */
const menuMostrar = document.querySelector(".mobile-menu")
const menuResponsive = document.querySelector(".menu")
// menu carro de comprar
const menuCarrito = document.querySelector(".navbar-shopping-cart")
const shoppingCardsContainer= document.querySelector("#shopingCart")
//  lista de productos

const cardsContainer = document.querySelector(".cards-container")
// interaccion entre los productos
const productdeatilContainer = document.querySelector("#productDetail")
const botonX = document.querySelector(".product-detail-close")
botonX.addEventListener("click", closeProduct)

// funcion para mostrar o ocultar el menupequño  menu pequeño con click
navEmail.addEventListener("click",mostrarOcultarMenu)

 function mostrarOcultarMenu(){
    const isaiseclosed = shoppingCardsContainer.classList.contains("inactive")
    if (!isaiseclosed){
       shoppingCardsContainer.classList.add("inactive")
     }
    menupequeño.classList.toggle("inactive") // se coloca toggle para agrgar si tiene o no la la clase inactive
    
 }

/* menu  en responsivo funcion */
menuResponsive.addEventListener("click",mostrarMenu)
function mostrarMenu(){
    const isasideclosed = shoppingCardsContainer.classList.contains("inactive")
    if (!isasideclosed){
       shoppingCardsContainer.classList.add("inactive")
     }

     closeProduct() // se llama la funcion 
   
    menuMostrar.classList.toggle("inactive")
}

// menu carro de comprar funcion
menuCarrito.addEventListener("click",toggleCarrito)
function toggleCarrito (){
    const ismobileClosed=menuMostrar.classList.contains("inactive")
    const ispequeñoclosed = menupequeño.classList.contains("inactive")
    
    if (!ismobileClosed ||!ispequeñoclosed){
        menuMostrar.classList.add("inactive")
        menupequeño.classList.add("inactive")
        
        
    }
    
// interaccion entre los productos
const cerrar= productdeatilContainer.classList.contains("inactive")
if(!cerrar){
productdeatilContainer.classList.add("inactive")
}
    
     shoppingCardsContainer.classList.toggle("inactive")
}

// interaccion entre los productos
function openProductoaside (){
    shoppingCardsContainer.classList.add("inactive")

    productdeatilContainer.classList.remove("inactive")
}
function closeProduct(){
productdeatilContainer.classList.add("inactive")
}

//  lista de productos

const productoArry = [];
productoArry.push({
    name : "bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productoArry.push({
    name: "pantalla",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productoArry.push({
   name: "pc",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productoArry.push({
    name: "pc",
     price:120,
     image:"https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg"
 })

function renderProduct(array){
for (const product of array) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
   
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener("click",openProductoaside)

  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);

 }}
renderProduct(productoArry)


