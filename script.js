//Desktop and mobile menu
const showDesktopMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const showMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//Shopping cart
const showShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
//cards container
const cardsContainer = document.querySelector('.cards-container');
//Prouct details
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

/*Functions general*/
function close(element){
    element.classList.add('inactive');
}

//Shows menus (Desktop and mobile)
showDesktopMenu.addEventListener('click', toggleDesktopMenu);
showMobileMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    close(shoppingCartContainer);
    closeProductDetail();

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    close(shoppingCartContainer);
    closeProductDetail();

    mobileMenu.classList.toggle('inactive');
}

/*Show shopping cart*/
showShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){
    close(mobileMenu);
    close(desktopMenu);
    closeProductDetail();

    shoppingCartContainer.classList.toggle('inactive');
}

//Show and Close product detail
function openProducDetail(){
    close(mobileMenu);
    close(desktopMenu);
    close(shoppingCartContainer);

    productDetailContainer.classList.remove('inactive');
}

productDetailCloseIcon.addEventListener('click', closeProductDetail);

function closeProductDetail(){
    close(productDetailContainer);
}

//Cards container
const productList = [];
//Creamos los datos, simulando que como si vinieran del backend
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 620.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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

//Creo el product cart insertando HTML desde JS.
function renderProducts(arr){
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProducDetail);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = "$ " + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        /*productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);*/
        productInfoDiv.append(productPrice, productName);
        
        const productInfoFigure = document.createElement('figure');
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productInfoImg);
        
        /*productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);*/
        productInfo.append(productInfoDiv, productInfoFigure);
        
        /*productCard.appendChild(productImg);
        productCard.appendChild(productInfo);*/
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
