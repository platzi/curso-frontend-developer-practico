const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener('click', togglemenuMobile);
menuCarritoIcon.addEventListener('click', togglemenuCarritoIcon);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);



function toggleDesktopMenu(){
     const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
     if (!isshoppingCartContainerClosed){
          shoppingCartContainer.classList.add('inactive');
              //si el mobile menu esta abierto, hay que cerrarlo
         }
desktopMenu.classList.toggle('inactive');
}

function togglemenuMobile(){
     
     const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

     if (!isshoppingCartContainerClosed){
          shoppingCartContainer.classList.add('inactive');
              //si el mobile menu esta abierto, hay que cerrarlo
         }
         closeProductDetailAside();
     mobileMenu.classList.toggle('inactive'); 
}

function togglemenuCarritoIcon(){
     const ismobileMenuClosed = mobileMenu.classList.contains('inactive');


     //aside.classList.toggle('inactive);
     
     if (!ismobileMenuClosed){
      mobileMenu.classList.add('inactive');
          //si el mobile menu esta abierto, hay que cerrarlo
     }

     const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


     //aside.classList.toggle('inactive);
     
     if (!isProductDetailClosed){
          productDetailContainer.classList.add('inactive');
          //si el mobile menu esta abierto, hay que cerrarlo
     }
     
     shoppingCartContainer.classList.toggle('inactive'); 

     
}

function openProductDetailAside(){
     shoppingCartContainer.classList.add('inactive');  
     productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
     productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
     name: 'Bike',
     price: 120,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
     name: 'Pantalla',
     price: 120,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
     name: 'Xbox',
     price: 120,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
     name: 'Laptop',
     price: 120,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
     name: 'SmartPhone',
     price: 120,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts (arr){
     for(product of arr){
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          
             // product = {name, price, image} product.image
          const productImg = document.createElement('img');
          productImg.setAttribute('src', product.image);
          productImg.addEventListener('click', openProductDetailAside);
     
          const productInfo = document.createElement('div');
          productInfo.classList.add('product-info');
     
          const productInfoDiv = document.createElement('div');
     
          
          const productInfoPrice = document.createElement('p');
          productInfoPrice.innerText = '$' + product.price;
     
          const productInfoName = document.createElement('p');
          productInfoName.innerText = product.name;
     
          productInfoDiv.appendChild(productInfoPrice);
          productInfoDiv.appendChild(productInfoName);
     
          const productInfoFigure = document.createElement('figure');
          const productImgCart = document.createElement('img');
          productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
          productInfoFigure.appendChild(productImgCart);
     
          productInfo.appendChild(productInfoDiv);
          productInfo.appendChild(productInfoFigure);
     
          productCard.appendChild(productImg);
          productCard.appendChild(productInfo);
     
          cardsContainer.appendChild(productCard);
       
     }
     
}

renderProducts(productList);

