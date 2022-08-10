const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);

menuHamIcon.addEventListener('click',toggleMobilepMenu);

menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClose = shoppingCardContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCardContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    const isAsideClose = shoppingCardContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCardContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClose || !isDesktopMenuClose){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    
    shoppingCardContainer.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name : 'Bike',
    price : 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name : 'Pantalla',
    price : 400,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name : 'Computadora',
    price : 620,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

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


function renderProducts(arrayProducts){
    for(product of arrayProducts){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfoDiv.append(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);