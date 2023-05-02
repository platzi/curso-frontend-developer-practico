const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const productDetailCloseIcon = document.querySelector('.product-detail-close');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const productDetailContainerImage = document.querySelector('#productDetailImage');
const productDetailContainerPrice = document.querySelector('#productDetailPrice');
const productDetailContainerName = document.querySelector('#productDetailName');


const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')

    closeProductDetailAside()
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive')

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
}

function openProductDetailAside(product){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    
    // Modifico lo que se muestra

    productDetailContainerImage.setAttribute('src',product.srcElement.pImage);
    productDetailContainerName.innerText = product.srcElement.pName;
    productDetailContainerPrice.innerText = '$' + product.srcElement.pPrice;
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList = []; // array que se devolveria por alguna API REST

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Car',
    price: 15000,
    image: 'https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Skate',
    price: 100,
    image: 'https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Car',
    price: 15000,
    image: 'https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Skate',
    price: 100,
    image: 'https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        // product = {name, price, image} -> product.image
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        productImg.pPrice = product.price;
        productImg.pImage = product.image;
        productImg.pName = product.name;
        
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);