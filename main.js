const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const detailProduct = document.querySelector('#shoppingCard');
const cardContainer = document.querySelector('.cards-container');

const productDetailBuy= document.querySelector('.product-detail-buy');



menuEmail.addEventListener('click', toggleLittleMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', togglcarrito);


/**
 * Esta funcion verifica si al hacer click en el Usuario tenemos un menu activo, de ser así, le agrega la clase INACTIVE al menu activo.
 * 
 *   
 * */
function toggleLittleMenu(){
    const inDetailproductClose = detailProduct.classList.contains('inactive');

    if(!inDetailproductClose){
        detailProduct.classList.add('inactive')
    }
    //toggle agrega o saca la clase inactive segun esta esté o no.
    desktopMenu.classList.toggle('inactive');
}

/**
 * Esta funcion verifica si al hacer click en el icono de menú esta visible el carrito de ser así le agrega la clase INACTIVE al detalle de productos.
 * 
 *   
 * */
function toggleMobileMenu(){
    const inDetailproductClose = detailProduct.classList.contains('inactive');

    if(!inDetailproductClose){
        detailProduct.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}


/**
 * Esta funcion verifica si al hacer click en el icono del carrito tenemos un menu activo, de ser así, le agrega la clase INACTIVE al menu activo.
 * 
 *   
 * */
function togglcarrito(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    
    //si el mobileMenu está open, hay que cerrarlo
    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    //si el desktopMenu está open, hay que cerrarlo
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    detailProduct.classList.toggle('inactive');

}


/**
 * Esta funcion verifica si al hacer click en el icono del carrito tenemos un menu activo, de ser así, le agrega la clase INACTIVE al menu activo.
 * 
 *   
 * */
function togglDetail(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    
    //si el mobileMenu está open, hay que cerrarlo
    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    //si el desktopMenu está open, hay que cerrarlo
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }
    //si el desktopMenu está open, hay que cerrarlo
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    productDetailBuy.classList.toggle('inactive');

}

//Lista de productos  vacia 
const productsList =[ ];
//Agregamos los productos a la lista vacia 
productsList.push(
    { 
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    { 
    name: 'pen',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    { 
    name: 'bug',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    { 
    name: 'folder',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
)

/**
 * Renderiza un listado de productos en pantalla segun parametro dado. Estos van a estar presentadas en card. 
 * 
 * @param listaDeProductos Array con la informacion de los productos.
 */
function renderProducts(listaDeProductos){
    for (product of listaDeProductos){ 
        //console.log(product.name);
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const image = document.createElement('img');
        image.setAttribute('src', product.Image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'  + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImgCard = document.createElement('img');
        productInfoImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
    
    
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard)
    
    
    }
}

renderProducts(productsList);