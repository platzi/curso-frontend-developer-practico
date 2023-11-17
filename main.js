// menu pequeño con click
const navEmail = document.querySelector(".navbar-email")
const menupequeño = document.querySelector(".desktop-menu")
/* menu  en responsivo */
const menuMostrar = document.querySelector(".mobile-menu")
const menuResponsive = document.querySelector(".menu")
// menu carro de comprar
const menuCarrito = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

const cardsContainer = document.querySelector(".cards-container")

// funcion para mostrar o ocultar el menupequño  menu pequeño con click
navEmail.addEventListener("click",mostrarOcultarMenu)

 function mostrarOcultarMenu(){
    const isaiseclosed = aside.classList.contains("inactive")
    if (!isaiseclosed){
       aside.classList.add("inactive")
     }
    menupequeño.classList.toggle("inactive") // se coloca toggle para agrgar si tiene o no la la clase inactive
    
 }

/* menu  en responsivo funcion */
menuResponsive.addEventListener("click",mostrarMenu)
function mostrarMenu(){
    const isasideclosed = aside.classList.contains("inactive")
    if (!isasideclosed){
       aside.classList.add("inactive")
     }
   
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
   
     aside.classList.toggle("inactive")
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

function renderProduct(array){
for (const product of array) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
   
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
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