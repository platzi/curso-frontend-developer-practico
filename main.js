//  ---------------VARIABLES----------------
    const menuEmail = document.querySelector('.navbar-email');
    const desktopMenu = document.querySelector('.desktop-menu');

    const burguerMenu = document.querySelector('.burguerMenu');
    const menuMobile = document.querySelector('.mobile-menu');

    const cartMenu = document.querySelector('.navbar-shopping-cart');
    const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

    const cardsContainer = document.querySelector('.cards-container');

    const detailContainer = document.querySelector('#productDetail');
    const closeDetailContainer = document.querySelector('.product-detail-close');



    //  ---------------MOSTRAR/OCUTAR MENU EMAIL----------------

    menuEmail.addEventListener('click', toggleDesktopMenu);
    function toggleDesktopMenu() {
        const ishowCartClosed = shoppingCartContainer.classList.contains('inactive');

    if (!ishowCartClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
        desktopMenu.classList.toggle('inactive');
    }

//  -----------mostrar/ocultar menu en mobile--------------------

burguerMenu.addEventListener('click', toggleMenuMobile); 

    function toggleMenuMobile() {
    const ishowCartClosed = shoppingCartContainer.classList.contains('inactive');

    if (!ishowCartClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeDetailProduct ()
    
    {
        menuMobile.classList.toggle('inactive')
    }
}




    //  -----------mostrar/ocultar menu en desktop--------------------

    cartMenu.addEventListener('click', toggleShowCart);

    function toggleShowCart(){
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');

    if (!isMenuMobileClosed) {
        menuMobile.classList.add('inactive');
    }

    const isDetailContainerClosed = detailContainer.classList.contains('inactive');

    if (!isDetailContainerClosed) {
        detailContainer.classList.add('inactive');
    }
    
    {
        shoppingCartContainer.classList.toggle('inactive');
    }
}
// ----------mostrar detalle del producto-----------
function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');


    detailContainer.classList.remove('inactive');
}

//Ocultar detalle del producto -------------
closeDetailContainer.addEventListener('click',closeDetailProduct);
function closeDetailProduct (){
    detailContainer.classList.add('inactive');
}

//---------- INVENTARIO----------------------------
const inventarioList = [];
inventarioList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
inventarioList.push(
    {
        name: 'Pantalla',
        price: 220,
        image: 'https://images.samsung.com/is/image/samsung/mx-full-hd-t5300-un43t5300afxzx-frontblack-234815390?$650_519_PNG$'
    }
);
inventarioList.push(
    {
        name: 'Xbox',
        price: 620,
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4FkjX?ver=c092'
    }
);

function renderProducts(arr){
    for (product of inventarioList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside)

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price
        const  productName = document.createElement('p');
        productName.innerText=  product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}
renderProducts(inventarioList)