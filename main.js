const menuEmail  = document.querySelector(".navbar-email");
const desktopMenu  = document.querySelector(".desktop-menu");

const hamb_menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")

const icon_carrito = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail')

const productDetailCloseIcon = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click',toogleDesktopMenu)
hamb_menu.addEventListener('click',toogleMobileMenu)
icon_carrito.addEventListener('click',toogleCarrito)
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toogleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu(){

    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')

    if (!isshoppingCartContainerClose){
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();
    

    mobileMenu.classList.toggle("inactive");
}

function toogleCarrito(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    




    shoppingCartContainer.classList.toggle("inactive");
    
    
}

function openProductDetailAside() {

    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];

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

function renderProducts(arr) {
  
for (const product of productList) {
    
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src',product.image);
    img.addEventListener('click',openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInsideInfo = document.createElement('div');

    const price = document.createElement('p');
    price.innerText = '$' + product.price;

    const theproduct = document.createElement('p');
    theproduct.innerText = product.name
    
    const figure = document.createElement('figure');

    const imgofProduct = document.createElement('img');
    imgofProduct.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInsideInfo.append(price,theproduct);

    figure.append(imgofProduct);

    productInfo.append(productInsideInfo,figure);

    productCard.append(img,productInfo);

    cardsContainer.append(productCard);

    
}  
}

renderProducts(productList)

