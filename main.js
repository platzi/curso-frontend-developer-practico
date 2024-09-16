const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const asideProduct = document.querySelector('.myorder');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
carritoIcon.addEventListener('click', toogleAsideProduct);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toogleAsideProduct(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetail = productDetail.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    if(!isProductDetail){
        productDetail.classList.add('inactive');
    }
    asideProduct.classList.toggle('inactive');
 }

function toogleMobileMenu(){
    const isAsideClosed = asideProduct.classList.contains('inactive')
    const isProductDetail = productDetail.classList.contains('inactive');
    if (!isAsideClosed){
        asideProduct.classList.add('inactive');
    }
    if(!isProductDetail){
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleDesktopMenu(){
    const isAsideClosed = asideProduct.classList.contains('inactive');
    // const isProductDetail = productDetail.classList.contains('inactive');
    if (!isAsideClosed){
        asideProduct.classList.add('inactive');
    }
    // if(!isProductDetail){
    //     productDetail.classList.add('inactive');
    // }
    desktopMenu.classList.toggle('inactive');
    desktopMenu.classList.add('index')
}
function openProductDetailAside(){
    const isAsideClosed = asideProduct.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    if (!isAsideClosed){
        asideProduct.classList.add('inactive');
    }

    productDetail.classList.remove('inactive');
}




function closeProductDetailAside(){
    productDetail.classList.add('inactive');
}


//a generar los productos desde javascript!
//creamos el array con varios elementos que son objetos...
const productList = [];
productList.push({
    nombre:"bike",
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    nombre:"guitarra",
    precio: 1120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    nombre:"bandoneon",
    precio: 1120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    nombre:"bike",
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    nombre:"guitarra",
    precio: 1120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    nombre:"bandoneon",
    precio: 1120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

//Grabate la diferencia entre for in y for of, for in nos imprime el indice del array, me parece que vamos a poder hacer calclos mas adelante con esa data, el for of nos muestra la propiedad del atributo que necesitemos. 
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
    //product = {nombre, precio, image} => product.image
    //creando elementos: cambiamos sus fuentes, añadimos clases, le insertamos texto y valor.
    //crear padres e hijos. ¿Quien va dentro de quien?
    //si encapsulamos todo el ciclo for dentro de una funcion, podemos utilizarlo despues de otras maneras!

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('main-product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.imagen);
        img.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('main-product-info');
    
         const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.nombre;
    
        const productInfoFigure = document.createElement('figure');
        
        const productInfoIcon = document.createElement('img');
        productInfoIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
         productInfoFigure.appendChild(productInfoIcon);
         productInfoDiv.append(productPrice, productName);
         productInfo.append(productInfoDiv, productInfoFigure);
         productCard.append(img, productInfo);
         cardsContainer.appendChild(productCard);//notese append nos permite agregar varios elementos, appenChild solo uno.//
    }
}
renderProducts(productList);