const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('.product-detail1');
const closeDetailContainer = document.querySelector('.product-detail-close')



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeDetailContainer.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
  }

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const ismobileMenuOpenClosed = mobileMenu.classList.contains('inactive');

    if(!ismobileMenuOpenClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

function openProductDetailAside() {

    aside.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');


}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        //product= {name, price, img} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-card');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
     
        const productInfoFigure = document.createElement('div');
        const productImgCart = document.createElement('figure');
        productImgCart.setAttribute('src', './icons/bt_added_to_cart.svg');
     
         productInfoFigure.appendChild(productImgCart);
     
     
         productInfo.appendChild(productInfoDiv);
         productInfo.appendChild(productInfoFigure);
     
         productCard.appendChild(productImg);
         productCard.appendChild(productInfo);
     
         cardsContainer.appendChild(productCard);
     }

}

renderProducts(productList);

/*   for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        //product= {name, price, img} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-card');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
     
        const productInfoFigure = document.createElement('div');
        const productImgCart = document.createElement('figure');
        productImgCart.setAttribute('src', './icons/bt_added_to_cart.svg');
     
         productInfoFigure.appendChild(productImgCart);
     
     
         productInfo.appendChild(productInfoDiv);
         productInfo.appendChild(productInfoFigure);
     
         productCard.appendChild(productImg);
         productCard.appendChild(productInfo);
     
         cardsContainer.appendChild(productCard);
     } */