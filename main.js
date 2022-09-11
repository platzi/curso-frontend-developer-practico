const linav = document.querySelector(".navbar-email")
const desmenu = document.querySelector(".desktop-menu")
const burguer = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carrito = document.querySelector(".navbar-shopping-cart")
const listaCarrito = document.querySelector("#shoppingCartContainer")
const cardsContainer = document.querySelector('.cards-container')



// PRIMERA FORMA DE HACERLO 

// NAV 

// linav.addEventListener('click', desplegable)

// function desplegable() {
//     desmenu.classList.toggle('inactive')
//     listaCarrito.classList.add('inactive')
// }

// // BURGUER DESPLEGABLE 

// burguer.addEventListener('click', hamburguesa)

// function hamburguesa() {
//     mobileMenu.classList.toggle('inactive')
//     listaCarrito.classList.add('inactive')
// }

// // CARRITO DESPLEGABLE 

// carrito.addEventListener('click', car)

// function car() {
//     listaCarrito.classList.toggle('inactive')
//     mobileMenu.classList.add('inactive')
//     desmenu.classList.add('inactive')
// }

// PRIMERA FORMA DE HACERLO 

// SEGUNDA FORMA DE HACERLO 

linav.addEventListener('click', desplegable)

function desplegable() {
    

    if (listaCarrito.classList.contains('inactive') && detallesProduct.classList.contains('inactive')){
        desmenu.classList.toggle('inactive')
    } else {
        listaCarrito.classList.add('inactive')
        detallesProduct.classList.add('inactive')
        desmenu.classList.toggle('inactive')
    }
}

// BURGUER DESPLEGABLE 

burguer.addEventListener('click', hamburguesa)

function hamburguesa() {
    

    if (listaCarrito.classList.contains('inactive') && detallesProduct.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive')
    } else {
        listaCarrito.classList.add('inactive')
        detallesProduct.classList.add('inactive')
        mobileMenu.classList.toggle('inactive')
    }
    
}

// CARRITO DESPLEGABLE 

carrito.addEventListener('click', car)

function car() {
    // listaCarrito.classList.toggle('inactive')
   

    if(mobileMenu.classList.contains('inactive') && desmenu.classList.contains('inactive') && detallesProduct.classList.contains('inactive')){
        listaCarrito.classList.toggle('inactive')
    } else {
        mobileMenu.classList.add('inactive')
        desmenu.classList.add('inactive')
        detallesProduct.classList.add('inactive')
        listaCarrito.classList.toggle('inactive')
    }
}

// SEGUNDA FORMA DE HACERLO 

const productList = [];

productList.push({
    name : 'bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name : 'televisor',
    precio: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name : 'computador',
    precio: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name : 'bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name : 'televisor',
    precio: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name : 'computador',
    precio: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


/* <div class="product-card">
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
      </div> */


// PARA ABRIR EL PRODUCT-DETAIL 

const detallesProduct = document.querySelector('#product-detail')

function renderList(arr) {
    for (product of arr) {
        // CREAR DIV DE PRODUCT-CARD Y AGREGARLE LA CLASE PRODUCT-CARD
       const productCard =  document.createElement('div')
       productCard.classList.add('product-card')
       productCard.addEventListener('click', abrirProductDetail) 

       function abrirProductDetail() {
            detallesProduct.classList.remove('inactive')

            if (listaCarrito.classList.contains('inactive') && desmenu.classList.contains('inactive')) {
                detallesProduct.classList.remove('inactive') 
            } else {
                listaCarrito.classList.add('inactive')
                desmenu.classList.add('inactive')
                detallesProduct.classList.remove('inactive')
            }
         }

        //  PARA CERRAR EL PRODUCT-DETAIL CLICKEANDO EN LA X 

        const x = document.querySelector('.product-detail-close')

        x.addEventListener('click', cerrarProductDetail)
        function cerrarProductDetail() {
            detallesProduct.classList.add('inactive')

             }

    //    CREAR LA ETIQUETA IMG Y AGREGARLE EL ATRIBUTO IMG Y EL ENLACE DE LA IMAGEN QUE SERIA PRODUCT.IMAGE 
       const productImg = document.createElement('img')
       productImg.setAttribute('src', product.image)
    
    //    CREAR EL DIV Y PONERLE LA CLASE PRODUCT INFO 
       const productInfo =  document.createElement('div')
       productInfo.classList.add('product-info')
    
    //    CREAR UN DIV Y CREAR 2 PARRAFOS CON SU CONTENIDO
       const divParrafo = document.createElement('div');
    
       const parrafoPrice = document.createElement('p')
       parrafoPrice.innerText = '$' + product.precio  
    
       const parrafoName = document.createElement('p')
       parrafoName.innerText = product.name
    
        // INSERTAR LOS HIJOS DENTRO DEL PADRE 
       divParrafo.appendChild(parrafoPrice)
       divParrafo.appendChild(parrafoName)
    
    //    CREAR UN FIGURE CON SU IMG DENTRO
        const figure = document.createElement('figure')
    
        const imageFigure = document.createElement('img')
        imageFigure.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        // INSERTAR LOS HIJOS DENTRO DEL PADRE 
        figure.appendChild(imageFigure)
    
        // AHORA INSERTARLE LOS HIJOS A PRODUCT-INFO 
        productInfo.appendChild(divParrafo)
        productInfo.appendChild(figure)
    
        // AHORA INSERTAR LOS HIJOS A PRODUCT-CARD
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        // AHORA INSERTAR EL PRODUCT-CARD EN CARD-CONTAINER 
       
        cardsContainer.appendChild(productCard);
    }
}

renderList(productList)

// PRODUCT-DETAIL 
// QUIERO QUE AL DARLE CLICK A ALGUN PRODUCTO, SE ABRA EL PRODUCT DETAIL 

// FORMA DE HACERLO 2 

// const detallesProduct = document.querySelector('#product-detail')

// cardsContainer.addEventListener('click', productDetail)

// function productDetail() {
//     detallesProduct.classList.remove('inactive')
// }

// // PARA CERRAR EL PRODUCT-DETAIL 

// const x = document.querySelector('.product-detail-close')

// x.addEventListener('click', cerrarProductDetail)

// function cerrarProductDetail() {
//     detallesProduct.classList.add('inactive')
// }