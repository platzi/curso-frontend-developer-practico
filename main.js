const mainContainer = document.querySelector(".main-container");
const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuIconBurger = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

//const darken = document.querySelector('.darken');

menuEmail.addEventListener('click', toggleMenuDesktop);                             // "toggle" significa intercambiar  
menuIconBurger.addEventListener('click', toggleMenuMobile);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
mainContainer.addEventListener('click', closeAllMenus);


function toggleMenuDesktop(){                                                       // Despliegue de menú para Desktop
    productDetailContainer.classList.add('inactive');                               // Cierro el "aside" que tiene los detalles de los productos
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');     // Guardamos en una varialble True o False si el elemento aside '.product-detail' esta desplegado o no

    if(!isAsideClosed){                                                             // Verificamos que el aside esta abierto
        shoppingCartContainer.classList.add('inactive');                            // Cerramos el aside '.product-detail' al agregarle la class '.inactive'
    } 
    desktopMenu.classList.toggle('inactive');                                       // Desplegamos o ocultamos el elemento desktopMenu '.desktop-menu' usando el atributo "toggle()"

    //const isMenuOpen = !desktopMenu.classList.contains('inactive');

    // if(isMenuOpen)
    //     darken.classList.remove('inactive');
    // else
    //     darken.classList.add('inactive');
}

function toggleMenuMobile(){                                                        // Despliegue de menú para Mobile
    closeProductDetailAside();                                                      // Nos aseguramos de cerrar el "aside" de la información del producto
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');     // Guardamos en una varialble True o False si el elemento aside '.product-detail' esta desplegado o no

    if(!isAsideClosed){                                                             // Verificamos que el aside esta abierto
        shoppingCartContainer.classList.add('inactive');                            // Cerramos el aside '.product-detail' al agregarle la class '.inactive'
    } 
    mobileMenu.classList.toggle('oculto');                                          // Acá usé otra transición para mostra el menú para mobile
}

function toggleCarritoAside(){                                                      // Despliegue de menu de carrito
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');           // Guardamos en una variable si el elemento ".mobile-menu" contiene la class 'inactive' (True si '.inactive' esta agregado o False si '.inactive' no esta agregado)

    if(!isMobileMenuClosed){                                                        // Verificamos si el '.mobile-menu' esta desplegado
        mobileMenu.classList.add('oculto');                                         // Lo cerramos usando la class '.oculto'
    } 
    shoppingCartContainer.classList.toggle('inactive');                             // Desplegamos el aside '.product-detail' usando el atributo 'toggle'


    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');       // Guardo en una variable True o False si el 'product-detail' esta abierto    
    if(!isProductDetailClosed){                                                        
        productDetailContainer.classList.add('inactive');                                         
    } 
}

function openProductDetailAside(){                                                   // Función para mostrar el detalle en un "aside" sobre el producto seleccionado
    shoppingCartContainer.classList.add('inactive');                        // Siempre que queramos mostrar el 'product-detail' vamos a cerrar la ventana del carrito
    productDetailContainer.classList.remove('inactive');                    // Mostramos nuestra carta de los detalles del producto
    //darken.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

function closeAllMenus() {                                                           // Función que cierra todos los menus cuando se da "click" a cualquier espacio afuera de los menús                
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isAsideClosed = shoppingCartContainer.classList.contains('oculto');
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isAsideClosed )  {
        console.log('ocultando menus');
        mobileMenu.classList.add("oculto");
        desktopMenu.classList.add("inactive");   
        shoppingCartContainer.classList.add("inactive");
    }
    //darken.classList.add('inactive');
}


