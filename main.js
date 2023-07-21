/*desktop */
const menuEmail  = document.querySelector('.navbar-email');
const  contDeskMenu = document.querySelector('.desktop-menu');
/*Mobile menu */
const menuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');
const productDetailClosed = document.querySelector('.product-detail-close');
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDeskMenu);
menuMobile.addEventListener('click',toggleMobilekMenu);
productDetailClosed.addEventListener('click', closedDetailAside);
shoppingCar.addEventListener('click', functProductDetail);


function toggleDeskMenu(){
    shoppingCarContainer.classList.add('inactive');
    contDeskMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}
function toggleMobilekMenu(){
    shoppingCarContainer.classList.add('inactive');
    productDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}
function functProductDetail(){
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive')
    shoppingCarContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
    productDetail.classList.remove('inactive');
    shoppingCarContainer.classList.add('inactive');
    contDeskMenu.classList.add('inactive');
}
function closedDetailAside(){
    productDetail.classList.add('inactive')
}

/*product array*/
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

/*funcion que s eocupa para renderizar los productos */

function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card'); 
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        //escuchamos el evento de la imagen
        productImage.addEventListener('click', openProductDetailAside);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText  = product.name;
    /*appendChild lo que hace es apregar un nodo en el DOM */
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productFigure = document.createElement('figure');
        const imageFigure = document.createElement('img');
        imageFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
        productFigure.appendChild(imageFigure);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}
//tenemos que llamar la funcion con el arreglo que necesitamos para moestrarlo
renderProducts(productList);