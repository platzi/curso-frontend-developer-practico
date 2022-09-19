
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu= document.querySelector('.mobile-menu');
const shoppingCartContainer= document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer= document.querySelector('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);        
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
// menuCarritoIcon.addEventListener('click', toggleCarritoAside);
// // productDetailCloseIcon.addEventListener('click', toggleCarritoAside);
// shoppingCartContainer.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(isMobileMenuClosed) {

        if (!isshoppingCartContainerClosed){
            //Si el mobile menu esta open se debe cerrar
            shoppingCartContainer.classList.add('inactive');
        //Abrir el shoppingCartContainer
         
        }
        mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();  
      
    } else {

        mobileMenu.classList.add('inactive');
    }
}

//Esta función presento problemas en la clase 23 pra la interacción entre todos los elemnetos ¡OJO! --->

// function toggleCarritoshoppingCartContainer() {
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
//     const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

//     if(isshoppingCartContainerClosed) {

//         if (!isMobileMenuClosed){
//             //Si el mobile menu esta open se debe cerrar
//             mobileMenu.classList.add('inactive');
//         //Abrir el shoppingCartContainer
         
//         }
//         shoppingCartContainer.classList.toggle('inactive');

//     } else {

//         shoppingCartContainer.classList.add('inactive');
//     }
    
// }

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
          
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

    console.log('funciona el código JS') 

}



function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name:'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name:'Computador',
    price: 700,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name:'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name:'Computador',
    price: 700,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

function renderProducts(arr) {
        
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
         //Product= {name, price, image}//
         const productImg = document.createElement('img');
         productImg.setAttribute('src', product.image);
         productImg.addEventListener('click', openProductDetailAside);
         //
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
     
         productCard.appendChild(productImg);
         productCard.appendChild(productInfo);
     
         cardsContainer.appendChild(productCard);       
     };
}

renderProducts(productList);


