const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDescktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenupMenu);
menuCarIcon.addEventListener('click', toggleCarShoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDescktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenupMenu() {
const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarShoppingCartContainer() {
    const isMobileMenuenuClosd = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuenuClosd) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {

    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'brown sofa',
    price: 310,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Old tv',
    price: 120,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Mirror',
    price: 60,
    image: 'https://images.pexels.com/photos/6186523/pexels-photo-6186523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Microwave',
    price: 120,
    image: 'https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'kettle',
    price: 20,
    image: 'https://images.pexels.com/photos/1921673/pexels-photo-1921673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Dining table',
    price: 240,
    image: 'https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'White chair',
    price: 70,
    image: 'https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Lamp',
    price: 20,
    image: 'https://images.pexels.com/photos/5677999/pexels-photo-5677999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

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
      </div>*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        
        // product= {name, price, image} -> product.image//
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        cardsContainer.appendChild(productCard);
        
    }
}

renderProducts(productList);