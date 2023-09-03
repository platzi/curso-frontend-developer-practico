const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);//Evento de click en el menu de usuario de desktop

menuBurger.addEventListener('click', toggleMobileMenu);//Evento de click en el menu hamburgesa de mobile

iconCarrito.addEventListener('click', toggleshoppingCartContainer);//Evento de click en el detalle del producto

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);//Evento de click en el icono de cerrar

function toggleMobileMenu() {
    //Constante que contiene Booleano de si esta inactivo el shoppingCartContainer
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    // Si el Detalle del carrito esta abierto lo cerramos
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleDesktopMenu(){
    //Constante que contiene Booleano de si esta inactivo el shoppingCartContainer
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    
    // Si el Detalle del carrito esta abierto lo cerramos
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleshoppingCartContainer(){
    //Constante que contiene Booleano de si esta inactivo el menu del Celular
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    //Si el menu de usuario de desktop esta activo lo cerramos
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    //Constante que contiene Booleano de si esta inactivo el menu de usario de desktop
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // Si el meunu Mobile esta abierto se cierra
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    //Constante que contiene Booleano de si esta inactivo el detalle del producto
    const isProductDetailCLosed = productDetailContainer.classList.contains('inactive');
    // Si el detalle del producto esta abierto se cierra
    if (!isProductDetailCLosed){
        productDetailContainer.classList.add('inactive');
    }



    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(product){
    displayInfoInProductDetail(product);

    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Montain Bike',
    price: 190,
    image: 'https://biciurbana.com.ar/14268-large_default/mountain-bike-fire-bird-r29.jpg',
    descripcion: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Racing Bike',
    price: 220,
    image: 'https://images.immediate.co.uk/production/volatile/sites/21/2021/03/20210317_SB_5DSR_MG_4042-4cbecec.jpg?webp=true&quality=90&resize=620%2C413',
    descripcion: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Montain Bike',
    price: 190,
    image: 'https://biciurbana.com.ar/14268-large_default/mountain-bike-fire-bird-r29.jpg',
    descripcion: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Racing Bike',
    price: 220,
    image: 'https://images.immediate.co.uk/production/volatile/sites/21/2021/03/20210317_SB_5DSR_MG_4042-4cbecec.jpg?webp=true&quality=90&resize=620%2C413',
    descripcion: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Montain Bike',
    price: 190,
    image: 'https://biciurbana.com.ar/14268-large_default/mountain-bike-fire-bird-r29.jpg',
    descripcion: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

function displayInfoInProductDetail (product){
    // Limpiar el productDetailContainer eliminando todos los elementos hijos
    while (productDetailContainer.firstChild) {
        productDetailContainer.removeChild(productDetailContainer.firstChild);
    }

    // Botón de cierre
    const closeButton = document.createElement('div');
    closeButton.classList.add('product-detail-close');
    const closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', './icons/icon_close.png');
    closeIcon.setAttribute('alt', 'close');
    closeButton.addEventListener('click', closeProductDetailAside)
    closeButton.appendChild(closeIcon);

    // Agregar el botón de cierre al productDetailContainer
    productDetailContainer.appendChild(closeButton);

    //Imagen del producto
    const displayProductImg = document.createElement('img');
    displayProductImg.setAttribute('src', product.image);
    //Agregamos la imagen como hijo del productDetail
    productDetailContainer.appendChild(displayProductImg);

    //Div product-info
    const displayProductInfo = document.createElement('div');
    displayProductInfo.classList.add('product-info');

    const displayProductPrice = document.createElement('p');//Precio del producto
    displayProductPrice.innerText = '$' + product.price;
    const displayProductName = document.createElement('p');//Nombre del producto
    displayProductName.innerText = product.name;
    const displayProductDescription = document.createElement('p');//Descripcion del producto
    displayProductDescription.innerText = product.descripcion;

    displayProductInfo.append(displayProductPrice, displayProductName, displayProductDescription);

    productDetailContainer.appendChild(displayProductInfo);

    // Botón para añadir al carrito
  const displayButtonAddCart = document.createElement('button');
  displayButtonAddCart.classList.add('primary-button', 'add-to-cart-button');
  const displayImg = document.createElement('img');
  displayImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  displayImg.setAttribute('alt', 'add to cart');
  displayButtonAddCart.appendChild(displayImg);
  displayButtonAddCart.appendChild(document.createTextNode('Add to cart'));
  
  // Agregar el botón como hijo del productDetailContainer
  productDetailContainer.appendChild(displayButtonAddCart);
}

function RenderProduct (arr){
    let count = 0;
    for (product of productList) {
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
        ProductImg.setAttribute('alt', count);
        ProductImg.addEventListener('click', function() {
            const alt = ProductImg.getAttribute('alt');
            const product = productList[alt];
            openProductDetailAside(product); // Pasa el producto correcto a la función
          });
    
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
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', product.image);
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(ProductImg, productInfo);
    
        cardsContainer.appendChild(productCard);

        count++;
    }
}

RenderProduct(productList);
