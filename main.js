const menuEmail = document.querySelector('.navbar-email');//Seleccionamos navbar email que esta dentro de navbar-righ
const desktopMenu = document.querySelector('.desktop-menu');//Seleccionamos todo el menu que parece y desaparece en la parte derecha cclic en email

const menuHamIcon = document.querySelector('.menu');//Seleccionamos el icono hamburguesa
const mobileMenu = document.querySelector('.mobile-menu');//Seleccionamos menu de mobile

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');//Seleccionamos el icono carrito
const aside = document.querySelector('.product-detail');//Seleccionamos la parte que aparece las bicicletas y sus precios 
const cardsContainer =document.querySelector('.cards-container')



menuEmail.addEventListener('click', toggleDesktopMenu);//Escuchamos evento clic cuando damos clic sobre email parte derecha
menuHamIcon.addEventListener('click', toggleMobileMenu);//Escuchamos evento cuando damos clic al boton hamburguesa
menuCarritoIcon.addEventListener('click', toggleCarritoAside);//Escuchamos evento cuando damos clic al carrito

function toggleDesktopMenu(){//FUncion que activa y desactiva el menu desktop
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){//FUncion que activa y desactiva el menu mobile
    const isAsideClosed = aside.classList.contains('inactive');
    
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive'); 
}

function toggleCarritoAside(){//FUncion que activa y desactiva product-detail
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

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



function renderProduct(arr){
    for (  product of arr) {
        const productCard = document.createElement('div');//Creamos elemento div
        productCard.classList.add('product-card');//agregamos una clase
    
        //Product = {name, price, image }-->product.image
        const ProductImg = document.createElement('img');//Creamos una imagen
        ProductImg.setAttribute('src', product.image );
        
    
        const productInfo = document.createElement('div');//Creamos elemento div
        productInfo.classList.add('product-info');//agregamos una clase
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProduct(productList);