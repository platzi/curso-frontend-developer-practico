const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerIcon.addEventListener('click',toggleMobileMenu);
carritoIcon.addEventListener('click',togglecarritoaside);

function toggleDesktopMenu(){
    //Vamos a preguntar si el elemento con la clase mobileMenu tiene la clase inative
    //Almacenas true o false en la varible
    const isAsideClosed = aside.classList.contains('inactive');
    
    //Primero preguntamos si el otro menú está abierto para que no aparezca uno sobre el otro
    if(!isAsideClosed){//Si está abierto
        aside.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    //Primero preguntamos si el otro menú está abierto para que no aparezca uno sobre el otro
    if(!isAsideClosed){//Si está abierto
        aside.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    }
    
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoaside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    //Primero preguntamos si el otro menú está abierto para que no aparezca uno sobre el otro
    if(!isMobileMenuClosed){//Si está abierto
        mobileMenu.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    }

    if(!isDesktopMenuClosed){//Si está abierto
        desktopMenu.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    }
    //Hacemos que aparezca el aside quitandole la clase inactive
    aside.classList.toggle('inactive');
}

//Creación de Cards de productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
</div>*/

//Función para crear los elementos para las cards de los productos de forma dinámica
function renderProducts(array){
    //Atajo para recorrer un array
    for (product of productList){//Product en este caso es el nombre que le vamos a dar a cada elemento de nuestro array.
        
        //CREACIÓN DE ELEMENTOS HTML
        const productCard = document.createElement('div');//Creamos un div
        productCard.classList.add('product-card');//le agregamos una clase llamada product-card
        
        const productImg = document.createElement('img'); //Creamos una etiqueta img
        //Tenemos un objeto product = {name, price, image}. De ahí tenemos que sacar la imagen para este elemento.
        productImg.setAttribute('src', product.image); //Vamos a modificar el valor del atributo src de la etiqueta img

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div'); //Creamos un div
        
        const productPrice = document.createElement('p'); //Creamos una etiqueta p
        productPrice.innerText = '$' + product.price; //Con innerText le agregamos el texto '$' y lo que sea que traiga product.Price
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;

        const productInfoFigure = document.createElement('figure'); 
        const productImgCart = document.createElement('img'); 
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        //ORGANIZACIÓN DE ELEMENTOS HTML: meter imgs en figures, etc.
        
        //AppendChild es para insertar o agregar el hijo "productPrice" en productInfoDiv
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);