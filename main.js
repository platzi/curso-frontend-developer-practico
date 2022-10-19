const menuEmail = document.querySelector('.navbar-email');
const desktopEmail = document.querySelector('.desktop-menu');

const menuBurgerIcon = document.querySelector('.menu');
const mobileBurger = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoShopping);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopEmail.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileBurger.classList.toggle('inactive')
    //para cerrar el product detail cuanto tenemos el movil abierto solo debemos de llamar esta funcion 
    closeProductDetailAside()
}

function toggleCarritoShopping(){
    const isMobileBurgerClosed = mobileBurger.classList.contains('inactive');
    if (!isMobileBurgerClosed) {
      mobileBurger.classList.add('inactive'); 
    }

    const isDesktopMenuClosed = desktopEmail.classList.contains('inactive');
    if(!isDesktopMenuClosed){
        desktopEmail.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
      productDetailContainer.classList.add('inactive'); 
    }
    
    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    // para cerrar el carrito
    shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

// Lista de productos 
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Screen",
    price: 220,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "PC",
    price: 1500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
      </div> */

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, imagen} -> product.imagen
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.imagen)
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name
    
        const productInfoFigure = document.createElement('figure');
        
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart)
        productInfo.append(productInfoDiv, productInfoFigure)
        productInfoDiv.append(productPrice, productName)
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);