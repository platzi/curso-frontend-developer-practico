const navMenuEmail = document.querySelector('.navbar-email');
const iconBurguerMenu  = document.querySelector('.icon-burguer-menu');
const iconCarritoMenu = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');


const burguerMenuMobile  = document.querySelector('.burguer-menu-mobile');

const shoppingCartContainer = document.getElementById('shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.getElementById('productDetail');

const btnCloseProductDetail = document.querySelector('.aside-close');


navMenuEmail.addEventListener('click', toggleDesktopMenu);
iconBurguerMenu.addEventListener('click', toggleBurguerMenu);
iconCarritoMenu.addEventListener('click', toggleShoppingCartContainer);

btnCloseProductDetail.addEventListener('click', closeProductDetail);



function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');

    const isBurgerMenuClosed = burguerMenuMobile.classList.contains('inactive');
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.toggle('inactive');

    if (!isBurgerMenuClosed || !isAsideClosed || !isProductDetailClosed) {
        burguerMenuMobile.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
}

function toggleBurguerMenu () { 
    burguerMenuMobile.classList.toggle('inactive');

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.toggle('inactive');

    if (!isDesktopMenuClosed || !isAsideClosed || !isProductDetailClosed) {
        desktopMenu.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
}

function toggleShoppingCartContainer () {
    shoppingCartContainer.classList.toggle('inactive');

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isBurgerMenuClosed = burguerMenuMobile.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.toggle('inactive');

    if (!isDesktopMenuClosed || !isBurgerMenuClosed || !isProductDetailClosed) {
        desktopMenu.classList.add('inactive');
        burguerMenuMobile.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
}



function closeProductDetail() {
    productDetail.classList.toggle('inactive');
  
    if (!productDetail.classList.contains('inactive')) {
      productDetail.classList.add('inactive');
    }
}


// aca creamos los productos manualmente pero facilmente de sustituir por info real //

const productList = [] ;
productList.push({
    name: 'Bike',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });
productList.push({
    name: 'TV',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg'

});
productList.push({
    name: 'Chair',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_1280.jpg'

});
productList.push({
    name: 'Soft sofa',
    price: 18900,
    image: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg'
})
productList.push({
    name: 'Table lamp + Nightstand',
    price: 220,
    image: 'https://cdn.pixabay.com/photo/2017/10/23/22/01/living-2882718_1280.jpg'

});
productList.push({
    name: 'TeddyBear',
    price: 30,
    image: 'https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg'

});
productList.push({
    name: 'Real Bear',
    price: 0000,
    image: 'https://cdn.avpasion.com/wp-content/uploads/2022/10/osobear-750x536.jpg'

}); 

function renderProducts (arr) {

    for (product of productList) {

    //Acá creamos el primer div en una variable, luego le agregamos una clase//
     const productCard = document.createElement('div');
     productCard.classList.add('product-card');

    //Acá creamos una imagen, luego con .setAttribute le agregamos el link/src //
    // y hacemos referencia al valor .IMAGE que está dentro del objeto//
    
    const imgProduct = document.createElement('img');
    imgProduct.className = 'card-image';
    imgProduct.setAttribute('src', product.image);
    imgProduct.setAttribute('data-image', product.image); // agregar el atributo data-image
    

    //aca creamos un EventListener para escuchar cuando los usuarios clickan para ver foto //

    imgProduct.addEventListener('click', openProductDetail);

    //Acá vamos a crear otro div y agregarle la clase .product-Info//

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    //Creamos otro div pero Sin clase, esto es para que//
    //todo funcione bien con el CSS //

    const productInfoDiv = document.createElement('div');

    //Acá creamos el parrafo que contiene el precio//

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    //Acá creamos el parrafo que contiene el nombre//
    
    const productName = document.createElement('p');
    productName.innerText = product.name;

    //Acá creamos el FIGURE que contiene el IMG//

    const productInfoFigure = document.createElement('figure');

    const productInfoImg = document.createElement('img');
    productInfoImg.setAttribute('src', './ICONS/bt_add_to_cart.svg');

    productInfoFigure.appendChild(imgProduct);

    productInfoDiv.appendChild(productPrice);

    productInfoDiv.appendChild(productName);
    
    productInfo.appendChild(productInfoDiv);

    productInfo.appendChild(productInfoFigure);

    productInfoFigure.appendChild(productInfoImg);

    //ahora metemos las variables que tratamos como cajitas//

    productCard.appendChild(imgProduct);

    productCard.appendChild(productInfo);

    //ahora metemos las variables que tratamos como cajitas//

    cardsContainer.appendChild(productCard);
    }

    function openProductDetail(event) {

        const productImage = document.createElement('img');
        const productImageSrc = event.target.product.image; 
        
        // obtener el valor del atributo data-image
    
        productImage.setAttribute('src', productImageSrc);
        productDetail.appendChild(productImage);
    
        
        productDetail.classList.remove('inactive');
      
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
        const isBurgerMenuClosed = burguerMenuMobile.classList.contains('inactive');
        const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
        const isProductDetailClosed = productDetail.classList.contains('inactive');
      
        if (!isDesktopMenuClosed || !isBurgerMenuClosed || !isAsideClosed) {
          desktopMenu.classList.add('inactive');
          burguerMenuMobile.classList.add('inactive');
          shoppingCartContainer.classList.add('inactive');
          productDetail.classList.remove('inactive');
        }
    }
}

renderProducts(productList);



/*
function clickOnImages () {
    for (product.image of productList) {
        product.image.addEventListener('click',) 
    }
}

/



/*  ACA INTENTO HACER MAS INTERACTIVA LA PAGINA AÑADIENDOLE QUE AL PRESIONAR UNA IMAGEN
 EL ASIDE SE ABRA CORRESPONDIENTE A LA IMAGEN SELECICONADA


     const asideRenderImg = querySelector('aside');
    
    asideRenderImg.setAttribute('id', 'productDetail');
    asideRenderImg.classList.add('inactive')

    const divRenderImg = document.createElement('div');
    divRenderImg.classList.add('aside-close');

    const imgCloseProductDetail = document.createElement('img');
    imgCloseProductDetail.setAttribute('src', './icons/icon_close.png');
    imgCloseProductDetail.setAttribute('alt', 'close');

    const imgRenderProductDetail = document.createElement('img');
    imgRenderProductDetail.setAttribute('src', product.image);

    const divProductInfoRender = document.createElement('div');
    divProductInfoRender.classList('product-info');

    const pDivPrecio = document.createElement(product.price);
    
    const pDivName = document.createElement(product.name);

    const pDivTextInfo = document.createElement('p');
    pDivTextInfo.innerText('aca dabe ir el texto descriptivo en cada imagen. ah re seco. <b> no pero en serio, comprame el producto hijod·#***');

    const btnDivProductDetail = document.createElement('button');
    btnCloseProductDetail.classList.add('primary-button add-to-cart-button');

    const imgBtnCartAdd = document.createElement('img');
    imgBtnCartAdd.setAttribute('src', './icons/bt_add_to_cart.svg');

    const parraphAddToCart = document.createElement('p');
    parraphAddToCart.innerText('Add To Cart');

    // ahora viene la parte de unir todo dentro de un mismo objeto //

    productCardAside.appendChild(divRenderImg);
    productCardAside.appendChild(imgRenderProductDetail);
    productCardAside.appendChild(divProductInfoRender);

    divRenderImg.appendChild('imgCloseProductDetail');

    divProductInfoRender.appendChild(pDivPrecio);
    divProductInfoRender.appendChild(pDivName);
    divProductInfoRender.appendChild(pDivTextInfo);
    divProductInfoRender.appendChild(btnDivProductDetail);

    btnDivProductDetail.appendChild(imgBtnCartAdd);
    btnDivProductDetail.appendChild(parraphAddToCart);

    asideRenderImg.appendChild(productCardAside); */