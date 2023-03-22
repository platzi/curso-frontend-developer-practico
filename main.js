const menuCorreo = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon =document.querySelector('.menu');
const menuCarIcon =document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingcartContainer = document.querySelector('#shoppingcartContainer');
const cardsContainer = document.querySelector('.cards-container');



menuCorreo.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsidecerrado = shoppingcartContainer.classList.contains('inactive');
  
    if (!isAsidecerrado) {
        shoppingcartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
  }
  
  function togglemobileMenu() {
    const isAsideClosed = shoppingcartContainer.classList.contains('inactive');
  
    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCarritoAside() {
    const isAsidecerrado = mobileMenu.classList.contains('inactive');
    
    if (!isAsidecerrado) {
      mobileMenu.classList.add('inactive'); 
    }
    
    shoppingcartContainer.classList.toggle('inactive');
  }

const productostlista = [];
productostlista.push({
    name: 'Bicicleta type Bmx',
    Price: 900,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productostlista.push({
    name: 'Bicileta Todo Terreno Mtb',
    Price: 830,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productostlista.push({
    name: 'Bicicleta S-woks Turbo',
    Price: 700,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productostlista.push({
    name: 'Bicicleta 26 Coaster',
    Price: 550,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productostlista.push({
    name: 'Bicicleta Playera',
    Price: 489,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productostlista.push({
    name: 'Bicicleta Electrica',
    Price: 990,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

            
function renderizadoProductos(arr){

for (product of arr){
    const productosCard = document.createElement('div');
    productosCard.classList.add('product-card');
 
    const productImg =document.createElement('img');
    productImg.setAttribute('src', product.image);
 
    const productosInfo = document.createElement('div');
    productosInfo.classList.add('product-info');
 
    const productosInfoDiv= document.createElement('div');
 
    const productPrice = document.createElement('p');
    productPrice.innerText ='$' + product.Price;
    const productName = document.createElement ('p');
    productName.innerText = product.name;
 
 
     productosInfoDiv.appendChild(productPrice);
     productosInfoDiv.appendChild(productName);
 
     const productosInfoFigure= document.createElement('figure');
     const productImgcart = document.createElement('img');
     productImgcart.setAttribute('src', './icons/shopping carts.svg');
 
     productosInfoFigure.appendChild(productImgcart);
 
     productosInfo.appendChild(productosInfoDiv);
     productosInfo.appendChild(productosInfoFigure);
 
     productosCard.appendChild(productImg);
     productosCard.appendChild(productosInfo);
 
     cardsContainer.appendChild(productosCard);
 }

}
renderizadoProductos(productostlista);