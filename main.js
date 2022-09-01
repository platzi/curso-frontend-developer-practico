const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const cardContainer = document.querySelector('.cards-container')



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive');
    
    // aside.classList.toggle('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
      const isAsideClose = aside.classList.contains('inactive');
    
    // aside.classList.toggle('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive')
    }

   mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClose = desktopMenu.classList.contains('inactive');

    // aside.classList.toggle('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isdesktopMenuClose){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
 }

 const productList = [];

 productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })
 productList.push({
    name: 'pantall',
    price: 170,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })

 productList.push({
    name: 'computador',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })
 productList.push({
    name: 'computador2',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })

// <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
// </div>

 function renderProduct(arr){
    for (product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv  =document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productFigure= document.createElement('figure');
    
        const productImgCar= document.createElement('img');
        productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCar);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    
    
     }
 }

 renderProduct(productList)