const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const prodcutDetaiCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppinCartContainer = document. querySelector('#shoppinCartContainer')
const cartsContainer = document.querySelector('.cards-container')
const detailProducContainer = document.querySelector('#product-detail')

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
prodcutDetaiCloseIcon.addEventListener('click', closeProductDEtailAside);

function toggleDesktopMenu() {
    const isAsiClosed = shoppinCartContainer.classList.contains('inactive');
    if (!isAsiClosed) {
        shoppinCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsiClosed = shoppinCartContainer.classList.contains('inactive');
    if (!isAsiClosed) {
        shoppinCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive') 
    closeProductDEtailAside()
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDEtailClosed = detailProducContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isProductDEtailClosed) {
        detailProducContainer.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    shoppinCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppinCartContainer.classList.add('inactive');
    detailProducContainer.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
}

function closeProductDEtailAside() {
    detailProducContainer.classList.add('inactive');
    
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Pantalla',
    price: 300,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computador',
    price: 500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computador',
    price: 500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computador',
    price: 500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computador',
    price: 500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computador',
    price: 500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computador',
    price: 500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computador',
    price: 500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const producImg = document.createElement('img');
        producImg.setAttribute('src', product.imagen);
        producImg.addEventListener('click', openProductDetailAside);

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productFigure)
    
        productCard.appendChild(producImg)
        productCard.appendChild(productInfo)
    
        cartsContainer.appendChild(productCard)
    }
    
}

renderProducts(productList)

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
</div>*/

