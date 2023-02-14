const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}



hamburgerIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}



menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside(){
    

    //al usar la version mobile se entrecruzan el menuhamburguesa y el aside de items. Toca usar un condicional
    //para que no suceda este comportamiento.
    const isMobileMenuOpenClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    

    if(!isMobileMenuOpenClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}

//por ahora se va a hardcorear el listado de productos en JS a futuro la idea es hacer conexion con el backend
//y por medio de apirest traer la informacion de la base de datos.

//el arrya nos devolveria nuestro propio codigo de JS cuando hagamos la consulta a la base de datos
//por ahora al array le vamos a ingresar objetos
const productlist = [];
productlist.push({
    name: 'bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productlist.push({
    name: 'Pantalla',
    precio: 220,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productlist.push({
    name: 'Computador',
    precio: 620,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//ahora los productos se debe insertar en el documento html y se hace medioante un recorrido de arrays

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
const cardsContainer = document.querySelector('.cards-container');



function renderProducts(arr){
    for (product of productlist){
   
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
     
        const productInfoFigure = document.createElement('figure');
     
        const productImgFigure = document.createElement('img'); 
        productImgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        //despues de crear las etiquetas ahora toca asociarlas
        productInfoFigure.appendChild(productImgFigure);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
     
     }
}

renderProducts(productlist);