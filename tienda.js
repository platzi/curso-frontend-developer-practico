const correo = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const btnburgue = document.querySelector('.menu')
const mobilMenu = document.querySelector('.mobile-menu ')
const ventana = document.querySelector('.product-detail')
const carrito = document.querySelector('.carrito')
const blockdeTalles =document.querySelector('.product-detail-segundary')
const btnclosedetalles = document.querySelector('.product-detail-segundary-close')
 


// configuracion del correo

correo.addEventListener('click',aparecer)

function aparecer(){
    desktopMenu.classList.toggle('inactive');
}
// este es el menu mobil 

btnburgue.addEventListener('click',menuMobil)

function menuMobil(){
 const ventanaOpen= ventana.classList.contains('inactive')
 const closTalle=blockdeTalles.classList.contains('inactive')

   if(!ventanaOpen ){
    ventana.classList.add('inactive')
    }
    if(!closTalle){
        blockdeTalles.classList.add('inactive')
        }
    mobilMenu.classList.toggle('inactive');
}

// esta es la ventana del carrito 
carrito.addEventListener('click',ventanaCarrito)

function ventanaCarrito(){
 const mobilMenuOpen= mobilMenu.classList.contains('inactive')
 const talles = blockdeTalles.classList.contains('inactive')
if(!mobilMenuOpen ){
 mobilMenu.classList.add('inactive')
 }
 ventana.classList.toggle('inactive');
 if(!talles){
   blockdeTalles.classList.add('inactive')
   }


}

// empezamos con nuestra area de productos

const containerCards = document.querySelector('.cards-container')
const productCards = document.querySelector('.product-card')

const product = []
 product.push({
    name: 'bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 1000,
 })
 product.push({
    name: 'pantalla',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 1500,
 })
 product.push({
    name: 'moto',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 2500,
 })
  
function bloqueCardsProductos(arr) {

    for (const recorProduc of arr) {
        const productCards = document.createElement("div");
        productCards.classList.add("product-card");
        const imgProduct = document.createElement("img");
        imgProduct.addEventListener('click',open)
        imgProduct.src = recorProduc.image;      //tambien puedo usar la siguiente sintasis imgProduct.setAttribute("src", recorProduc.image)
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        const blockPriceName = document.createElement("div");
        const pPrice = document.createElement("p");
        pPrice.textContent = recorProduc.price; 
        const pName = document.createElement("p");
        pName.textContent = recorProduc.name; 
        const figure = document.createElement("figure");
        const imgFigureIcon = document.createElement("img");
        imgFigureIcon.src = "./icons/bt_add_to_cart.svg";
        figure.appendChild(imgFigureIcon);
        blockPriceName.appendChild(pPrice);
        blockPriceName.appendChild(pName);
        productInfo.appendChild(blockPriceName);
        productInfo.appendChild(figure);
        productCards.appendChild(imgProduct);
        productCards.appendChild(productInfo);
        containerCards.appendChild(productCards);
        
     }
    
}
function open() {
   const close= ventana.classList.contains('inactive')
   const closeMenu= mobilMenu.classList.contains('inactive')
   if (!close) {
      ventana.classList.add('inactive')
   }
   blockdeTalles.classList.remove('inactive')
   if (!closeMenu) {
         mobilMenu.classList.add('inactive')
      }
}

bloqueCardsProductos(product) 

btnclosedetalles.addEventListener('click',btnclose)

function btnclose() {
   blockdeTalles.classList.add('inactive')
   
}

