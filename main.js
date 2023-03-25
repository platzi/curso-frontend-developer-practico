const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const hamburMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer =document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDeskotMenu)
hamburMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDeskotMenu() {

    const  isAsideClose = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive'); 
}

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   const  isAsideClose = shoppingCartContainer.classList.contains('inactive')

        if(!isAsideClose){
            shoppingCartContainer.classList.add('inactive'); 
}

mobileMenu.classList.toggle('inactive')
}
   
function toggleCarritoAside() {

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

   
  if(!isMobileMenuClose){

        mobileMenu.classList.add('inactive');   
    }
    shoppingCartContainer.classList.toggle('inactive');
    
 }

 const productList = [];
 productList.push({
    name:'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })

 productList.push({
    name:'Patineta',
    precio: 100,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })

 productList.push({
    name:'Triciclo',
    precio: 80,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })
 

 
function renderProduts(array){
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText ='$' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
      
        productInfoFigure.appendChild(productImgCard)
      
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardsContainer.appendChild(productCard)
       }
}


renderProduts(productList);