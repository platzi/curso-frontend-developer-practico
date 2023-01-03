const menuEmail=document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const MenuHamIcon=document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const MenuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const productDetail =document.querySelector('.product-detail');
const CardsContainer =document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click',toggleMobilemenu);
MenuCarritoIcon.addEventListener('click', toggleMenuCarrito );

function toggleDesktopMenu () {

     const isProductoClosed= productDetail.classList.contains('inactive');
     if (!isProductoClosed){
          productDetail.classList.add('inactive');
     }

     desktopMenu.classList.toggle('inactive')
}

function toggleMobilemenu (){
     const isProductoClosed= productDetail.classList.contains('inactive');
     if (!isProductoClosed){
          productDetail.classList.add('inactive');
     }

     mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito (){
     const isMobileMenuClosed= mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed){
     mobileMenu.classList.add('inactive');
}
     productDetail.classList.toggle('inactive');
     
}

const productList = [];
productList.push({  
     name: 'bike',
     price: 120,
     imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({  
     name: 'motorcicle',
     price: 1350,
     imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({  
     name: 'Patin',
     price: 2350,
     imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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

*/


function renderproduct(arr){
     for (product of arr){
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
     
          const img =document.createElement('img');
          img.setAttribute('src', product.imagen);
     
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
     
          productCard.appendChild(img);
          productCard.appendChild(productInfo);
     
          CardsContainer.appendChild(productCard);
     }
}

renderproduct(productList);