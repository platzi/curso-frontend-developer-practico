console.log('JS Conectado');

myOrderList =[];



myOrderList.push({
    name: 'Bike',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
myOrderList.push({
    name: 'Bike',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
myOrderList.push({
    name: 'Bike',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
myOrderList.push({
    name: 'Bike',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



//EMAIL MENU
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');



//MOBILE MENU
const burguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


//Puedo leerlo asi:
//A traves del click en el shoppingCartIcon muestro el elemento aside, para hacerlo debo traer ambos elementos a variables de JavaScript

//CARRITO DE COMPRAS
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart'); //Aqui guardo en una variable, el elemento de html mediante el cual hacen click 
const contadorCarrito= document.querySelector('.shoppingcart-counter');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer'); //Aqui guardo en una variable, el elemento que mostraré atraves del click 
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const countShoppingCart = document.querySelector('.navbar-shopping-cart-number');
const myOrderContent = document.querySelector('.my-order-content');
const orderT = document.querySelector('.order');
const btnCheckout = document.querySelector('#checkout')
const vTotal = document.querySelector('#total')





//PRODUCT DETAIL

const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productCartIcon  = document.querySelector('#addToCart');


//EVENT LISTENER DE ICONOS
menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenuIcon.addEventListener('click',toggleMobileMenu); 
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetail);
productCartIcon.addEventListener('click', renderShoppingCart(myOrderList));


//FUNCIONES

//Entra a cada funcion cuando hago click en uno de los iconos
function toggleDesktopMenu(){ 
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');    
    
    if(!isAsideClosed){
        desktopMenu.classList.add('inactive');  
        shoppingCartContainer.classList.add('inactive');      
        
    }
    desktopMenu.classList.toggle('inactive'); 
       
}

function toggleMobileMenu(){   
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside(); //Ejecuto esta funcion cada vez que se le de click al menu hamburguesa
    mobileMenu.classList.toggle('inactive');  
}

function toggleCarritoAside(){
   
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive'); //Devuelve true cuando mobileMenu esta inactivo   
    const isDesktopMenuClosed =  desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');  
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed =  productDetailContainer.classList.contains('inactive'); //Devuelve true cuando mobileMenu esta inactivo   
        
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');  
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

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}


const productList =[]; 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Microphone',
    price: 50,
    image: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=400',
});

productList.push({
    name: 'Tv',
    price: 200,
    image: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=400',
});

productList.push({
    name: 'Pc',
    price: 300,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400',
});



renderProducts(productList);


function renderProducts(array){

    for (product of array){
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);


    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');        
        productInfoFigure.setAttribute('id','addToCart')  
        
        const productImgCart = document.createElement('img');
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')  
        
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        productInfo.appendChild(productInfoFigure);
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }

}



function renderShoppingCart(array){   

    var valorTotal =0;    

    for (product of array){  
        
        valorTotal += product.price;             
        contadorCarrito.innerText = array.length;   
        vTotal.innerText = valorTotal;  

        const shoppingCart = document.createElement('div');
        shoppingCart.classList.add('shopping-cart');

        const shoppingCartFigure = document.createElement('figure');
        
        const shoppingCartImage = document.createElement('img');
        shoppingCartImage.setAttribute('src', product.image);
        
        const shopingCartName =document.createElement('p');
        shopingCartName.innerText = product.name;

        const shopingCartPrice =document.createElement('p');
        shopingCartPrice.innerText = '$' + product.price;

        const shoppingImage = document.createElement('img');
        shoppingImage.setAttribute('src','./icons/icon_close.png');
        shoppingImage.setAttribute('alt','close');           
        
        shoppingCartFigure.appendChild(shoppingCartImage);

        shoppingCart.appendChild(shoppingCartFigure);
        shoppingCart.appendChild(shopingCartName);
        shoppingCart.appendChild(shopingCartPrice);
        shoppingCart.appendChild(shoppingImage);     
        myOrderContent.appendChild(shoppingCart);                   
    }

        

}





        
  
        

        
            

        
    
        


    







