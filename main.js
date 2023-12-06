const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const menuIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");
const menuCarro = document.querySelector (".navbar-shopping-cart");
const shoppingCart = document.querySelector ("#shoppingCart");
const cardsContainer = document.querySelector(".cards-container");
const openProductDetailContainer = document.querySelector("#productDetail");
const closedProductDetailIcon = document.querySelector(".product-detail-close");


menuEmail.addEventListener('click', toggleMenu);
menuIcon.addEventListener ('click', toggleMobile);
menuCarro.addEventListener ('click', toggleCarro);
closedProductDetailIcon.addEventListener ('click', closedProductaside);

function toggleMenu (){
    const isAsideClosed = shoppingCart.classList.contains('inactivo');
    if( !isAsideClosed){
        shoppingCart.classList.add('inactivo')
    }
    desktopMenu.classList.toggle('inactivo');

}

function toggleMobile (){
    const isAsideClosed = shoppingCart.classList.contains('inactivo');
    if( !isAsideClosed){
        shoppingCart.classList.add('inactivo')
    }
    mobileMenu.classList.toggle('inactivo');

}

function toggleCarro (){
    const isMobilClosed = mobileMenu.classList.contains('inactivo');
    
        if( !isMobilClosed){
        mobileMenu.classList.add('inactivo')
    }

    const isProductDetailclose = openProductDetailContainer.classList.contains('inactivo');
    
        if( !isProductDetailclose){
            openProductDetailContainer.classList.add('inactivo')
    }

    shoppingCart.classList.toggle('inactivo')
   
    
}

function openProductDetailAside (){
    shoppingCart.classList.add('inactivo');
    openProductDetailContainer.classList.remove('inactivo');
}

function closedProductaside (){
    openProductDetailContainer.classList.add('inactivo');
}

    const listaProducto = []
    listaProducto.push ({
        nombre: 'Bike',
        precio: 120,
        imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        });
    listaProducto.push ({
        nombre: 'Carro',
        precio: 470,
        imagen: './imagenes/carro.png',
        });
    listaProducto.push ({
        nombre: 'Yate',
        precio: 270,
        imagen: './imagenes/yate.png',
        });
    listaProducto.push ({
        nombre: 'Yate',
        precio: 270,
        imagen: './imagenes/yate.png',
        });

function rederProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.imagen);
        img.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productDiv = document.createElement('div');

        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$' + product.precio;

        const productNombre = document.createElement('p');
        productNombre.innerText = product.nombre;

        productDiv.appendChild(productPrecio);
        productDiv.appendChild(productNombre);


        const productFigure = document.createElement('figure');
        
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productImgCart);
        

        productInfo.appendChild(productDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

         cardsContainer.appendChild(productCard);   
    }
}

rederProducts(listaProducto);
        
