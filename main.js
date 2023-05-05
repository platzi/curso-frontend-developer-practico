const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const barMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDatail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navEmail.addEventListener('click', toggleDesktopMenu);
barMenu.addEventListener('click',  toggleMobileMenu)
navbarShoppingCart.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

//Mostrar y ocultar el mobile-menu y el desktop-menu.

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    const isAsideClose = aside.classList.contains('inactive');
    const isproductDetailContainer = productDetailContainer.classList.contains('inactive');


    if(!isAsideClose || !isproductDetailContainer){
        aside.classList.add('inactive');
        productDetailContainer.classList.add('inactive')
    }
}

//Mostrar y ocultar el carrito de compra

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
    const isAsideClosed =  aside.classList.contains('inactive');

    if(!isAsideClosed){
        menuMobile.classList.add('inactive');
    }
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    const isMobileMenuClose = menuMobile.classList.contains('inactive');
    const options = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClose){
        aside.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    if(!options){
        desktopMenu.classList.add('inactive')
    }
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');


    if(!isAsideClosed || !isdesktopMenuClosed){
        aside.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
   
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}


const productList = [];

productList.push({
    name : 'Bike',
    price : 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;


    const productName = document.createElement('p')
    productName.innerText = '$' + product.name;

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)


    const productInfoFigure = document.createElement('figure');
    const productInfoCart = document.createElement('img');
    productInfoCart.setAttribute('src', './icons/bt_add_to_cart.svg');


    productInfoFigure.appendChild(productInfoCart);


    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo)
    cardsContainer.appendChild(productCard)
}