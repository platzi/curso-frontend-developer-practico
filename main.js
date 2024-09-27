var productosCarrito =0;
var totalCompra=0;
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu=   document.querySelector('.desktop-menu');
const menuHamIcon=   document.querySelector('.menu');
const mobileMenu=   document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const carritoContadorIcon=document.querySelector('.navbar-shopping-cart div');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const shoppingCartOrderContent=document.querySelector('.my-order-content');
const shoppingCartOrder=document.querySelector('.order');
const shoppingCartTotal=document.querySelector('.order-total')
const productDetailContainer=document.querySelector('#productDetail');
const cardsContainer=document.querySelector('.cards-container');
const productItemDetail=document.querySelector('#product-item');
const productPriceDetail=document.querySelector('.product-price');
const productNameDetail=document.querySelector('.product-name');
const productDescriptionDetail=document.querySelector('.product-description');





menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleCartAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu(){       
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){    
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
function toggleCartAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){       
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    const productoId=event.currentTarget.getAttribute('idproducto');
    const producto=productList[productoId];
    productItemDetail.setAttribute('src',producto.image);
    productPriceDetail.innerText='S/.'+ producto.price;
    productNameDetail.innerText = producto.name;
    productDescriptionDetail.innerText=producto.descripcion;
}
function closeProductDetailAside(){   
    productDetailContainer.classList.add('inactive');    
}
function modifyCountIcon(){    
    if(productosCarrito==0){         
        carritoContadorIcon.classList.remove('product-count');       
        carritoContadorIcon.innerText=productosCarrito;                
    }
    else if(productosCarrito> 0 && productosCarrito <= 9 ){
        carritoContadorIcon.classList.add('product-count');
        carritoContadorIcon.innerText=productosCarrito;        
    }else{
        carritoContadorIcon.innerText=">";
    } 
}
function sumarProducto(){
    productosCarrito +=1;
    modifyCountIcon();
    const productoId=event.currentTarget.getAttribute('idproducto');
    const shoppingCart=document.createElement('div');
    const shoppingCartFigure=document.createElement('figure');
    const shoppingCartImg=document.createElement('img');
    const shoppingCartName=document.createElement('p');
    const shoppingCartPrice=document.createElement('p');
    const shoppingCartImgClose=document.createElement('img');
    const producto=productList[productoId];
    
    shoppingCart.classList.add('shopping-cart');
    shoppingCartImg.setAttribute('src',producto.image);
    shoppingCart.setAttribute('idOrdercarrito',productosCarrito);
    shoppingCart.setAttribute('idproducto',producto.Id);    
    shoppingCartName.innerText=producto.name;
    shoppingCartPrice.innerText='S/. ' + producto.price;
    shoppingCartImgClose.setAttribute('src',"./icons/icon_close.png");
    shoppingCartImgClose.setAttribute('alt',"close");
    shoppingCartImgClose.setAttribute('idOrder',productosCarrito);
    shoppingCartImgClose.addEventListener('click',removeItemCarrito);

    shoppingCartOrderContent.insertBefore(shoppingCart,shoppingCartOrder);
    shoppingCart.appendChild(shoppingCartFigure);
    shoppingCartFigure.appendChild(shoppingCartImg);
    shoppingCart.appendChild(shoppingCartName);
    shoppingCart.appendChild(shoppingCartPrice);
    shoppingCart.appendChild(shoppingCartImgClose);
    
    totalCompra+=Number(producto.price);
    shoppingCartTotal.innerText='S/. '+ totalCompra;
}
function removeItemCarrito(){
    const orderId=event.currentTarget.getAttribute('idOrder');
    const shoppingCartForRemove=document.querySelector('[idOrdercarrito="'+orderId+ '"]')   
    removeAllChildNodes(shoppingCartForRemove);    
    shoppingCartOrderContent.removeChild(shoppingCartForRemove);
    recalcularTotal();
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function recalcularTotal(){
    const shoppingCartItems=document.querySelectorAll('.shopping-cart');
        productosCarrito=0;
    totalCompra=0;
    console.log(shoppingCartItems);
    for (shoppingCartItem of shoppingCartItems){
        let idproducto=shoppingCartItem.getAttribute('idproducto');
        let producto=productList[idproducto];
        productosCarrito+=1;
        totalCompra+=producto.price;         
        let shoppingCartImgCloseItem=shoppingCartItem.lastChild;
        shoppingCartImgCloseItem.setAttribute('idOrder',productosCarrito);
        shoppingCartItem.setAttribute('idOrdercarrito',productosCarrito);

    }
    modifyCountIcon();
    shoppingCartTotal.innerText='S/. '+ totalCompra;
}
const productList=[];
productList.push ({    
    Id:0,
    name:'Bike',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
    descripcion:'Una Hermosa bicicleta'
});
productList.push ({
    Id:1,
    name:'Bicycle helmet',
    price: 80,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    descripcion:'Un casco de bicicleta muy resistente'
});
productList.push ({
    Id:2,
    name:'Bicycle helmet',
    price: 100,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    descripcion:'Un casco de bicicleta muy resistente de color rojo'
});
productList.push ({
    Id:3,
    name:'Bicycle helmet',
    price: 90,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    descripcion:'Un hermoso casco de bicicleta de color rojo rubí'
});
productList.push ({
    Id:4,
    name:'Seat',
    price: 45,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    descripcion:'Asiento de bicicleta super comodo',
});
productList.push ({
    Id:5,
    name:'Tennis Montain Bike',
    price: 60,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    descripcion:'Tenis especiales para manejar bicicleta'
});
productList.push ({
    Id:6,
    name:'Sunglasses',
    price: 85,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    descripcion:'Lentes de Sol de un color divertido',
});
productList.push ({
    Id:7,
    name:'Sunglasses',
    price: 70,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    descripcion:'Lentes de Sol de un color amarillo'
});
productList.push ({
    Id:8,
    name:'Bicycle seat bag',
    price: 95,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    descripcion:'Mochila de bicicleta para llevar cualquier cosa que necesites'
}); 

function renderProducts(arr){
for( product of arr){
    const productCard = document.createElement('div');    
    productCard.classList.add("product-card");
    
    const productImageCard=document.createElement('img');
    productImageCard.setAttribute('src',product.image);
    productImageCard.setAttribute('idProducto',product.Id);
    productImageCard.addEventListener('click',openProductDetailAside);

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv=document.createElement('div');
    
    const productPrice=document.createElement('p');
    productPrice.innerText='S/.' + product.price;

    const productName=document.createElement('p');
    productName.innerText= product.name;    

    const productInfoFigure=document.createElement('figure');
    const productImgCart=document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    productImgCart.setAttribute('idProducto',product.Id);
    productImgCart.addEventListener('click',sumarProducto);

    productCard.appendChild(productImageCard);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfoFigure.appendChild(productImgCart);
    cardsContainer.appendChild(productCard);
};
}

renderProducts(productList);