function renderProducts(arrayProducts){                                          // Función que despliega los elementos de un Array para los productos de la tienda   
    for(product of arrayProducts){                                               // Voy a recorrer los elementos de mi Array de Objetos, y generar elementos HTML con sus class de CSS usando JavaScript
        // En esta sección por a generar mis elementos HTML                      // Para maquetar este diseño, use de referencia el archivo HTML de origen de las imagenes 
        const productCard =  document.createElement('div');                      // Creo un elemento <div> 
        productCard.classList.add('product-card');                               // Le agrego su class correspondiente 'product-card'
     
        const productImg = document.createElement('img');                        // Creo un elemento <img>
        productImg.setAttribute('src', product.image);                           // Aqui le agrego al atributo 'src' la propiedad 'image' de cada uno de mis objetos del Array en vez de un String con la URL de imagen en concreto
        productImg.addEventListener('click', openProductDetailAside);
     
        const productInfo =  document.createElement('div');                      
        productInfo.classList.add('product-info'); 
     
        const productInfoDiv =  document.createElement('div');                   
     
        const productPrice = document.createElement('p');                        // Creo un elemento <p>
        productPrice.innerText = '$' + product.price;                            // Usando la propiedad 'innerText' le agrego el precio correspondiento usando el precio del Objeto de turno
     
        const productName = document.createElement('p');                         // Creo un elemento <p>
        productName.innerText = product.name;                                    // Usando la propiedad 'innerText' le agrego el nombre correspondiento usando el nombre del Objeto de turno
     
        const productInfoFigure =  document.createElement('figure');             // Creo un elemento <figure>
        const productImgCart =  document.createElement('img'); 
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');        // Le mando un URL de la imagen ya que siempre será la misma
      
        // En esta sección voy insertar mis elementos generados arriba a sus respectivas etiquetas
        productInfoFigure.appendChild(productImgCart);                           // Inserto mi imagen "productImgCart" adentro de mi elemento <figure>
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        productInfo.append(productInfoDiv, productInfoFigure);                   // Inserto los contenores "productInfoDiv" y "productInfoFigure" a un <div> padre, tambien podemos usar "append()" para enviar mas de un parámetro a la vez
        productCard.append(productImg, productInfo);                             // Inserto la imagen e info de mi producto, tambien podemos usar "append()" para enviar mas de un parámetro a la vez
     
        cardsContainer.appendChild(productCard);                                 // Agregamos todas las anteriores etiquetas o elementos al contenedor padre o final
    }
}




const productList = [];                                                             // Array de los productos de mi tienda, contiene Objetos como elementos
productList.push({                                                                  // Le voy a agregar datos de un Objeto a mi Array
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({                                                          
    name: 'Screen',
    price: 220,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
})
productList.push({                                                          
    name: 'Computer',
    price: 620,
    image: 'https://images.unsplash.com/photo-1566647387313-9fda80664848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
})


renderProducts(productList);                                                    // Generamos las imagenes e información de los productos, le enviamos un array con los productos como Objetos


window.addEventListener('click', function(e){                                   // Con este evento imprimo que parte del HTML le hice click
   this.console.log(e.target);
});


function mostrarProductosDinamico(arrayProducts){
    arrayProducts.forEach(product => {                                               
        const productCard =  document.createElement('div');                      
        productCard.classList.add('product-card');     
        
        productCard.addEventListener('click',()=>{ //evento de escucha
            openProductInfo(product); //llamo a la funcion

        })
     
        const productImg = document.createElement('img');                        
        productImg.setAttribute('src', product.image);                           
        productImg.addEventListener('click', openProductDetailAside);
     
        const productInfo =  document.createElement('div');                      
        productInfo.classList.add('product-info'); 
     
        const productInfoDiv =  document.createElement('div');                   
     
        const productPrice = document.createElement('p');                        
        productPrice.innerText = '$' + product.price;                            
     
        const productName = document.createElement('p');                         
        productName.innerText = product.name;                                    
     
        const productInfoFigure =  document.createElement('figure');             
        const productImgCart =  document.createElement('img'); 
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');        
      
        // En esta sección voy insertar mis elementos generados arriba a sus respectivas etiquetas
        productInfoFigure.appendChild(productImgCart);                           
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        productInfo.append(productInfoDiv, productInfoFigure);                   
        productCard.append(productImg, productInfo);                             
     
        cardsContainer.appendChild(productCard);                                 
    });

    const openProductInfo = (product)=>{ //muestra el aside con la info del producto seleccionado
        const aside = document.querySelector('#productDetail');
        const productImg = document.querySelector('.product-detail-main-img');
        const productPrice = document.querySelector('.product-info .product-price');
        const productName= document.querySelector('.product-info .product-name');
            aside.classList.remove('inactive');
            productImg.setAttribute('src', product.img);
            productPrice.textContent = product.price;
            productName.textContent = product.name;
    
    
    }
}