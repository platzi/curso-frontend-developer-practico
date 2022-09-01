const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }

}

menuEmail.addEventListener('click',toggleDesktopMenu);

const mobileMenu = document.querySelector('.mobile-menu');
const iconMobileMenu = document.querySelector('.menu')

function toggleMobileMenu() {
    
    mobileMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }
}

iconMobileMenu.addEventListener('click', toggleMobileMenu);

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

function toggleProductDetailMenu() {
    
    aside.classList.toggle('inactive');
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }

    if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }
    
}

menuCarritoIcon.addEventListener('click',toggleProductDetailMenu);

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
    name:'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

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

const cardContainer = document.querySelector('.cards-container');

function renderProduts(arr){
    
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
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
        
        // ingresando los elementos dentro de sus contenedores padre//
        
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
    
        productInfoFigure.appendChild(productImgCard);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        
        cardContainer.appendChild(productCard);
    
    }

}

renderProduts(productList);

