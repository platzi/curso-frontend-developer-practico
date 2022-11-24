const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);


function toggleDestopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
   desktopMenu.classList.toggle('inactive')
} 

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }
    mobileMenu.classList.toggle('inactive')
} 

function toggleCarritoMenu(){

    const IsMobileMenuClose = mobileMenu.classList.contains('inactive');
    const IsdesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    // shoppingCartContainer.classList.toggle('inactive')

    if(!IsMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if(!IsdesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
} 

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s'
});

productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s'
});

productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s'
});

// for(product of productList){
//     console.log(product.name)
// }

// for(product in productList){
//     console.log(product)
// }


//  <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> 




function renderProducts(arr){
    for(product of arr){
        const productCard =  document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
      
        const productInfo =  document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDivVacio =  document.createElement('div');
      
        const productPrice =  document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName=  document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDivVacio.appendChild(productPrice);
        productInfoDivVacio.appendChild(productName);
      
        const productInfoFigure =  document.createElement('figure');
        const productInfoImgCart =  document.createElement('img');
        productInfoImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productInfoImgCart);
      
        productInfo.appendChild(productInfoDivVacio);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
       cardContainer.appendChild(productCard);
      }
}

renderProducts(productList);