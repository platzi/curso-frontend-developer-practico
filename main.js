const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailClose = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    mobileMenu.classList.toggle('inactive');

    const isAsaidCarritoClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsaidCarritoClose){
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();
}

function toggleCarritoAside(){
    
    shoppingCartContainer.classList.toggle('inactive');

    const isMovileMenuCLose = mobileMenu.classList.contains('inactive');

    if (!isMovileMenuCLose){
        mobileMenu.classList.add('inactive')
    }

    const isproductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isproductDetailClose){
        productDetailContainer.classList.add('inactive')
    }
}

function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'vaso',
    price: 80,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'computador',
    price: 600,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProduct(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
        productImg.addEventListener('click',openProductDetailAside);
    
        const productInf = document.createElement('div');
        productInf.classList.add('product-info');
    
        const productInfDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfDiv.appendChild(productPrice);
        productInfDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const prodcutImgCart = document.createElement('img');
        prodcutImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(prodcutImgCart);
    
        productInf.appendChild(productInfDiv);
        productInf.appendChild(productInfoFigure);
    
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInf);
    
        cardsContainer.appendChild(productCard);
        
    }
}

renderProduct(productList);