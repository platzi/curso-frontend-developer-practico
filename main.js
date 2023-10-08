const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const BurgerIcon = document.querySelector('.menu');
const mobileDesktop = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


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


const productList = [];

productList.push(
    {
        pName: 'Volt Viggo MTB Bike',
        pPrice: 400,
        pImage: 'https://voltabikes.com.ar/wp-content/uploads/2020/06/Bicis-0038-EDITADO-1330x888.jpg' 
    }
);

productList.push({
    pName: 'Sony A7III',
    pPrice: 1500,
    pImage : 'https://m.media-amazon.com/images/I/91rQ3XfEYzL._AC_SL1500_.jpg'
});

productList.push({
    pName:'Sony A7IV',
    pPrice: 2400,
    pImage: 'https://www.bhphotovideo.com/images/images2500x2500/sony_ilce_7m4_b_alpha_a7_iv_mirrorless_1667800.jpg' 
})

productList.push({
    pName: '135mm 1.8 Sigma art for Sony E',
    pPrice: 1100,
    pImage: 'https://http2.mlstatic.com/D_NQ_NP_841751-MLA31225279489_062019-O.jpg'
});

productList.push({
    pName: '135mm 1.8 Sigma art for Sony E',
    pPrice: 1100,
    pImage: 'https://http2.mlstatic.com/D_NQ_NP_841751-MLA31225279489_062019-O.jpg'
});
productList.push({
    pName: '135mm 1.8 Sigma art for Sony E',
    pPrice: 1100,
    pImage: 'https://http2.mlstatic.com/D_NQ_NP_841751-MLA31225279489_062019-O.jpg'
});

productList.push({
    pName: '135mm 1.8 Sigma art for Sony E',
    pPrice: 1100,
    pImage: 'https://http2.mlstatic.com/D_NQ_NP_841751-MLA31225279489_062019-O.jpg'
});

productList.push({
    pName: '135mm 1.8 Sigma art for Sony E',
    pPrice: 1100,
    pImage: 'https://http2.mlstatic.com/D_NQ_NP_841751-MLA31225279489_062019-O.jpg'
});

/* modelo estructura objeto
<div class="product-card">
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
      </div>
 */

/*Comienzo a cargar los productos en el HTML */


/*Meto el for en una función para tener mas orden*/ 

function AddProductToArray(array){
    for (product of array){

        const divProductCard = document.createElement('div');
        divProductCard.classList.add('product-card');
        
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src',product.pImage);
        
        const divproductInfo  = document.createElement('div');
        divproductInfo.classList.add('product-info');
        
        const divContainerP = document.createElement('div');
        const pContPrice = document.createElement('p');
        pContPrice.innerText = '$' + product.pPrice;
        const pContName = document.createElement('p');
        pContName.innerText = product.pName;
    
        const figureIconContainer = document.createElement('figure');
        const imgIconAddCart = document.createElement('img');
        imgIconAddCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        figureIconContainer.appendChild(imgIconAddCart);
    
        divContainerP.appendChild(pContPrice);
        divContainerP.appendChild(pContName);
    
        
        divproductInfo.appendChild(divContainerP);
        divproductInfo.appendChild(figureIconContainer);
    
        divProductCard.appendChild(imgProduct);
        divProductCard.appendChild(divproductInfo);
    
        cardsContainer.appendChild(divProductCard);
    
    }
}

AddProductToArray(productList);




console.log('Js funciona')


