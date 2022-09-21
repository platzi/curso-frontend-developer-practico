const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon= document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggledesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggledesktopMenu(){
    const isshoppingCartContainerclosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerclosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
    const isshoppingCartContainerclosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerclosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuclosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenu = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuclosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClose){
      productDetailContainer.classList.add('inactive');
  }

    if(!isdesktopMenu){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

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
    name:'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr){
for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    //name= {name., price, image} -> product.image
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText= '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText= product.name;
    
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

renderProducts(productList)


