const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const BurgerIcon = document.querySelector('.menu');
const mobileDesktop = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');
const containermain = document.querySelector('.cards-container');

function toogleDesktopMenu(){
    const isCartClosed = asideProductDetail.classList.contains('inactive');

    if(!isCartClosed){
        asideProductDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toogleMobile(){
    const isAsideClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideClosed){
        asideProductDetail.classList.add('inactive');
    }
    mobileDesktop.classList.toggle('inactive');
}

function hideShowShoppingCart(){
    const isMobileMenuClosed= mobileDesktop.classList.contains('inactive');
    const isAsideClosed= asideProductDetail.classList.contains('inactive');
    
    
    /* condiconales para comprabar como estan */
    //tambien si el mobile menu esta cerrado para cerrarlos
    if(!isMobileMenuClosed){
        mobileDesktop.classList.add('inactive');
    }
    asideProductDetail.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toogleDesktopMenu);
BurgerIcon.addEventListener('click', toogleMobile);
shoppingCarIcon.addEventListener('click', hideShowShoppingCart);

/*array con los productos*/ 
const productList = [];

productList.push({
    productName: 'Volta Viggo MTB Bike',
    productPrice: 400,
    productImage: 'https://newsport.vtexassets.com/arquivos/ids/14455744/1005178-a.jpg?v=637994758496270000'
}
)
productList.push({
    productName: 'Sony A7III',
    productPrice: 1600,
    productImage: 'https://arsonyb2c.vtexassets.com/arquivos/ids/358600/ILCE-7M3K-02-Dimension.jpg?v=637759146998830000'
}
)

productList.push({
    productName:'Sony A7IV',
    productPrice: 2500,
    productImage: 'https://static.bhphoto.com/images/images500x500/1682691076_1732436.jpg'
})

productList.push({
    productName:'Sony 135mm 1.8 GM for E mount',
    productPrice: 2000,
    productImage:'https://http2.mlstatic.com/D_NQ_NP_714734-MLA43203161277_082020-O.jpg'
})

productList.push({
    productName:'Sigma 135mm 1.8 ART for E mount',
    productPrice: 1100,
    productImage:'https://www.bhphotovideo.com/images/images2500x2500/sigma_135mm_f_1_8_dg_hsm_1393495.jpg'
})


/*Ciclo for of para recorrer el array*/
{/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */}
for (product of productList){
    /*comienzo a re crear la estrucutra de HTML para las cards de los productos con JS*/ 

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const imgageOfProduct = document.createElement('img');
    imgageOfProduct.setAttribute('src',product.productImage);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const divProductDetail = document.createElement('div');

    const price = document.createElement('p');
    price.innerText = '$'+ product.productPrice;

    const nameOfProduct = document.createElement('p');	
    nameOfProduct.innerText = product.productName;

    const productFigure = document.createElement('figure');
    
    const AddToCardIcon = document.createElement('img');

    AddToCardIcon.setAttribute('src','./icons/bt_add_to_cart.svg');

    /* una vez creada la estructura en JS tenemos que agregarlas a los padres */

    productFigure.appendChild(AddToCardIcon);

    divProductDetail.appendChild(price);
    divProductDetail.appendChild(nameOfProduct);

    productInfo.appendChild(divProductDetail);
    productInfo.appendChild(productFigure);

    productCard.appendChild(imgageOfProduct);
    productCard.appendChild(productInfo);

    /* aca agrego todo lo que hace en el for como ultimo pasa al contenedor que esta en el dom */
    containermain.appendChild(productCard);
    
}











/* control */
console.log('Js funciona')


