const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const iconBurgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleMenuDesktop);                     // "toggle" significa intercambiar  
iconBurgerMenu.addEventListener('click', toggleMenuMobile);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleMenuDesktop(){                                               // Despliegue de menú para Desktop
    const isAsideClosed = aside.classList.contains('inactive');             // Guardamos en una varialble True o False si el elemento aside '.product-detail' esta desplegado o no

    if(!isAsideClosed){                                                     // Verificamos que el aside esta abierto
        aside.classList.add('inactive');                                    // Cerramos el aside '.product-detail' al agregarle la class '.inactive'
    } 
    desktopMenu.classList.toggle('inactive');                               // Desplegamos o ocultamos el elemento desktopMenu '.desktop-menu' usando el atributo "toggle()"
}


function toggleMenuMobile(){                                                // Despliegue de menú para Mobile
    const isAsideClosed = aside.classList.contains('inactive');             // Guardamos en una varialble True o False si el elemento aside '.product-detail' esta desplegado o no

    if(!isAsideClosed){                                                     // Verificamos que el aside esta abierto
        aside.classList.add('inactive');                                    // Cerramos el aside '.product-detail' al agregarle la class '.inactive'
    } 
    mobileMenu.classList.toggle('oculto');                                  // Acá usé otra transición para mostra el menú para mobile
}


function toggleCarritoAside(){                                              // Despliegue de menu de carrito
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');   // Guardamos en una variable si el elemento ".mobile-menu" contiene la class 'inactive' (True si '.inactive' esta agregado o False si '.inactive' no esta agregado)

    if(!isMobileMenuClosed){                                                // Verificamos si el '.mobile-menu' esta desplegado
        mobileMenu.classList.add('oculto');                                 // Lo cerramos usando la class '.oculto'
    } 
    aside.classList.toggle('inactive');                                     // Desplegamos el aside '.product-detail' usando el atributo 'toggle'
}


const productList = [];                                                     // Array de los productos de mi tienda, contiene Objetos como elementos
productList.push({                                                          // Le voy a agregar datos de un Objeto a mi Array
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({                                                          
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({                                                          
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


function renderProducts(arrayProducts){                                          // Función que despliega los elementos de un Array para los productos de la tienda   
    for(product of arrayProducts){                                               // Voy a recorrer los elementos de mi Array de Objetos, y generar elementos HTML con sus class de CSS usando JavaScript
        // En esta sección por a generar mis elementos HTML                      // Para maquetar este diseño, use de referencia el archivo HTML de origen de las imagenes 
        const productCard =  document.createElement('div');                      // Creo un elemento <div> 
        productCard.classList.add('product-card');                               // Le agrego su class correspondiente 'product-card'
     
        const productImg = document.createElement('img');                               // Creo un elemento <img>
        productImg.setAttribute('src', product.image);                                  // Aqui le agrego al atributo 'src' la propiedad 'image' de cada uno de mis objetos del Array en vez de un String con la URL de imagen en concreto
     
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
      
        // En esta sección voy a colocar e insertar mis elementos generados arriba
        productInfoFigure.appendChild(productImgCart);                           // Inserto mi imagen "productImgCart" adentro de mi elemento <figure>
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        productInfo.append(productInfoDiv, productInfoFigure);                   // Inserto los contenores "productInfoDiv" y "productInfoFigure" a un <div> padre, tambien podemos usar "append()" para enviar mas de un parámetro a la vez
        productCard.append(productImg, productInfo);                             // Inserto la imagen e info de mi producto, tambien podemos usar "append()" para enviar mas de un parámetro a la vez
     
        cardsContainer.appendChild(productCard);                                 // Agregamos todas las anteriores etiquetas o elementos al contenedor padre o final
    }
}

renderProducts(productList);                                                    // Generamos las imagenes e información de los productos, le enviamos un array con los productos como Objetos

