const menuEmail     = document.querySelector('.navbar-email');
const desktopMenu   = document.querySelector('.desktop-menu');

const imgMenu       = document.querySelector('.menu');
const mobileMenu    = document.querySelector('.mobile-menu');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const carritoMenu = document.querySelector('.navbar-shopping-cart')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
imgMenu.addEventListener('click', toggleImgMenu );
carritoMenu.addEventListener('click', showCarritoMenu);


function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleImgMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
};

function showCarritoMenu(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Ron',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})




/* <div class="product-card">
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
</div>  */


    


function renderProducts(arr) {
    for (product of arr ){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML='$' + product.price;
        
        const productName= document.createElement('p');
        productName.innerHTML = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFig = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');    

        productInfoFig.appendChild(productImgCard);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFig);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);