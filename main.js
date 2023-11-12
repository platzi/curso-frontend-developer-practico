const navEmail = document.querySelector('.navbar-email');
const signOutMenu = document.querySelector('.desktop-menu');
// Creación del selector para el menú en versión mobile
const menuHamIcon =  document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// Selector Icon close product detail
const productDetailCloseIcon = document.querySelector('.product-detail-close');
// Creación de la constante product detail (aside detail product)
const ShoppingCartContainer = document.querySelector('#ShoppingCartContainer');
// Selector del ícono 'carrito de compras'
const IconShoppingCart = document.querySelector('.navbar-shopping-cart');
// Selector del contenedor 'cardsContainer' referente a la img e info de los productos
const cardsContainer = document.querySelector('.cards-container');

// Selector que contiene los detalles de un producto
const productDetailContainer = document.querySelector('#productDetail');
const numberOfArt = document.querySelector ('.navbar-shopping-cart-number-articles');

let totalClicks = 0;



// Toggle: cambiar entre dos estados (altenar, ya se que sea visible o no el menu sign out)
navEmail.addEventListener('click', togglesignOutMenu );
//Toggle: ahora para hacer visible o no el menú de la versión mobile
menuHamIcon.addEventListener('click', toggleMobileMenu);
//Toggle: carrito de compras (mostrar la lista de productos al hacer click al carrito)
IconShoppingCart.addEventListener('click', toggleShowProducts)
// Cerrar los detalles del producto al hacer click en el ícono de la X BY MY OWN
productDetailCloseIcon.addEventListener('click', closeProductDetails);




// Tip: Se puede hacer lo siguiente con cada función toggle:
// function toggleProductDetail(){
//     productDetailContainer.classList.toggle("inactive");
//     signOutMenu.classList.toggle("inactive");
//     mobileMenu.classList.toggle("inactive");
//     // ETC..

// }

function togglesignOutMenu()
{
    
    const isAsideOpen = !ShoppingCartContainer.classList.contains('inactive');
    
    if (isAsideOpen) 
    {
        ShoppingCartContainer.classList.add('inactive');
    }

    signOutMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
   
    const isAsideOpen = !ShoppingCartContainer.classList.contains('inactive');


    if (isAsideOpen) 
    {
        ShoppingCartContainer.classList.add('inactive');
    }

    closeProductDetails ();
 
    mobileMenu.classList.toggle('inactive');
}

// Para mostrar productos agregados al carrito:
function toggleShowProducts()
{
    // Si el menú desktop esta abierto: es porque no contiene la clase inactive
    const isDesktopMenuOpen = !signOutMenu.classList.contains('inactive');

    if (isDesktopMenuOpen) 
    {
        signOutMenu.classList.add('inactive');
    }

    // Si el menú mobile esta abierto es porque NO '!' tenemos la clase inactive.
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    // Si está abierto el menú mobile cuando damos click al aside, entonces debemos cerrarlo:
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    // Cerrar el contenedor product detail si se le da click al ícono de shopping cart

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
     
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }


    
    // Para que toggle, cambie a inactive si es que no lo tiene al volver a darle click
    ShoppingCartContainer.classList.toggle('inactive');
 
}

                                           

// función para desplegar los detalles de un producto al hacer click en img
function openProductDetatilAside()
{
    productDetailContainer.classList.remove('inactive');

    // Siempre que se ABRAN los detalles de un producto, pondremos la clase 'inactive' al contenedor de Shopping CArt
    ShoppingCartContainer.classList.add('inactive');


}

// BY MY OWN
function closeProductDetails ()
{
    productDetailContainer.classList.add('inactive');


}



// Bloque de código para creación de productos (imgs, description & AddToCart)
// Array: 
const productList = [];

// .Push para crear un nuevo objeto
productList.push({
    name: 'Bike', 
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Pantalla', 
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Computadora', 
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Sofá', 
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Bocina', 
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});

productList.push({
    name: 'Bocina', 
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Bocina', 
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Bocina', 
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Bocina', 
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Bocina', 
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});
productList.push({
    name: 'Bocina', 
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    
});


// Array para los productos del shopping cart
// const ShoppingCartProductsList = [];


// // Push para crear datos dinámicos dentro del contenedor 
// ShoppingCartProductsList.push(
//     {
//         cartItemName: product.name,
//         priceItem: product.price,
//         imageItem: product.image
//     }
// )

/*{ <div class="product-card">
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
</div> }*/


// Creación de la función con ciclo for, para mostrar cada producto dentro del HTML (manipulación del DOM con JS)
function renderProducts(arr){
    for (product of arr)
{

    let clickCount = 0;

    // Creación del contendor div
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    

    // Creación e integración del contedor <img> con su imagen
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    // se toma como referencia la lista de productos creada en el array productLIst


    // Desplegar la info de un producto al momento de hacer click en su img
    productImg.addEventListener('click', openProductDetatilAside);


    
    // Creación del contenedor <div> para la información del producto
    // Creación del contendor div
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    // Insertar etiquetas dentro de productInfo
   


    // Creación de un div vacío
    const productInfoDiv = document.createElement('div');
    // Creación del contenedor para el precio del producto
    const productPrice = document.createElement('p');
    // Le concateno el 'product' del ciclo for
    productPrice.innerText = '$' + product.price;
    // Creación del contenedor para el nombre del producto
    const productName = document.createElement('p');
    productName.innerText = product.name;
    


    const productFigure = document.createElement('figure');
    const ImgAddToCart = document.createElement('img');
    ImgAddToCart.setAttribute('src','./icons/bt_add_to_cart.svg');




    // Agregar un evento de clic al botón "ImgAddToCart"
    ImgAddToCart.addEventListener('click', () => {
        clickCount++;
        totalClicks++;
        // Actualizar el contenido del contador para este producto
        numberOfArt.innerText = clickCount;
        // Actualizar el número total de clics
        // (puedes mostrarlo en otro elemento si es necesario)
        // totalClicksElement.innerText = totalClicks;
        totalClicksElement.innerText = totalClicks;
      });



    
    // Organizar y meter los elementos correspondientes conforme sus etiquetas contenedoras
    cardsContainer.appendChild(productCard);

    productFigure.appendChild(ImgAddToCart);

    productInfoDiv.appendChild(productPrice,productName);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

}
}

// Inicialización de la función, parametro: producList en este caso
renderProducts(productList);
const totalClicksElement = document.querySelector('.navbar-shopping-cart-number-articles');

totalClicksElement.innerText = totalClicks;





