const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobMenu = document.querySelector('.mobile-menu');
const shcar = document.querySelector('.navbar-shopping-cart');
const detailP = document.querySelector('.product-detail');
const productAside = document.querySelector('.product-detail-p2');
const asideBtn = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const productList = [];
const productImgDetail = document.querySelector('.product-detail-image'); 
    
//LISTA DE PRODUCTO A PARTIR DE UN ARRAY

function construction(product, price, image){
    this.name = product;
    this.price = price;
    this.image = image;
}

let newProduct = new construction('Bike', 12700, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

let newProduct2 = new construction('Bicycle helmet', 1200, 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto');

let newProduct3 = new construction('Seat', 300, 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg');

let newProduct4 = new construction('Tennis Montain Bike', 2200, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg');

let newProduct5 = new construction('Bicycle seat bag', 800, 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg');


productList.push(newProduct, newProduct2, newProduct3, newProduct4, newProduct5);

//1 INTEGRACION DESPLIEGUE ASIDE POR CLICK A UN IMAGEN PRODUCT PARA COMPRAR
function closeAside(){
    productAside.classList.add('inactive');
}

asideBtn.addEventListener('click', closeAside); //1
  
function openAside(event){
    const isdetailPOpen = detailP.classList.contains('inactive');
    productImgDetail.setAttribute('src', event.target.src);

    if(!isdetailPOpen){
        detailP.classList.add('inactive');
    }
    productAside.classList.remove('inactive');
}



for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card') 
    const productImg = document.createElement('img'); 

    productImg.setAttribute('src', product.image); //1
    
    productImg.addEventListener('click', openAside);

    const productInfo = document.createElement('div'); 
    productInfo.classList.add('product-info'); 

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart); 
    
    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);

}
   
//2 INTEGRACION DE FUNCION DESKTOP MENU AL CLICK DEL CORREO
function toggleDesktopMenu(){
    const isdetailOpen = detailP.classList.contains('inactive');
    if(!isdetailOpen){
        detailP.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

//3 INTEGRACION DEL DESPLIEGUE DE BOTON HAMBURGUESA MOBILE
function toggleMobMenu(){
    const isdetailOpen = detailP.classList.contains('inactive');
    const isproductAsideOpen = productAside.classList.contains('inactive');

    if(!isdetailOpen){
        detailP.classList.add('inactive');
    }
    if(!isproductAsideOpen){
        productAside.classList.add('inactive');
    }

    mobMenu.classList.toggle('none'); 
}

//4 INTEGRACION DEL DESPLIEGUE MENU AL CLICK DEL CARRO DE COMPRAS
    function segnal(){
    const ismobileMenuOpen = mobMenu.classList.contains('none');
    const isDeksMenuOpen = desktopMenu.classList.contains('inactive');
    const isproductAsideOpen = productAside.classList.contains('inactive');

    switch(true){
        case !isproductAsideOpen:
            productAside.classList.add('inactive');
            break;
        case !isDeksMenuOpen:
            desktopMenu.classList.add('inactive');
            break;
        case !ismobileMenuOpen:
            mobMenu.classList.add('none');
            break;
    }
    detailP.classList.toggle('inactive'); 
}

//2
navEmail.addEventListener('click', toggleDesktopMenu);
//3
burguerMenu.addEventListener('click', toggleMobMenu);
//4
shcar.addEventListener('click', segnal);
