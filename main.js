const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardContainer =document.querySelector('.cards-container');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarrito.addEventListener('click',toggleMenuAside);


function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive');
    if(!isAsideClose){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');
    if(!isAsideClose){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleMenuAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')

    if(!isMobileMenuClose || !isDesktopMenuClose){
            mobileMenu.classList.add('inactive')
            desktopMenu.classList.add('inactive')
        }
    aside.classList.toggle('inactive')
        
     
}

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
</div>
-->
*/
const productList =[];

productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Carro',
    price:850,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Bicicleta',
    price:500,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProduct(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productName =document.createElement('p') ;
        productName.innerText =product.name ;
        const productPrice = document.createElement('p');
        productPrice.innerText ='$' + product.price ;
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice)
    
        const productFigure = document.createElement('figure');
        const imgCard = document.createElement('img');
        imgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(imgCard);
    
        productInfo.appendChild(productInfoDiv);
    
        productInfo.appendChild(productFigure)
    
        productCard.appendChild(img);
    
        productCard.appendChild(productInfo)
    
        cardContainer.append(productCard);
    
    }
}


renderProduct(productList);
