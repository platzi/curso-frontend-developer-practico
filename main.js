const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    /*Si aside esta abierto al abrir desktopMenu, cerrar aside */ 
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
        desktopMenu.classList.remove('inactive');
    }
    else desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    /*Si aside esta abierto al abrir mobileMenu, cerrar aside */ 
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
        mobileMenu.classList.remove('inactive');
    }
    else mobileMenu.classList.toggle('inactive');

    
}

function toggleCarritoAside () {
    /*Al abrir aside, cerrar mobileMenu y 
    desktopMenu si estos estan abiertos */ 
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
        aside.classList.remove('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
        aside.classList.remove('inactive');
    }
    else aside.classList.toggle('inactive');

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

/*    <div class="product-card">
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

function renderProducs (arr) {
    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price ;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducs(productList);