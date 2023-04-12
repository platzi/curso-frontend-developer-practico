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
mainContainer.addEventListener('click', closeAllMenus);

const productList = [];                                                             // Array de los productos de mi tienda, contiene Objetos como elementos

function populateProductList(){
    
    productList.push({                                                                  // Le voy a agregar datos de un Objeto a mi Array
        name: 'Vintage Bike',
        price: 250,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: "We desing this vintage bicycle so you can comfortably go to work with a unique and special design"
    })
    productList.push({                                                          
        name: 'Laptop Screen',
        price: 220,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        description: "We know you hate to search for a new screen, because it means that the previous one was broken, but don't worry we got you cover"
    })
    productList.push({                                                          
        name: 'Computer Set',
        price: 620,
        image: 'https://images.unsplash.com/photo-1566647387313-9fda80664848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
        description: "If you want to experience the best equipment either for work or gaming then this computer is your best choice"
    })
    productList.push({                                                          
        name: 'Keyboard and writing set',
        price: 299,
        image: 'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "Here's a sweet deal, with this amazing and stylish keyboard we give a writing kit so you can always write the perfect idea anytime, anywhere"
    })
    productList.push({                                                          
        name: 'Pink Headphones',
        price: 80,
        image: 'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "These trendy and cute heaphones are perfect for a unique music experience, plus they're good for matching your outfit"
    })
    productList.push({                                                          
        name: 'Gaming Headphones',
        price: 125,
        image: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "These pitch black headphones are the best choice for experiencing the perfect gaming session"
    })
    productList.push({                                                          
        name: 'Design Tablet',
        price: 320,
        image: 'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "With this special tablet you can free your ideas and put the into a reality closer to you, plus it comes with a handy e-pencil"
    })
    productList.push({                                                          
        name: 'Computer Backpack',
        price: 80,
        image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "With its lightweithed design this backpack can make it feel like you aren't carrying anything at all"
    })


    productList.push({                                                                  // Le voy a agregar datos de un Objeto a mi Array
        name: 'Vintage Bike',
        price: 250,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: "We desing this vintage bicycle so you can comfortably go to work with a unique and special design"
    })
    productList.push({                                                          
        name: 'Laptop Screen',
        price: 220,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        description: "We know you hate to search for a new screen, because it means that the previous one was broken, but don't worry we got you cover"
    })
    productList.push({                                                          
        name: 'Computer Set',
        price: 620,
        image: 'https://images.unsplash.com/photo-1566647387313-9fda80664848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
        description: "If you want to experience the best equipment either for work or gaming then this computer is your best choice"
    })
    productList.push({                                                          
        name: 'Keyboard and writing set',
        price: 299,
        image: 'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "Here's a sweet deal, with this amazing and stylish keyboard we give a writing kit so you can always write the perfect idea anytime, anywhere"
    })
    productList.push({                                                          
        name: 'Pink Headphones',
        price: 80,
        image: 'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "These trendy and cute heaphones are perfect for a unique music experience, plus they're good for matching your outfit"
    })
    productList.push({                                                          
        name: 'Gaming Headphones',
        price: 125,
        image: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "These pitch black headphones are the best choice for experiencing the perfect gaming session"
    })
    productList.push({                                                          
        name: 'Design Tablet',
        price: 320,
        image: 'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "With this special tablet you can free your ideas and put the into a reality closer to you, plus it comes with a handy e-pencil"
    })
    productList.push({                                                          
        name: 'Computer Backpack',
        price: 80,
        image: 'https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: "With its lightweithed design this backpack can make it feel like you aren't carrying anything at all"
    })
}

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
    desktopMenu.classList.add('inactive');  

    if(!isMobileMenuClosed){                                                        // Verificamos si el '.mobile-menu' esta desplegado
        mobileMenu.classList.add('oculto');                                         // Lo cerramos usando la class '.oculto'
    } 
    shoppingCartContainer.classList.toggle('inactive');                             // Desplegamos el aside '.product-detail' usando el atributo 'toggle'


    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');       // Guardo en una variable True o False si el 'product-detail' esta abierto    
    if(!isProductDetailClosed){                                                        
        productDetailContainer.classList.add('inactive');                                         
    } 
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

function renderProducts2(arrayProducts){ 
    arrayProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', () => openProductDetailAside2(product));

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure =  document.createElement('figure');             // Creo un elemento <figure>
        const productImgCart =  document.createElement('img'); 
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    });
}

function openProductDetailAside(){
    productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
    shoppingCartContainer.classList.add('inactive');                        // Siempre que queramos mostrar el 'product-detail' vamos a cerrar la ventana del carrito
    productDetailContainer.classList.remove('inactive');                    // Mostramos nuestra carta de los detalles del producto
}

function openProductDetailAside2(product){                                                   // Función para mostrar el detalle en un "aside" sobre el producto seleccionado
    const productDetailContainer = document.querySelector('#productDetail');                // Vacio el contenedor que pueda tener info de otro producto
    productDetailContainer.innerHTML = '';

    shoppingCartContainer.classList.add('inactive');                        // Siempre que queramos mostrar el 'product-detail' vamos a cerrar la ventana del carrito
    productDetailContainer.classList.remove('inactive');                    // Mostramos nuestra carta de los detalles del producto

    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close')

    const productDetailCloseImg = document.createElement('img');
    productDetailCloseImg.setAttribute('src', "./icons/icon_close.png")

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;

    const cartButtonImg = document.createElement('img');
    cartButtonImg.setAttribute('src', "./icons/bt_add_to_cart.svg");

    const buttonAdd2Cart = document.createElement('button');
    
    buttonAdd2Cart.classList.add('primary-button');
    buttonAdd2Cart.classList.add('add-to-cart-button');
    
    const label = document.createTextNode("Add to cart");
    
    buttonAdd2Cart.append(cartButtonImg, label);

    productDetailClose.appendChild(productDetailCloseImg);

    productInfoDiv.append(productPrice, productName, productDescription);

    productInfo.appendChild(productInfoDiv);

    productDetailContainer.appendChild(productDetailClose);
    productDetailContainer.appendChild(productImg);
    productDetailContainer.appendChild(productInfo);
    productDetailContainer.appendChild(buttonAdd2Cart);

    productDetailClose.addEventListener('click', closeProductDetailAside);
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}


populateProductList();
renderProducts2(productList);                                                    // Generamos las imagenes e información de los productos, le enviamos un array con los productos como Objetos

window.addEventListener('click', function(e){                                   // Con este evento imprimo que parte del HTML le hice click
   this.console.log(e.target);
});


