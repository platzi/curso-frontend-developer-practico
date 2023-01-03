const menuEmail=document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const MenuHamIcon=document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const MenuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer =document.querySelector('#shoppingCartContainer');
const CardsContainer =document.querySelector('.cards-container');
const productDetailContainer =document.querySelector('#productDetail');
const ProductDetailCloseIcon = document.querySelector('.product-detail-close');





menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click',toggleMobilemenu);
MenuCarritoIcon.addEventListener('click', toggleMenuCarrito );
ProductDetailCloseIcon.addEventListener('click', closeProductoDetail)

function toggleDesktopMenu () {

     const isProductoClosed= shoppingCartContainer.classList.contains('inactive');
     if (!isProductoClosed){
          shoppingCartContainer.classList.add('inactive');
     }

     desktopMenu.classList.toggle('inactive')
}

function toggleMobilemenu (){
     const isProductoClosed= shoppingCartContainer.classList.contains('inactive');
     if (!isProductoClosed){
          shoppingCartContainer.classList.add('inactive');
     }

     closeProductoDetail()
     mobileMenu.classList.toggle('inactive');


}

function toggleMenuCarrito (){
     const isMobileMenuClosed= mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed){
     mobileMenu.classList.add('inactive');
}

const isProductDetailClose= productDetailContainer.classList.contains('inactive');

if (!isProductDetailClose){
     productDetailContainer.classList.add('inactive');
}
     shoppingCartContainer.classList.toggle('inactive');
     

}

function openProducDetail(){
     shoppingCartContainer.classList.add('inactive');
    
     productDetailContainer.classList.remove('inactive');

}

function closeProductoDetail(){
     productDetailContainer.classList.add('inactive');
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
     name: 'Carro',
     price: 235220,
     imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({  
     name: 'Escoba',
     price: 13,
     imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({  
     name: 'Celular',
     price: 2350,
     imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderproduct(arr){
     for (product of arr){
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
     
          const img =document.createElement('img');
          img.setAttribute('src', product.imagen);
          img.addEventListener('click', openProducDetail);
     
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