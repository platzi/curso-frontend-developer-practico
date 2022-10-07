// Elementos HTML
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuIconMobile.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/**
 * Funcion que aparece/desaparece el menu de escritorio
 */
function toggleDesktopMenu(event){
    toggleMenu(desktopMenu);
}

/** 
 * Funcion que aparece/desaparece el menu del movil
 */
function toggleMobileMenu(event){
    toggleMenu(mobileMenu);
}

/**
 * Funcion que aparece/desaparece el carrito
 */
function toggleCarritoAside(event){
    toggleMenu(shoppingCartContainer);
}

// Creacion e insercion de HTML desde js

/**
 * Funcion constructura de un producto
 * @param nombre nombre del producto.
 * @param precio precio del producto.
 * @param img imagen del producto.
 */
function producto (nombre,precio,img){
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
}

/**
 * Funcion que recorre una lista de productos 
 * y la agrega al codigo HTML.
 * @param arr lista de productos 
 */
 function renderProducts(arr){
    // Codigo HTML a crear
    /*<div class="product-card">
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
        </div>*/

    // Iteramos sobre nuestro arreglo de productor y lo agregamos al HTML
    for(product of arr){
        // MAQUETACION HTML CON JS
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.img);
        // Evento para la imagen
        productImg.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const price = document.createElement('p');
        price.innerHTML = "$" + product.precio;
        const name = document.createElement('p');
        name.innerHTML = product.nombre;

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src',"./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfoDiv.appendChild(price);
        productInfoDiv.appendChild(name);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        // Agregamos el contenido a un elemento html ya creado en el archivo
        cardsContainer.appendChild(productCard);

    }
}

/**
 * Funcion que abre la pestania de detalles del producto
 * @param {*} event 
 */
function openProductDetailAside(event){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

/**
 * Funcion que cierra la pestania de detalles del producto
 * @param {*} event 
 */
function closeProductDetailAside(event){
    productDetailContainer.classList.add('inactive');
}

// Arreglo de menus y pestanias que se pueden encimar
const menus = []
menus.push(desktopMenu);
menus.push(mobileMenu);
menus.push(productDetailContainer);
menus.push(shoppingCartContainer);

/**
 * Funcion que abre o cierra
 * la pestania pasada como parametro.
 * En caso de estar cerrada, cierra
 * todas las demas pestanias de la aplicacion
 * para evitar que se encimen y
 * abre/muestra la pestania pasada como parametro.
 * @param menu a cerrar/abrir
 */
function toggleMenu(menu){
    const isMenuClosed = menu.classList.contains('inactive');
    if(isMenuClosed){
        // Cierra todos los menus que no sean menu
        for(m of menus){
            if(m != menu){
                m.classList.add('inactive');
            }
        }
        menu.classList.remove('inactive');
    }else{
        menu.classList.add('inactive');
    }
    
    
}

// Productos ya creados
const p1 = new producto("Bike",250,"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
const p2 = new producto("Headphones",300,"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
const p3 = new producto("Sneakers",500,"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg");

// Lista de productos
const productList = [];
productList.push(p1);
productList.push(p2);
productList.push(p3);

// Agregamos la lista de productos 
renderProducts(productList);