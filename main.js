const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoaside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
//click en el boton email
function toggleDesktopMenu (){
    const isAsideClosed =   shoppingCartContainer.classList.contains('inactive');
   
   if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
}
desktopMenu.classList.toggle('inactive');
}

//click en el boton hamburguesa
function toggleMobileMenu(){
    const isAsideClosed =   shoppingCartContainer.classList.contains('inactive');
    closeProductDetailAside();

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//click a carrito
function toggleCarritoaside() {
    //cierra el mobile menu cada que se le da click al carrito
    const isMobileMenuClosed =   mobileMenu.classList.contains('inactive');
        desktopMenu.classList.add('inactive');
    
    //Si esta abuierto el menu mobile
     if(!isMobileMenuClosed){
        // lo cierra
        mobileMenu.classList.add('inactive');
    }// si esta cerrado lo abre y viceversa

    const isProducDetailClosed =   productDetailContainer.classList.contains('inactive');
    
     if(!isProducDetailClosed){
        // lo cierra
        productDetailContainer.classList.add('inactive');
    }// si esta cerrado lo abre y viceversa
    shoppingCartContainer.classList.toggle('inactive');
}

//Click en una imagen del catalogo
function openProductDetailAside (){
    productDetailContainer.classList.remove('inactive');

    shoppingCartContainer.classList.add('inactive');

}


function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXv6t_ixhu5zfazHksOga3jQh_GiGatiY9LQ&usqp=CAU',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ7amw3dhbv9ZMgvwjw83OqbN9-KMjo6Z-Q&usqp=CAU',
});

productList.push({
    name: 'Compu',
    price: 620,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZHc3jbCzes2LMgyo44k_C-n1JjqbxO0OiSQ&usqp=CAU',
});
/*
<div class="product-card">
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
      </div> 
*/

function renderProducts(array){
    for (product of array){
        //creamos el contenedor div
        const productCard = document.createElement('div');

        //Agregamos la case product-card a nuestro product-card
        productCard.classList.add('product-card');
       
       // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        //Le asignamos a productimg la imagen del product del array
        productImg.setAttribute('src', product.image);

        //Agregamos un evento de click que llama a una funcion para abrir la informacion de un producto
        productImg.addEventListener('click', openProductDetailAside);
        //Creamos el contenedor div y le asignamos la clase product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
       
        //Creamos la variable productInfoDiv y el contendor div
        const productInfoDiv = document.createElement('div');
       
        //Creamos el elemento p y le asignamos el precio 
        const productPrice= document.createElement('p');
       productPrice.innerText = '$' + product.price;
       
       //Creamos el elemento p y le agregamos el precio del producto
        const productName= document.createElement('p');
        productName.innerText =  product.name;
       
        //Agregamos a la etiqueta div productInfoDiv su precio y su nombre
       productInfoDiv.appendChild(productPrice);
       productInfoDiv.appendChild(productName);
       
        //Creamos el elemento figure
        const productInfoFigure = document.createElement('figure');

        //Creamos el elemento img 
        const productImgCart = document.createElement('img');
        //Le agregamos el icono de carrito a la etiqueta img
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
       
        //Insertamos un nuevo nodo hijo a su padre el cual contiene el icono carrito
       productInfoFigure.appendChild(productImgCart);
       
       //Insertamos un nuevo nodo hijo el cual cuenta con el precio y el nombre del producto
       productInfo.appendChild(productInfoDiv);
       productInfo.appendChild(productInfoFigure);
       
       //Insertamos la imagen del producto 
       productCard.appendChild(productImg);
       //Insertamos la siguiente informacion del producto(precio, nombre, logo)
       productCard.appendChild(productInfo);
       
       //Tenemos lista todo para insertarlo a la clase cards-container del div html
       cardsContainer.appendChild(productCard);
       }
}

    //Mandamos a invocar la funcion con el array que anterior mente establecimos arriba(3 productos)
    renderProducts(productList);