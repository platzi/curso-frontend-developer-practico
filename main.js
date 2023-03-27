// const navEmail = document.querySelector('.desktop-menu');


// function SetVisible(element){
//  document.element.style.display = 'block';   
// }

const email = document.querySelector('.navbar-email')
const navEmail = document.querySelector('.desktop-menu');
const hammenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.querySelector('.detalles-producto');
const order = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');
email.setAttribute('style','cursor: pointer'); /*iNTERACCION DEL CODIGO CON EL EMAIL*/ 
carrito.setAttribute('style', 'cursor: pointer');
email.addEventListener('click', SetVisible);
hammenu.addEventListener('click', SetVisibleHam);
carrito.addEventListener('click', SetVisibleCar);
order.addEventListener('click', openProdcutDetail);
productDetailClose.addEventListener('click', closeProductDetail);
function openProdcutDetail(){
    productDetail.classList.remove('inactive');

    if(!aside.classList.contains('inactive')){
        console.log('funciona');
        aside.classList.add('inactive');
    }
}
function closeProductDetail(){
    productDetail.classList.add('inactive');
}

function SetVisible(){
    // navEmail.setAttribute('style', 'display: block', 'cursor: pointer');
    // console.log('click' + Boolean(SetVisible));
    navEmail.classList.toggle('inactive'); SaberComo();
}
function SetVisibleHam(){
    // navEmail.setAttribute('style', 'display: block', 'cursor: pointer');
    console.log('click');
    menuMobile.classList.toggle('inactive'); SaberComo();
}
function SetVisibleCar(){
    console.log('click')
    aside.classList.toggle('inactive');
    const MobileClosed = menuMobile.classList.contains('inactive');
    const navEmailClosed = navEmail.classList.contains('inactive'); 

    if(!aside.classList.contains('inactive')){
        navEmail.classList.add('inactive');
        menuMobile.classList.add('inactive');
        productDetail.classList.add('inactive');

    }
    }

function SaberComo(){
    
    if(!navEmail.classList.contains('inactive') || !menuMobile.classList.contains('inactive')){
        console.log('menu abierto')
        aside.classList.add('inactive');
    }
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

// productList.forEach(element => {
//     console.log(element);
// });
function products(arr){
    for (const iterator of arr) {
        const divProducts = document.createElement('div');
        divProducts.classList.add('product-card');
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', iterator.image);
    
        const infoProduct = document.createElement('div');
        infoProduct.classList.add('product-info');
    
        const infoProduct_Div = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.textContent = `$ ${iterator.price}`;
        const productName = document.createElement('p');
        productName.textContent = `${iterator.name}`;
    
        const prodctiInfo_figure = document.createElement('figure');
        const productimg_car = document.createElement('img');
        productimg_car.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        prodctiInfo_figure.appendChild(productimg_car);
    
        infoProduct_Div.appendChild(productPrice);
        infoProduct_Div.appendChild(productName);
    
        infoProduct.appendChild(infoProduct_Div);
        infoProduct.appendChild(prodctiInfo_figure);
        
        divProducts.appendChild(imgProduct);
        divProducts.appendChild(infoProduct);
    
        cardsContainer.appendChild(divProducts);

    }
 }
products(productList);


/*Agregando product details*/ 
