const navMenuImail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container')


navMenuImail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',togglemenu)
menuCarritoIcon.addEventListener('click',toggleCarritoCompras)


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglemenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoCompras(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed ){
        mobileMenu.classList.add('inactive');   
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
     aside.classList.toggle('inactive');

}
  
const productList =[];
productList.push({
    name: 'Bicicleta',
    precio: 120,
    imagen: 'https://img.freepik.com/vector-gratis/ilustracion-vector-bicicleta-moderna_1441-712.jpg?w=1380&t=st=1677242212~exp=1677242812~hmac=252ff6ac2053f2197d19fa950e291cdcaf3ccb96b14d3a091b8b1f07dbbc8569'
});
productList.push({
    name: 'Pantalla',
    precio: 220,
    imagen: 'https://img.freepik.com/foto-gratis/computadora_1205-717.jpg?1&w=1380&t=st=1677242312~exp=1677242912~hmac=88988f51c0ed57eb59140c0799a1232077b8a49855e49554a13e3d27b4883720'
});
productList.push({
    name: 'Computador',
    precio: 620,
    imagen: 'https://img.freepik.com/vector-gratis/maqueta-dispositivo-digital_53876-89360.jpg?w=996&t=st=1677242517~exp=1677243117~hmac=057468eeb9cab45501ad4ad37a8f0d016ac8ccf1ae70fc21c154a89ed7e3e21a'
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

//Con el ciclo for estamos creando la estructura del HTML que tenemos en comentarios
function renderProduct(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        //Nuestro producto contiene {name,precio,imagen}, por lo cual debemos agregar la imagen a product.imagen
        productImg.setAttribute('src', product.imagen);
    
         const productInfo = document.createElement('div');
         productInfo.classList.add('product-info');
    
         const productInfoDiv = document.createElement('div');
    
         const productPrecio = document.createElement('p');
         productPrecio.innerText = '$' + product.precio
         const productName = document.createElement('p');
         productName.innerText = product.name
    
         productInfoDiv.appendChild(productPrecio);
         productInfoDiv.appendChild(productName);
    
         const productInfoFigure = document.createElement('figure');
         const productInfoFigureImg = document.createElement('img');
         productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
         productInfoFigure.appendChild(productInfoFigureImg);
    
         productInfo.appendChild(productInfoDiv);
         productInfo.appendChild(productInfoFigure);
    
          productCard.appendChild(productImg);
          productCard.appendChild(productInfo);
    
          cardContainer.appendChild(productCard);
    }
}
renderProduct(productList);