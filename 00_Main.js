const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('#shoppingCartDetail');

const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');

const productDetailClose = document.querySelector('.product-detail-close');



menuEmail.addEventListener('click',toggleDesktopMenu); /*A la variable menuEmail en el evento de darle click, mandamos a llamar a la funcion toggleDesktopMenu*/
menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click',toggleProductDetail);

productDetailClose.addEventListener('click', closeProductDetailAside);

function mostrarProducto(e){

    if(e.target.classList.contains('img-product')){
        const producto = e.target.parentElement;
        console.log(producto.querySelector('img').src);
        console.log(productDetailContainer.querySelector('.img-cambiar').src)
        productDetailContainer.querySelector('.img-cambiar').src = producto.querySelector('img').src
    }
    
}
        
function toggleDesktopMenu(){
    const isShoppingCartContainerClosed = shoppingCartDetail.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailContainer){
        productDetailContainer.classList.add('inactive');
     }

    if(!isShoppingCartContainerClosed){
        shoppingCartDetail.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive'); //classList.toggle lo que hara es poner la clase dependiendo si ya la tiene o no.
}

function toggleMobileMenu(){
    const isMobileMenuOpenClosed = mobileMenu.classList.contains('inactive');
    const isShoppingCartContainerClosed = shoppingCartDetail.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailContainer){
        productDetailContainer.classList.add('inactive');
     }

    if(isShoppingCartContainerClosed==true){
        mobileMenu.classList.toggle('inactive');
    }
    else{
        shoppingCartDetail.classList.toggle('inactive');
        mobileMenu.classList.toggle('inactive');
    }
}

function toggleProductDetail() {
    const isMobileMenuOpenClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailContainer = productDetailContainer.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }

    if(!isProductDetailContainer){
        productDetailContainer.classList.add('inactive');
     }

    if(isMobileMenuOpenClosed==true){
        shoppingCartDetail.classList.toggle('inactive');
    }
    else{
        shoppingCartDetail.classList.toggle('inactive');
        mobileMenu.classList.toggle('inactive');
    }
}

function openProductDetailAside(){
    const isMobileMenuOpenClosed = mobileMenu.classList.contains('inactive');
    const isShoppingCartContainerClosed = shoppingCartDetail.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuOpenClosed){
        mobileMenu.classList.toggle('inactive');
    }

    if(!isShoppingCartContainerClosed){
        shoppingCartDetail.classList.toggle('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }
    
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList =[];
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

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');    //Este comando nos permite crear cada uno de los elementos en html usando JavaScript
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.classList.add('img-product');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

const productCard = document.querySelector('.cards-container');

productCard.addEventListener('click',mostrarProducto);
