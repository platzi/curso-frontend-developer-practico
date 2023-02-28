const boton = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const botonMobile = document.querySelector('.menu');
const menuHamburguesa = document.querySelector('.mobile-menu');
const incoMenu = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')



boton.addEventListener('click', () => {
  menu.classList.toggle('inactive');
  
  if (!aside.classList.contains('inactive')) {
    aside.classList.add('inactive');
  
  }
});

botonMobile.addEventListener('touchstart', () => {
     
    menuHamburguesa.classList.toggle('inactive');
    
    aside.classList.add('inactive')
  });


incoMenu.addEventListener('click', () => {
   
  aside.classList.toggle('inactive')
  
  menuHamburguesa.classList.add('inactive') || menu.classList.add('inactive')
})



 const productList = []

 productList.push ({
  name: 'bike',
  price: 120,
  imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'


 })

 productList.push ({
  name: 'Mouse',
  price: 20,
  imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'


 })
 productList.push ({
  name: 'Computador',
  price: 800,
  imagen:'https://www.pexels.com/es-es/foto/bicicleta-de-crucero-roja-1595476/'

 })



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
    const cardContainer = document.querySelector('.cards-container')
   
    productCard.classList.add('product-card')
    imgCard.setAttribute('src', producto.imagen)
    productInfo.classList.add('product-info')
    productPrice.innerText = '$ ' + producto.price
    productDetail.innerHTML = '$ ' + producto.name
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    productInfo.append(productDiv, productFigure)
    productDiv.append(productPrice, productDetail)
    productFigure.append(productImgCart)
    productCard.append(imgCard, productInfo)
    
    cardContainer.appendChild(productCard)
    
  } 
}

renderPrduct(productList)