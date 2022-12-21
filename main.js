// la manipulaciOn del DOM  debe tener siempre sus VARIABLES asignadas y los  EVENT LISTENERS

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#ShoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const ProductDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


// Esta seccion ESCUCHA eventos y LLAMA funciones (EVENT LISTENERS)
menuEmail.addEventListener('click', toggleDestopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarrito.addEventListener('click', toggleAsideProduct);// Esta llamada de funcion, escucha el "Click" y llama a la funcion toggleAsideProdut

productDetailCloseIcon.addEventListener('click',closeProducDetailAside);

// Estas son las FUNCIONES creadas y llamadas con los EVENT LISTENERS
function toggleDestopMenu(){// esta funcion INTERCAMBIA una CLASE. Si existe, la elimina y viceversa 
    const isAsideOpen = shoppingCartContainer.classList.contains('inactive'); //Contains comprueba si una clase es TRUE

    if (!isAsideOpen){//Esta condicion evalua, si una CLASE esta NO esta en el documento, si no esta es VERDADERO asi que agreguela
        shoppingCartContainer.classList.add('inactive');
    }

    console.log('click');
    desktopMenu.classList.toggle ('inactive'); // Toggle intercambia la EXISTENCIA  o NO de una clase
}

function toggleMobileMenu(){
    const isAsideOpen = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideOpen){
        shoppingCartContainer.classList.add('inactive');
    }

    console.log('click')
    mobileMenu.classList.toggle('inactive');

    closeProducDetailAside();
  
}

function toggleAsideProduct(){

    const ismobileMOpen = mobileMenu.classList.contains('inactive')

    if (!ismobileMOpen){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = ProductDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed){
        ProductDetailContainer.classList.add('inactive');
    }
    
    console.log('click')
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    const isShopcarClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShopcarClosed){ // ¿no esta cerrado el carrito? si es verdadero (True) quiere decir que esta abierto
        shoppingCartContainer.classList.add('inactive');
    }

    ProductDetailContainer.classList.remove('inactive');
//si abro productDetail, y carrito(shoppingCartContainer) esta abierto, debe cerrarce (inactive on)
}

function closeProducDetailAside(){
    ProductDetailContainer.classList.add('inactive');
}
// Creacion de un ARRAY para INSERTAR los productos que son OBJETOS 
const productList = [];
productList.push({//Con el metodo PUSH empujamos un nuevo OBJETO(Producto)
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts (arr){//Funcion que RECORRE Y a su vez CREA  el HTML para VISUALIZAR los OBJETOS

    for (product of arr){ // esta sintaxis FOR es un atajo del ciclo for, cuando no conocemos la cantidad de productos o longitud del array. Para cada producto, cree la siguiente estructura HTML

        const productCard = document.createElement('div'); //creacion de elementos en este caso un div
        productCard.classList.add('product-card');// agregamos una clase al elemento recien creado.
    
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // product = {name, price, image} -> product.image
        productImg.addEventListener('click',openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName= document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg') // El origen de esta imagen es estatico y no viene del ARRAY
    
        productInfoFigure.appendChild(productImgCart);//appendChild convierte al ELEMENTO en HIJO del que esta entre parentisis
    
        
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
       
    
    
        cardsContainer.appendChild(productCard);
    
    
    }

}

renderProducts(productList); // llamada de la funcion renderProducts. Al encapsular, posemos utilizar este codigo cuantas veces necesitemos

