const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');
const menuburguer = document.querySelector('.menu ');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart ');
const productDetailIcons = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', intercambiarDesktopmenu);
menuburguer.addEventListener('click',intercambiarMobilemenu );
menuCarritoIcon.addEventListener('click',intercambiarCarritoAside );
productDetailIcons.addEventListener('click', closeProductDetailAside);

function intercambiarDesktopmenu(){
     desktopMenu.classList.toggle('inactive');
     const isasideClosed =  shoppingCartContainer.classList.contains('inactive');

     if(!isasideClosed){
        shoppingCartContainer.classList.add('inactive');
 
         
     }
}

function intercambiarMobilemenu(){
    const isasideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isasideClosed){
        shoppingCartContainer.classList.add('inactive');

        
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
function intercambiarCarritoAside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');

        
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
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
const productList = [];
productList.push({
    nombre:'bike',
    valor: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',


})
productList.push({
    nombre:'xbox360',
    valor: 620,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    

})
productList.push({
    nombre:'portatil gamer',
    valor: 1200,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    

})
productList.push({
    nombre:'celular',
    valor: 500,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    

})
productList.push({
    nombre:'silla gamer',
    valor: 350,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    

})

productList.push({
    nombre:'televisor sansun galaxi full hd 4k',
    valor: 1000,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    

})
/*
<div class="product-card">
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
*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openProductDetailAside);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.valor;
        const productName = document.createElement('p');
        productName.innerText = product.nombre;
      
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
    
        
    }
}

renderProducts(productList);