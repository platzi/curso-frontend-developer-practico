const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-full-detail');
const productDetailCloseContainer = document.querySelector('.product-full-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailContainer.addEventListener('click', toggleProductDetail);
productDetailCloseContainer.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    /*Si aside esta abierto al abrir desktopMenu, cerrar aside */ 
    if (!aside.classList.contains('inactive') 
    || !productDetailContainer.classList.contains('inactive')) {
        aside.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        desktopMenu.classList.remove('inactive');
    }
    else desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    /*Si aside esta abierto al abrir mobileMenu, cerrar aside */ 
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
        
    }
    if (!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive');
        mobileMenu.classList.remove('inactive');
    }
    else mobileMenu.classList.toggle('inactive');

    
}

function toggleCarritoAside () {
    /*Al abrir aside, cerrar mobileMenu y 
    desktopMenu si estos estan abiertos */ 
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if(!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive');
        aside.classList.remove('inactive')
    }
    else aside.classList.toggle('inactive');

}

function toggleProductDetail () {
    if ( !desktopMenu.classList.contains('inactive')
    ||!aside.classList.contains('inactive') 
    || !mobileMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
        aside.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }
    
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Xiaomi REDMI Note 9',
    price: 95,
    image: 'https://www.globalventas.com.ve/images/stories/virtuemart/product/bl.jpg'
})
productList.push({
    name: 'Audífono Mediano Coby',
    price: 38,
    image: 'https://www.globalventas.com.ve/images/stories/virtuemart/product/cv135.jpg'
})
productList.push({
    name: 'Cámara Fotográfica 14.1 MPX Azul Sony',
    price: 145,
    image: 'https://www.globalventas.com.ve/images/stories/virtuemart/product/dsc-w610-azul.jpg'
})
productList.push({
    name: 'Batería Digital con Sistema de Iluminación Casio',
    price: 270,
    image: 'https://www.globalventas.com.ve/images/stories/virtuemart/product/bateria-casio-ld80.jpg'
})
productList.push({
    name: 'Laptop Samsung Pantalla 14" Color Champagne',
    price: 700,
    image: 'https://www.globalventas.com.ve/images/stories/virtuemart/product/np300e4a_g.jpg'
})

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
</div>  */

function renderProducts (arr) {
    for (product of arr) {

        //Se creo un div con clase product-card (cada producto)
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        //Se creo un img con fuente src = product.image
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        
        //se crea un div con clase product-info (Precio y descripcion)
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        //se crea un div al cual se le agregan los p 
        // productPrice y productName que son
        //el precio y el nombre del producto
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price ;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        //Se crea uns etiqueta figure a la cual se le añade
        //una etiqueta img con todo y el icono
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        //Para meter la etiqueta img(icono) dentro de la etiqueta figure
        productInfoFigure.appendChild(productImgCart);
        
        //Para meter la etiqueta div que tiene el precio y nombre
        //dentro del div product-info
        productInfo.appendChild(productInfoDiv);
        //Para meter la etiqueta figure que tiene la imagen
        //dentro del div product-info
        productInfo.appendChild(productInfoFigure);
        
        //Para meter la etiqueta img que tiene la imagen del producto
        //Dentro del contenedor del producto
        productCard.appendChild(productImg);
        //Para meter la etiqueta div que tiene la descripcion 
        //del producto dentro del contenedor del producto
        productCard.appendChild(productInfo);
        
        //Para agregarle el container de cada producto al
        //container principal
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);