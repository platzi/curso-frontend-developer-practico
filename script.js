// Elementos HTML
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIconMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

// Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuIconMobile.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/**
 * Funcion que aparece/desaparece el menu de escritorio
 */
function toggleDesktopMenu(event){
    const isAsideClosed = aside.classList.contains('inactive');

    if(isAsideClosed){
        desktopMenu.classList.toggle('inactive');
    }else{
        aside.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');
    }
    
}

/** 
 * Funcion que aparece/desaparece el menu del movil
 */
function toggleMobileMenu(event){
    
    const isAsideClosed = aside.classList.contains('inactive');

    if(isAsideClosed){
        mobileMenu.classList.toggle('inactive');
    }else{
        aside.classList.add('inactive');
        mobileMenu.classList.toggle('inactive');
    }
}

/**
 * Funcion que aparece/desaparece el carrito
 */
function toggleCarritoAside(event){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');

    /*Si el carrito esta cerrado entonces lo abrimos pero consideramos que no se encime con los demas menu's */
    if(isAsideClosed){
        // Si ambos menu estan cerrados pues abrimos el carrito
        if(isDesktopMenuClosed && isMobileMenuClosed){
            aside.classList.remove('inactive');
        }else{ // En caso de que alguno de los dos menu este abierto
            // Si ambos estan abiertos entonces los cerramos
            if(!isDesktopMenuClosed && !isMobileMenuClosed){
                desktopMenu.classList.add('inactive'); // Cerramos menu uno
                mobileMenu.classList.add('inactive'); // Cerramos menu dos
            }else if(!isDesktopMenuClosed){ // Si el primer menu esta abierto entonces lo cerramos
                desktopMenu.classList.add('inactive');
            }else if (!isMobileMenuClosed){ // Si el segundo menu esta abierto entonces lo cerramos
                mobileMenu.classList.add('inactive');
            }
            // Mostramos el carrito
            aside.classList.remove('inactive'); 
        }
    }else{
        /*Si el carrito esta abierto entonces lo cerramos y no nos importan los otros menu*/
        aside.classList.add('inactive');
    }

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