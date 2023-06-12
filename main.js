const navEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon= document.querySelector('.product-detail-close');
const MenuHamIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
// const aside= document.querySelector('.product-detail');
const shoppingCartContainer= document.querySelector('#shoppingCartContainer');
const cardsContainer= document.querySelector('.cards-container');

const productDetailContainer= document.querySelector ('#productDetail');



navEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu(){
    
    const isAsideClosed= desktopMenu.classList.contains('inactive');
    if(!isAsideClosed){
       shoppingCartContainer.classList.add('inactive');
    }  

    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {  
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');   
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    
    
    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');   
        }
        const   isProductDetailClosed=productDetailContainer.classList.contains('inactive');
    
         

        if(!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');   
            }

  shoppingCartContainer.classList.toggle('inactive')
}
   

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');
}





// function toggleDesktopMenu() {
//     aside.classList.toggle('inactive');
//     desktopMenu.classList.toggle('inactive');
//   }
  
//   function toggleMobileMenu() {
//     aside.classList.toggle('inactive');
//     mobileMenu.classList.toggle('inactive');
//   }

// navEmail.addEventListener('click', toggleDesktopMenu);
// MenuHamIcon.addEventListener('click', toggleMobileMenu);
// menuCarritoIcon.addEventListener('click', toggleMobileMenu);

// function toggleDesktopMenu() {
//   desktopMenu.classList.toggle('inactive');
//   aside.classList.add('inactive');
// }

// function toggleMobileMenu() {
//   mobileMenu.classList.toggle('inactive');
//   aside.classList.add('inactive');
// }


 const productList = [];
 productList.push({
    name:'bike',
    price:120,
    image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
     });
          productList.push({
        name:'Pantalla',
        price:220,
        image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
         });
         productList.push({
            name:'Compu',
            price:620,
            image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
             });
            
        // <div class="product-card">
        //    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        //      <div class="product-info">
        //        <div>
        //          <p>$120,00</p>
        //          <p>Bike</p>
        //        </div>
        //        <figure>
        //          <img src="./icons/bt_add_to_cart.svg" alt="">
        //        </figure>
        //      </div>
        //  </div>       
  

function renderProducts(arr){
    for(product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
        // product={name.price,image} product.image
        const productImg =document.createElement('img');
        productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside);
        
        
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
        
           const productInfoDiv= document.createElement('div');
           const productPrice= document.createElement('p');
           productPrice.innerText='$'+ product.price;
            
           const productName= document.createElement('p');
           productName.innerText=product.name; 
        
           productInfoDiv.appendChild(productPrice);
           productInfoDiv.appendChild(productName);
        
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        
        
            cardsContainer.appendChild(productCard);
        
        
        }
        
}

renderProducts(productList);