const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const closeDetailIcon = document.querySelector('.each-product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarContainer = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.each-product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
closeDetailIcon.addEventListener('click', toogleProductDetail); 



function toogleDesktopMenu(){
    const isShoppingCarContainerClosed = shoppingCarContainer.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isShoppingCarContainerClosed){
        shoppingCarContainer.classList.add('inactive');    
      }
    if (!isProductDetailContainerClosed){
        productDetailContainer.classList.add('inactive');    
      }
    
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isShoppingCarContainerClosed = shoppingCarContainer.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isShoppingCarContainerClosed){
        shoppingCarContainer.classList.add('inactive');    
      }
    if (!isProductDetailContainerClosed){
        productDetailContainer.classList.add('inactive');    
      }

    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');    
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');    
      }
    
      if (!isProductDetailContainerClosed){
        productDetailContainer.classList.add('inactive');    
      }
    
    shoppingCarContainer.classList.toggle('inactive');
   }
      
   function toogleProductDetail(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');    
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');    
      }
    
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');    
      }
   
    productDetailContainer.classList.toggle('inactive');
   }

const productList = [];
productList.push({
    name: 'Bike',
    price : 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Pantalla',
    price : 80,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Computador',
    price : 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Tablet',
    price : 230,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Celular',
    price : 310,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/* <div class="product-card">
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
    </div>  */


function renderProducts(arr){
    for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    //product= {name, price, image} -> product.image//
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

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
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImageCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);