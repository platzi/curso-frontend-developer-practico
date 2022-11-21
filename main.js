const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const navbarshopinCarr = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const productDetail = document.querySelector('#productDetail')
const mobilMenu= document.querySelector('.mobile-menu');
const productDetailClose= document.querySelector('.product-detail-close');

const shopingCartContainer = document.querySelector('#shopingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', function(e) {
    e.preventDefault();
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shopingCartContainer.classList.add('inactive');
    }
    //con toogle lo que hacemos es quitar o poner la clase inactive
    menuDesktop.classList.toggle('inactive')
});

menuHamIcon.addEventListener('click', function(e) {
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');

    e.preventDefault();
    if (!isAsideClosed) {
        shopingCartContainer.classList.add('inactive');
    }

    productDetail.classList.add('inactive');

    mobilMenu.classList.toggle('inactive')
});

productDetailClose.addEventListener('click', function(e) {
    productDetail.classList.add('inactive');
})

navbarshopinCarr.addEventListener('click', function(){
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    const isdesktopMenuClosed = menuDesktop.classList.contains('inactive');

    if (!isMobilMenuClosed) {
        mobilMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetail.classList.contains('inactive');

    if (!isProductDetailClose) {
        productDetail.classList.add('inactive');
    }
    if (!isdesktopMenuClosed) {
        menuDesktop.classList.toggle('inactive');
    }
    shopingCartContainer.classList.toggle('inactive');
})

const productlist = [];

productlist.push(
    {
        price: 20000,
        name:'Bike',
        Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productlist.push(
    {
        price: 70000,
        name:'Pantalla',
        Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productlist.push(
    {
        price: 90000,
        name:'Compu',
        Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

productlist.push(
    {
        price: 10000,
        name:'Mouse',
        Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);


function renderProducts(arr) { 
    for (product of arr){
     const productCard =  document.createElement('div');
     productCard.classList.add('product-card');
    
     const productImg = document.createElement('img');
     productImg.setAttribute('src', product.Image);
     productImg.addEventListener('click', function (e) {
       shopingCartContainer.classList.add('inactive');
        e.preventDefault();
        productDetail.classList.remove('inactive');
     })
    
     const productInfo =  document.createElement('div');
     productInfo.classList.add('product-info');
    
     const productInfoDiv =  document.createElement('div');
    
     const productPrice =  document.createElement('p');
     productPrice.innerText = '$' + product.price;
     
     const productName =  document.createElement('p');
     productName.innerText = product.name;
     
     productInfoDiv.append(productPrice,productName);
    
     const productInfoFigure =  document.createElement('figure');
     const productImgCart=  document.createElement('img');
     productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
    productInfoFigure.appendChild(productImgCart);
    productInfo.append(productInfoDiv,productInfoFigure);
    productCard.append(productImg, productInfo);
    
    
    cardsContainer.append(productCard);
    }
}
// funcion con el arr
renderProducts (productlist);

