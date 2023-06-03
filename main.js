const boton = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const botonMobile = document.querySelector('.menu');
const menuHamburguesa = document.querySelector('.mobile-menu');
const incoMenu = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.carritoDeCompras')
const closeDetail = document.querySelector('.product-detail-close')
const detailsProduct = document.querySelector('.product-detail')
const cardContainer = document.querySelector('.cards-container')
const containrCart = document.querySelector('.shopping-cart')
const count = document.getElementById('cantidad')
const contenedorTotal = document.querySelector("#total");





boton.addEventListener('click', () => {
  menu.classList.toggle('inactive');
  
  aside.classList.add('inactive') ||  detailsProduct.classList.add('inactive')
    
  
  
}); 

botonMobile.addEventListener('touchstart', () => {
     
    menuHamburguesa.classList.toggle('inactive');
    
    aside.classList.add('inactive') || detailsProduct.classList.add('inactive')
  });


incoMenu.addEventListener('click', () => {
   
  aside.classList.toggle('inactive')
  
  menuHamburguesa.classList.add('inactive') || menu.classList.add('inactive') || detailsProduct.classList.add('inactive')
})

closeDetail.addEventListener('click',() => {
detailsProduct.classList.add('inactive')
})



const productList = []

 productList.push ({
  id: 'bicicleta',
  cantidad: 0,
  name: 'bike',
  price: 120,
  imagen:'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


 })

 productList.push ({
  id: 'muse',
  cantidad: 0,
  name: 'Mouse',
  price: 20,
  imagen:'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


 })
 productList.push ({
  id: 'computador',
  cantidad: 0,
  name: 'Computador',
  price: 800,
  imagen:'https://images.pexels.com/photos/4005569/pexels-photo-4005569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

 })

 productList.push ({
  id: 'celular',
  cantidad: 0,
  name: 'Celular',
  price: 350,
  imagen:'https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

 })

 productList.push ({
  id: 'teclado',
  cantidad: 0,
  name: 'Teclado',
  price: 85,
  imagen:'https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

 })

 let productosEnCarrito = [];



function renderPrduct(arr){
  for (producto of productList) {
    const productCard = document.createElement('div')
    const imgCard = document.createElement('img')
    const productInfo= document.createElement('div')
    const productDiv = document.createElement('div')
    const productPrice = document.createElement('p')
    const productDetail = document.createElement('p')
    const productFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    const botonAgregar = document.createElement('button')
   
   
    productCard.classList.add('product-card')
    imgCard.setAttribute('src', producto.imagen)
    imgCard.addEventListener('click', () => {
    detailsProduct.classList.remove('inactive')
    menuHamburguesa.classList.add('inactive') || aside.classList.add('inactive') || menu.classList.add('inactive') 
      
      
    })
    productInfo.classList.add('product-info')
    productPrice.innerText = '$ ' + producto.price
    productDetail.innerHTML = producto.name
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    botonAgregar.addEventListener('click', addcart)
    productInfo.append(productDiv, productFigure)
    productDiv.append(productPrice, productDetail)
    botonAgregar.append(productImgCart)
    botonAgregar.classList.add('agregar')
    botonAgregar.id = producto.id
    productFigure.append(botonAgregar)
    productCard.append(imgCard, productInfo)
    
    cardContainer.appendChild(productCard)
    
  } 
}

renderPrduct(productList) // aqui renderizamos los productos en el home 



function addcart(e){

  
  const idBoton = e.currentTarget.id;
  
  const productoAgregado = productList.find(producto => producto.id === idBoton); //verifica que el boton seleccione el producto por su id 
  
  if(productosEnCarrito.some(producto => producto.id === idBoton)) { // verifica si ya se agrego el producto
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;
   } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
   
}

console.log(productosEnCarrito)
actualizarNumerito()
renderizarCarrito()

}



function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  
  count.innerText = nuevoNumerito;
}


function renderizarCarrito (){
  containrCart.innerHTML = "";
 
    productosEnCarrito.forEach( producto =>{
  
  
    const cartFigure = document.createElement('figure')
    const imgCart = document.createElement('img')
    const priceCart = document.createElement('p')
    const detailCart = document.createElement('p')
    const imgCartClose = document.createElement('img')
    const carritoCantidad = document.createElement('p')
    
    imgCart.setAttribute('src',producto.imagen) 
    cartFigure.append(imgCart) 
    priceCart.innerText = '$ ' + producto.price * producto.cantidad
    /* carritoCantidad.innerHTML = 'X ' + producto.cantidad */
    detailCart.innerText =  producto.name 
    
    
    imgCartClose.setAttribute('src', './icons/icon_close.png')
    
    
    
    containrCart.append(cartFigure,  detailCart, priceCart, imgCartClose)

    
    })
 actualizarTotal()
  
}

function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce((SubT, producto) => SubT + (producto.price * producto.cantidad), 0);
  console.log(totalCalculado)
  contenedorTotal.innerText = `$${totalCalculado}`;
}



 

