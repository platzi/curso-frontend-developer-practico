const menuEmail =document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
//const aside = document.querySelector('.product-detail');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');

/*Evento que despliega u oculta el sub menu al hacer click en el mail*/ 
menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

/*Evento que despliega u oculta el sub menu al hacer click en el mail*/ 
function toggleDesktopMenu(){ 
    const isAsideclosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideclosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');   
}

/*Evento que despliega u oculta el menu al hacer click en el icono hamburguesa en la versión mobile*/ 
function toggleMobileMenu(){
    const isAsideclosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideclosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside(); //cierra la información del producto siempre y cuando hagamos click en el menu de la version mobile

    mobileMenu.classList.toggle('inactive');
}

/*Evento que despliega u oculta el menu del carrito de compras (aside)*/ 
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //contains valida si un elmento HTML tiene alguna clase con el metodo classList
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
        
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }  
    
    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');    
    
}

/*Eventos para abrir y cerrar el detalle del producto haciendo click (no toggle)*/
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


//Hardcode de productos (Esto se debe consultar de una Base de Datos con API Rest)
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'JD Gentleman',
    price: 80,
    image: 'https://images.pexels.com/photos/9538495/pexels-photo-9538495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

// productList.forEach(function(product){
//     console.log(product.name);

// });

/*
<div class="product-card">
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="">
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
//creamos la lista de productos obteniendo los valores de los objetos del Array y maquetamos el HTML mediante JavaScript
function renderProducts(arr) {
    for (product of arr) { 
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        //productImg.classList.add('cursor-pointer');
        productImg.addEventListener('click',openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name; 
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv,productInfoFigure);
        //productInfo.appendChild(productInfoFigure);
    
        productCard.append(productImg,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);
