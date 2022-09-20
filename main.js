const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu(){
    
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
    
}

function toggleMobileMenu(){

    const isAsideClose = shoppingCartContainer.classList.contains('inactive');
    const isDeskMenu = desktopMenu.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }
    if(!isDeskMenu){
        desktopMenu.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDeskMenu = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
         mobileMenu.classList.add('inactive');
        }
    if(!isDeskMenu){
         desktopMenu.classList.add('inactive');
        }

    const isProductDetailColse = productDetailContainer.classList.contains('inactive');

    
    if(!isProductDetailColse){
        productDetailContainer.classList.add('inactive');
        }
    

        shoppingCartContainer.classList.toggle('inactive');
  
}

function openProductDetailAside() {
    const isDeskMenu = desktopMenu.classList.contains('inactive');
    if(!isDeskMenu){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');


}

function closeProductDetailAside() {
    
    
    productDetailContainer.classList.add('inactive');

}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Clock',
    price: 70,
    image: 'https://images.pexels.com/photos/4107159/pexels-photo-4107159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
});

productList.push({
    name: 'Camera',
    price: 320,
    image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
});

productList.push({
    name: 'Mobile',
    price: 40,
    image: 'https://images.pexels.com/photos/3999536/pexels-photo-3999536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
});

productList.push({
    name: 'Shoes',
    price: 20,
    image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
});

productList.push({
    name: 'Graphic card',
    price: 100,
    image: 'https://images.pexels.com/photos/4581902/pexels-photo-4581902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
});

const renderProducts = (arr) =>{
  for (let product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

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