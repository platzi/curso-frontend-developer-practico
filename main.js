const menuEmail= document.querySelector('.navbar-email');
const deskMenu= document.querySelector('.desktop-menu');
const menuMobile= document.querySelector('.mobile-menu');
const menuHam= document.querySelector('.menu');

const DetalleCarrito= document.querySelector('#shoppingCartContainer');

const logoCarrito= document.querySelector('.navbar-shopping-cart');

const cardCont= document.querySelector('.cards-container');

const detalleProducto = document.querySelector('#ProductDetail');
const closeDetalleCarrito= document.querySelector('.product-detail-close');



menuEmail.addEventListener('click', MostrarMenuDesk);
menuHam.addEventListener('click', MostrarMenuHAM);
logoCarrito.addEventListener('click', MostrarMenuCompras);

cardCont.addEventListener('click', MostrarDetalleProducto);
closeDetalleCarrito.addEventListener('click', CerrarDetalleProducto);


function MostrarMenuDesk (){

    const ClosedDetalleCarrito=DetalleCarrito.classList.toggle('inactive');

    if(!ClosedDetalleCarrito){
        DetalleCarrito.classList.add('inactive');
    }

    deskMenu.classList.toggle('inactive');

};

function MostrarMenuHAM (){
    const ClosedDetalleCarrito=DetalleCarrito.classList.toggle('inactive');

    if(!ClosedDetalleCarrito){
        DetalleCarrito.classList.add('inactive');
    }

    const closeDetalleProducto=detalleProducto.classList.contains('inactive');

    if(!closeDetalleProducto){
        detalleProducto.classList.add('inactive');
    }


    menuMobile.classList.toggle('inactive');
};

function MostrarMenuCompras (){
    const menuMobileClosed=menuMobile.classList.contains('inactive');
    

    if(!menuMobileClosed){
        menuMobile.classList.add('inactive');
    }
    
    const closeDetalleProducto=detalleProducto.classList.contains('inactive');

    if(!closeDetalleProducto){
        detalleProducto.classList.add('inactive');
    }

    DetalleCarrito.classList.toggle('inactive');
};

function MostrarDetalleProducto() {
    const ClosedDetalleCarrito=DetalleCarrito.classList.contains('inactive');

    if(!ClosedDetalleCarrito){
        DetalleCarrito.classList.add('inactive');
    }

    detalleProducto.classList.remove('inactive');
}

function CerrarDetalleProducto() {
  
    detalleProducto.classList.add('inactive');
}



const productList= [];    
    
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940    '
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

function renderProductos(array){ 
 for(product of array){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg=document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');



    const div=document.createElement('div');

    const divPrice=document.createElement('p');
    divPrice.innerText=`$${product.price}.00`;


    const divNombre=document.createElement('p');
    divNombre.innerText= product.name;

    div.append(divPrice,divNombre);

    const productFigure=document.createElement('figure');
    const imgFigure=document.createElement('img');
    imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.append(imgFigure);


    productInfo.append(div,productFigure);

    productCard.append(productImg,productInfo);

    cardCont.appendChild(productCard);
 }
}

renderProductos(productList);