const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const cardsContainer=document.querySelector('.cards-container');
//const img = document.querySelector('.shopping-cart');
const imgOpen = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const main=document.querySelector('.main-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu(){
    const isAsideClosed  =  shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
      shoppingCartContainer.classList.add('inactive');          
    }
 console.log('Click');
    desktopMenu.classList.toggle('inactive');
    
}

function toggleMobileMenu(){
    console.log('Click');
    const isAsideClosed  =  shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
      shoppingCartContainer.classList.add('inactive');          
    }

   mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    /*const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isAsideOpen = !mobileMenu.classList.contains('inactive');*/
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = mobileMenu.classList.contains('inactive');

     if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
     }
    console.log('click');
    shoppingCartContainer.classList.toggle('inactive');
   
}

function openProductDetailAside (){
  imgOpen.classList.remove('inactive');

}

function closeProductDetailAside(){
  imgOpen.classList.add('inactive');
}


const productList = [];
productList.push({
name : 'Bike',
price: 120,
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name : 'Pantalla',
   price: 160,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });
productList.push({
      name : 'Computador',
      price: 620,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name : 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  });
  productList.push({
     name : 'Pantalla',
     price: 160,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
   });
  productList.push({
        name : 'Computador',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  });

/*
<div class="product-card">
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
      </div>
    </div>
*/


function renderProducts(arr){

  for (product of arr){
    const productCard =   document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
    
    const productInfo =   document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv =   document.createElement('div');
    
    const productPrice =   document.createElement('p');
    productPrice.innerText='$' + product.price;
    const productName =   document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
    main.appendChild(cardsContainer);
    
    }
}
renderProducts(productList);
