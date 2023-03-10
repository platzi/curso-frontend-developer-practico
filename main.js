var menuEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menubtn = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu');
var menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
var productDescriptionCloseIcon = document.querySelector('.product-detail-close')
var myOrdermenu = document.querySelector('#shoppingCartContainer');
var cardsContainer = document.querySelector('.cards-container');
var productDescription = document.querySelector('#productDescription')

menuEmail.addEventListener('click', toggleDesktopmenu);
function toggleDesktopmenu(){
    var isMenuEmailClosed = myOrdermenu.classList.contains('inactive')

    if(!isMenuEmailClosed){
        myOrdermenu.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
};


menubtn.addEventListener('click', toggleMobilemenu);
function toggleMobilemenu(){
    var isMyOrderMenuClosed = myOrdermenu.classList.contains('inactive')

    if(!isMyOrderMenuClosed){
        myOrdermenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
};

menuCarritoIcon.addEventListener('click', togglemyOrdermenu);
function togglemyOrdermenu(){
    var isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    myOrdermenu.classList.toggle('inactive');
};

/*Podemos crear lista de productos usando arrays, mira este ejemplo que aqui estamos haciendo un array, mira estos ejemplos que aqui hemos puesto tres productos usaando el .push. si te fijas en la consola estos productos nos apareceran.*/
var productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Computadora',
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


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
</div>
*/

function renderProducts(arr){
    /*Aqui vamos a crear un ciclo for para que cada producto se este agregando automaticamente, utilizaremos el html comentado que tenemos arriba para poder guiarnos */
    for (product of arr){
        /* Aqui estaremos maquetando html usando javascript por cada nuevo producto */
    
        /*primero crearemos El elemento div el cual tendra la clase product-card */
        var productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        /* Despues creamos la etiqueta imagen de nuestro producto al cual le agregamos el source y la imagen del product que esta en nuestro array*/
        var productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDescription)
        function openProductDescription(){
            productDescription.classList.remove('inactive')
        }
        
        productDescriptionCloseIcon.addEventListener('click', closeProductDescription)
        function closeProductDescription(){
            productDescription.classList.add('inactive')
        }
    
        /* Siguiente vamos a crear el div que tendra la clase product-info  */
        var productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        /* Dentro de nuestro div con clase product info, crearemos el nuevo Div que contiene el precio y el nombre del producto */
        var productInfoDiv = document.createElement('div');
        var productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        var productName = document.createElement('p');
        productName.innerText = product.name
        /* En estas lineas de codigo estamos añadiendo el precio precio y el nombre de nuestro producto */
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        /*Ahora nos toca crear la imagen del producto, fijate que empezamos creando nuestra etiqueta figure, img y en img agregamos los atributos que son el source y la direccion de donde viene la imagen*/
        var productinfoFigure = document.createElement('figure');
        var productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        /* Ahora nos toca agregar la etiqueta imagen dentro de la etiqueta figure */
        productinfoFigure.appendChild(productImgCart);
    
    
        /* En nuestro div con clase product-info meteremos div que coniente las etiquetas p el precio y nombre. ademas de que estamos metiendo la etiqeuta figure den tro de este div  */
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productinfoFigure);
    
        /* El siguiente paso es agregar nuesa imagen y el div con clase product-info a nuestra a nuestro div con clase "product-card" */
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        /* Por ultimo nos toca agregar el div "product-card a nuestro div cards container" el cual es un div dentro de nuestra etiqueta section, la cual la etiqueta section es la etiqueta principal donde esta la imagen de nuestros productos */
        cardsContainer.appendChild(productCard);
    }
    
}

renderProducts(productList);
    /*Aqui vamos a crear un ciclo for para que cada producto se este agregando automaticamente, utilizaremos el html comentado que tenemos arriba para poder guiarnos */



