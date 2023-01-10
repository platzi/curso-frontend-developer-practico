const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
MenuCarritoIcon.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive'); 

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}


function toggleMobileMenu(){
    
    const isAsideClosed = aside.classList.contains('inactive');  
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}


function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');  
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    
    }



    aside.classList.toggle('inactive');
}


const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Compu',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
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
      </div>  */
function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div'); 
        productCard.classList.add('product-card');
   
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
   
   
        const productInfo = document.createElement('div'); 
        productInfo.classList.add('product-info');
   
        const productInfoDiv = document.createElement('p');
   
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
   
        const ProductName  = document.createElement('p');
        ProductName.innerText = product.name;
   
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(ProductName);
   
        const ProductInfoFigure = document.createElement('figure');
        const ProductImgCart = document.createElement('img');
   
        ProductImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
        ProductInfoFigure.appendChild(ProductImgCart);
   
        productInfo.appendChild(productInfoDiv); 
        productInfo.appendChild(ProductInfoFigure);
   
   
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
   
        cardsContainer.appendChild(productCard);
     }
}

renderProducts(productList);


