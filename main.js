const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');
const menuBurguerIcon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const menuCarritoIco = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseButton = document.querySelector('.product-detail-close'); 

const cardsContainer = document.querySelector('.cards-container');




navbar_email.addEventListener('click',toggleDesktopMenu);
desktop_menu.addEventListener('mouseleave',toggleDesktopMenu);


menuBurguerIcon.addEventListener('click',toggleMobileMenu);


menuCarritoIco.addEventListener('click',toggleShopMenu);
shoppingCartContainer.addEventListener('mouseleave',toggleShopMenu);

/**Para que funciona toggle? Esta propiedad de classList, lo que hace es revisar, si el elemento actual, tiene esta clase, si la tiene
 * procede a removersela, sino la tiene, procede agregar esa cLASE. Esto ahorra codigo, permitiendo ahorrar un add or remove de un classList
 */
function toggleDesktopMenu(){
    desktop_menu.classList.toggle('inactive');
    if(!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.toggle('inactive');
    }
    if(!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive');
    }
}

function toggleMobileMenu(){
    mobile_menu.classList.toggle('inactive');
    if(!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.toggle('inactive');
    }
}

function toggleShopMenu(){
    shoppingCartContainer.classList.toggle('inactive');
   const isDesktopMenuOpen = desktop_menu.classList.contains('inactive');
   const isMobileMenuOpen = mobile_menu.classList.contains('inactive'); 
  
   if(!isDesktopMenuOpen){
        desktop_menu.classList.toggle('inactive');
    }

    if(!isMobileMenuOpen){
        mobile_menu.classList.toggle('inactive');
    }

    if(!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive');
    }
}


function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');

        if(!shoppingCartContainer.classList.contains('inactive')){
            shoppingCartContainer.classList.add('inactive');
        }
        if(!desktop_menu.classList.contains('inactive')){
            desktop_menu.classList.add('inactive');
        }
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

productDetailCloseButton.addEventListener('click', closeProductDetailAside);

const productList = [];

productList.push({
    name:'bike',
    price:10500,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name:'Laptop',
    price:35000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Mouse',
    price:950,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name:'Pelota',
    price:257,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



/*<div class="product-card">
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
      </div> */
 

      function renderProduct(arr){
        for(product of arr){
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            /*Create image and use current object position image url */
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
        
            productImg.addEventListener('click',openProductDetailAside);

            /*Create product info div */
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
            productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        
            productInfoFigure.appendChild(productImgCart);
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardsContainer.appendChild(productCard);
        }
      }

      renderProduct(productList);