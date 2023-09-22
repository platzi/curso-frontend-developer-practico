const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const shopingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClosed = document.querySelector('.product-detail-close');
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarAside);
productDetailClosed.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu (){
    const isDetaiProductClosed = shopingCartContainer.classList.contains('inactive');

    if (!isDetaiProductClosed ) {
        shopingCartContainer.classList.add('inactive');
        
    }
    closeProductDetailAside();
    desktopMenu.classList.toggle('inactive');    
}
//La funcion se utiliza para saber si se abre un componente el otro se cierre automaticamente
function toggleMobileMenu() {
    const isDetaiProductClosed = shopingCartContainer.classList.contains('inactive'); // -> Se define la variable que se quiere saber si esta cerrada

    if (!isDetaiProductClosed) { // -> Si no esta cerrado el componente
        shopingCartContainer.classList.add('inactive'); //-> Se le agrega el valor para que no se vea.
    }
    mobileMenu.classList.toggle('inactive'); //-> Si esta cerrada la variable se le quita el valor para que sea vea

    closeProductDetailAside();
}

function toggleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shopingCartContainer.classList.toggle('inactive');
}

//Abrir el detalle del producto
function openProductDetailAside() {

    shopingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
//Boton para cerrar el Detalle del producto.
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}
const productList = []

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

function renderProducts(array) {
    for (product of array){
        const productCard = document.createElement('div')
        productCard.classList.add("product-card")
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
    
    
        const capa = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        capa.append(productPrice, productName);
        productInfo.append(capa,productInfoFigure);
        productCard.append(img, productInfo)
        cardContainer.appendChild(productCard)
    }
}
renderProducts(productList);