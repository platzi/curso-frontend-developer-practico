//desktop menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
//menu mobile
const menuDesplegable = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//menu carrito
const menuCar = document.querySelector('#shoppingCarContainer')
const shoppingCarContainer = document.querySelector('.car')
const cardsContainer = document.querySelector('.cards-container')

const productDetailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')



menuEmail.addEventListener('click', toggleDesktopMenu);
menuDesplegable.addEventListener('click', toggleMobileMenu);
shoppingCarContainer.addEventListener('click', toggleCarMenu);
productDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    if(!menuCar.classList.contains('inactive')) {
        menuCar.classList.toggle('inactive')
    }
    if(!productDetailContainer.classList.contains('inactive')) {
        closeProductDetail()
}
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    if(!menuCar.classList.contains('inactive')) {
        menuCar.classList.toggle('inactive')
    }
    if(!productDetailContainer.classList.contains('inactive')) {
        closeProductDetail()
}
}

function toggleCarMenu() {
    menuCar.classList.toggle('inactive')

    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive')
    }
    if(!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive')
    }
    if(!productDetailContainer.classList.contains('inactive')) {
        closeProductDetail()
}
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    if (!menuCar.classList.contains('inactive')) {
        menuCar.classList.toggle('inactive')
    }
    if(!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive')
    }
    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive')
    }
}

function closeProductDetail () {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'teclado',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'teclado',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts (arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
        
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price 
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfofigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfofigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfofigure)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);

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
