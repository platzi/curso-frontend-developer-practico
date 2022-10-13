/*Variables para mostrar menu desktop */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Variables para mostrar menu mobile */
const menu = document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');

/*Variables para mostrar carrito de compras */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

/**Variables para el contenedor de productos */
const cardContainer = document.querySelector('.cards-container');

/**Variable para contenedor de los detalles de productos */
const productDitailContainer = document.querySelector('.product-detail-secundary');
const productDitailCloseIcon = document.querySelector('.product-detail-secundary-close')

/**Funcion para menu desktop */
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

/**Funcion para menu mobile */
menu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    const isAsideSecundaryClosed = productDitailContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    if (!isAsideSecundaryClosed) {
        productDitailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

/**Funcion para menu carrito de compras */
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideSecundaryClosed = productDitailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isAsideSecundaryClosed) {
        productDitailContainer.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

/**Funcion para abrir detalles de productos */
function openProductDetailsAside() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    } 
    productDitailContainer.classList.remove('inactive');
}

/**Funcion para cerrar detalles de productos */
productDitailCloseIcon.addEventListener('click', closeProductDitailsAside);
function closeProductDitailsAside() {
    productDitailContainer.classList.add('inactive');
}


/**Generar listado de productos con js */
/**Crear objetos con las caracteristicas del producto y almacenarlo en el arreglo */
const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',

});

productList.push({
    name: 'Computadora',
    price: 400,
    image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""',
    
});

productList.push({
    name: 'Mesa',
    price: 100,
    image: 'https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""',
    
})

productList.push({
    name: 'Libro',
    price: 100,
    image: 'https://images.pexels.com/photos/459791/pexels-photo-459791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""',
    
})


/**Encapsulamos el ciclo en una funcion */
function renderProducts(arr) {
    /**Crear el producto en la pagina mediante el DOM */
    for (arr of productList) {
        /**Crear div - product-card */
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        /*Crear producto con la informacion del los objetos del arreglo */
        /**Imagen con url especifica del objeto */
        const productImg = document.createElement('img');
        productImg.setAttribute('src', arr.image);
        productImg.addEventListener('click', openProductDetailsAside);
    
        /**Contendor div product-info */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        /**Contendor div */
        const productInfoDiv = document.createElement('div');
        
        /**Etiqueta que tendra el precio */
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + arr.price;
    
        /**Etiqueta que tendra el nombre */
        const productName = document.createElement('p');
        productName.innerHTML = '$' + arr.name;
    
        const producInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        /**Ordenamos las constantes creadas para enviar la info al html */
        producInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice,productName);
        productInfo.append(productInfoDiv,producInfoFigure);
        productCard.append(productImg,productInfo);
        cardContainer.appendChild(productCard);
    }
}

/**Ejecutar funcion que envia como argumento el parametro 'Arreglo' */
renderProducts(productList);