//Fusión del menú en desktop
let navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const closeIcon = document.querySelector('.product-detail-close');


navEmail.addEventListener('click',()=>{
    if(!aside.classList.contains('inactive')|| !productDetailContainer.classList.contains('inactive')){
        aside.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        
    }
    desktopMenu.classList.toggle('inactive');  
});


// Fusion menu en mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click',()=>{
    if(!aside.classList.contains('inactive')||!productDetailContainer.classList.contains('inactive')){
        aside.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');  
});

//MY ORDER
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shopping-cart-container');

const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail')

menuCarritoIcon.addEventListener('click',()=>{
    if(!mobileMenu.classList.contains('inactive') ||!desktopMenu.classList.contains('inactive') ||!productDetailContainer.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        
    }
  
    aside.classList.toggle('inactive');
   
});
closeIcon.addEventListener('click',()=>{
    productDetailContainer.classList.add('inactive');
});

function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',()=>{
            if(!mobileMenu.classList.contains('inactive') ||!desktopMenu.classList.contains('inactive') || !aside.classList.contains('inactive')){
                mobileMenu.classList.add('inactive');
                desktopMenu.classList.add('inactive');
                aside.classList.add('inactive');
                
            }
            productDetailContainer.classList.toggle('inactive')
        });
            
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productPrice.innerText='$'+product.price;
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
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
