const menuEmail=document.querySelector('.navbar-email');
const menuHamMenu=document.querySelector('.menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const desktopMenu=document.querySelector('.desktop-menu');
const mobileMenu=document.querySelector('.mobile-menu');
const shoppingCardtContainer= document.querySelector('#shoppingCartContainer');
const cardsContainer= document.querySelector('.cards-container');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamMenu.addEventListener('click',toggleMobileManu);
menuCarritoIcon.addEventListener('click',toggleCarrritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCardtContainer.classList.contains('inactive');
    
    if (!isAsideClosed)
    {
        shoppingCardtContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileManu() {
    const isAsideClosed = shoppingCardtContainer.classList.contains('inactive');
    
    if (!isAsideClosed)
    {
        shoppingCardtContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarrritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }

    shoppingCardtContainer.classList.toggle('inactive');
}

const productList=[];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Pantalla',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Compu',
    price: 320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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

function renderProducts(arr)
{
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('scr',product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText='$'+product.price;
    
        const productName = document.createElement('p');
        productName.innerText= product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);