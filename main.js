const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const  menuHamIcon= document.querySelector('.menu');
const  mobileMenu= document.querySelector('.mobile-menu');
const  menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const  aside= document.querySelector('.product-detail');
const  cardsContainer= document.querySelector('.cards-container');
const  mainConteiner = document.querySelector('.main-container')
const index=document.querySelector('body')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAsice);
mainConteiner.addEventListener('click',DesactivarMenusDesktopyMobile)

function toggleDesktopMenu (){
       desktopMenu.classList.toggle ('inactive');
       aside.classList.add('inactive',true)

}

function DesactivarMenusDesktopyMobile (){
       desktopMenu.classList.toggle ('inactive',true);
       aside.classList.add('inactive',true)
       mobileMenu.classList.toggle ('inactive',true);
       aside.classList.add('inactive',true);


}


function toggleMobileMenu (){
mobileMenu.classList.toggle ('inactive');
aside.classList.add('inactive',true);
}

function toggleCarritoAsice (){
       aside.classList.toggle ('inactive');
       mobileMenu.classList.add('inactive',true);       
       desktopMenu.classList.add ('inactive',true);
}

const productList = []
productList.push({
       name:'bike',
       price:120,
       imagent:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
       
});

productList.push({
       name: 'pantalla',
       price: 220,
       imagent: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});

productList.push({
       name: 'Celular',
       price: 320,
       imagent: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});

productList.push({
       name: 'Horno',
       price: 320,
       imagent: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});

productList.push({
       name: 'Juguete',
       price: 320,
       imagent: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,

});

// for (product of productList){

//        const productCard=document.createElement('div')
//        const img=document.createElement('img') 
//        const productInfo=document.createElement('div')
//        const productInfoDiv=document.createElement('div')
//        const price=document.createElement('p')
//        const name=document.createElement('p')
//        const figure=document.createElement('figure')
//        const ProductImgCard=document.createElement('img')
        
    
    
    
    
//        productCard.classList.add('product-card')
//        productInfo.classList.add('product-info')
//        cardsContainer.classList.add
       
    
//        img.setAttribute('src',product.imagent)    
//        price.innerText= '$ ' + product.price
//        name.innerText=product.name
//        ProductImgCard.setAttribute('src', './icons/bt_add_to_cart.svg' )    
    
    
//        productInfo.append(productInfoDiv,figure)
//        productInfoDiv.append(name,price)
//        figure.append(ProductImgCard)
//        productCard.append(img, productInfo)          
//        cardsContainer.append(productCard)
       
//     }    

// for (const país of Object.keys(obj))   
function ProductAdd (arr){
           for (product  of arr){
    
                  const productCard=document.createElement('div')
                  const img=document.createElement('img') 
                  const productInfo=document.createElement('div')
                  const productInfoDiv=document.createElement('div')
                  const price=document.createElement('p')
                  const name=document.createElement('p')
                  const figure=document.createElement('figure')
                  const ProductImgCard=document.createElement('img')
                   
               
               
               
               
                  productCard.classList.add('product-card')
                  productInfo.classList.add('product-info')
                  cardsContainer.classList.add
                  
               
                  img.setAttribute('src',product.imagent)    
                  price.innerText= '$ ' + product.price
                  name.innerText=product.name
                  ProductImgCard.setAttribute('src', './icons/bt_add_to_cart.svg' )    
               
               
                  productInfo.append(productInfoDiv,figure)
                  productInfoDiv.append(name,price)
                  figure.append(ProductImgCard)
                  productCard.append(img, productInfo)          
                  cardsContainer.append(productCard)
                  
               }
    
    }

    index.onload=ProductAdd(productList);