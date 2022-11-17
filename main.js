//Constantes;
const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');

const $menuHambIcon = document.querySelector('.menu'); 
const $mobileMenu = document.querySelector('.mobile-menu');

const $menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const $shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const $cardsContainer = document.querySelector('.cards-container'); 

const $productDetailContainer = document.querySelector('#productDetail'); 
const $productDetailCloseIcon = document.querySelector('.product-detail-close'); 


//Agregar el escuchador de eventos; 
$menuEmail.addEventListener('click', toggleDesktopMenu);
$menuHambIcon.addEventListener('click', toggleMobileMenu);
$menuCarritoIcon.addEventListener('click', toggleCarrito$shoppingCartContainer); 
$productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//Funciones que agregar la clase inactive mediante 'toggle'; 
function toggleDesktopMenu(){
    const is$shoppingCartContainerClosed = $shoppingCartContainer.classList.contains('inactive');
    
    if(!is$shoppingCartContainerClosed){
        $shoppingCartContainer.classList.add('inactive');
    }

    $desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
  /* (ex) isAsideClosed  */
    const is$shoppingCartContainerClosed = $shoppingCartContainer.classList.contains('inactive');
    
    if(!is$shoppingCartContainerClosed){
        $shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    $mobileMenu.classList.toggle('inactive');
};

/*  (ex) toggleCarritoAside()   */ 
function toggleCarrito$shoppingCartContainer(){
    const isMobileMenuClosed = $mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        $mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = $productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        $productDetailContainer.classList.add('inactive');
    }

    $shoppingCartContainer.classList.toggle('inactive');

};

function openProductDetailAside(){
    $shoppingCartContainer.classList.add('inactive'); 

    $productDetailContainer.classList.remove('inactive');
};

function closeProductDetailAside(){
    $productDetailContainer.classList.add('inactive'); 
};


//Lógica p/ agregar productos en el HTML; 

// 1) Creamos un array vacio al se que le agregará un Object; 
const productList = [];

// 2) Creación del Object; 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Phone',
    price: 300,
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Screen',
    price: 280,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Magic cube',
    price: 35,
    image: 'https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Piano',
    price: 5000,
    image: 'https://images.pexels.com/photos/2043571/pexels-photo-2043571.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Guitar',
    price: 250,
    image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Desk',
    price: 480,
    image: 'https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Lamp',
    price: 110,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Bookcase',
    price: 700,
    image: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Programmig book',
    price: 2000,
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600'
});


/* Referencia del elemento HMTL a construir:

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
</div> */ 

function renderProducts(arr){
    for (product of arr){ 
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img'); 
        productImg.setAttribute('src', product.image); 
        productImg.addEventListener('click', openProductDetailAside); 
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); 
    
        const productInfoDiv = document.createElement('div'); 
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price; 
    
        const productName = document.createElement('p');
        productName.innerText = product.name; 
    
        const productInfoFigure = document.createElement('figure');
        
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); 
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productPrice); 
        productInfoDiv.appendChild(productName); 
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo); 
        
        $cardsContainer.appendChild(productCard); 
    }; 
};

renderProducts(productList);

