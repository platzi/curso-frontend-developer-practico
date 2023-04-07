const menuEmail = document.querySelector('.navbar-email');
const  desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
//const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIncon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
MenuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIncon.addEventListener('click',closeProductDetailAside);

function closeProductDetailAside(){

    productDetailContainer.classList.add('inactive');
}

function toggleDesktopMenu(){

    const isasideMenuClosed = aside.classList.contains('inactive'); 
    if(!isasideMenuClosed)
    {
        aside.classList.add('inactive');

    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isasideMenuClosed = aside.classList.contains('inactive'); 
    if(!isasideMenuClosed)
    {
        aside.classList.add('inactive');

    }
    const isproductDetailContainer = productDetailContainer.classList.contains('inactive'); 
    if(!isproductDetailContainer)
    {
        productDetailContainer.classList.add('inactive');

    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
   // 
    //
    if(!isMobileMenuClosed){
    
            mobileMenu.classList.add('inactive');
        }
        aside.classList.toggle('inactive');
    
        const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 
        // 
         //
         if(!isProductDetailClosed){
         
                 productDetailContainer.classList.add('inactive');
             }
            // shoppingCartContainer.classList.toggle('inactive');
    }

 

function openProductDetailAside(){


    
   aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');






    
}





const productList =[];
productList.push({
name:'Bike',
price: 120,
Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})  ;  
productList.push({
    name:'Carro',
    price: 1000,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
    })  ;  
productList.push({
        name:'televisor',
        price: 30000,
        Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        
        })  ;      
productList.push({
            name:'televisor',
            price: 30000,
            Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            
            })  ;      
productList.push({
                name:'televisor',
                price: 30000,
                Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                
                })  ;      
productList.push({
                    name:'televisor',
                    price: 30000,
                    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    
                    })  ;      
                        
       
function renderProducts(arr){

    for(product of arr){
        const producCard = document.createElement('div');
        
        producCard.classList.add('product-card');
        const productImg =document.createElement('img');
        // product = {mane , price image}
        productImg.setAttribute('src',product.Image);
        productImg.addEventListener('click',openProductDetailAside);
        const producInfo = document.createElement('div');
        producInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
       // producInfoDiv.classList.add('product-info');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' +product.price;
        const productName = document.createElement('p');
        productName.innerText =product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);
     ;
        producInfo.appendChild(productInfoDiv);
        producInfo.appendChild(productInfoFigure);
        producCard.appendChild(productImg);
        producCard.appendChild(producInfo);
       
      //  cardsContainer.appendChild(producCard);
        cardsContainer.appendChild(producCard);


     }
    

}
renderProducts(productList);