console.log('andando')
const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const menuHamIcon=document.querySelector('.menu');//elemento que clicekamos
const mobileMenu=document.querySelector('.mobile-menu');//elmento que modificamos al clickear
const shoppingCartContaiener=document.querySelector('#shoppingCartContaiener')
const cardsContainer=document.querySelector('.cards-container')


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu)//al hacer 'click' ejecuta funcion toggle
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    const isAsideClosed= shoppingCartContaiener.classList.contains('inactive')
    if(!isAsideClosed){ //aside=menu carrito
        shoppingCartContaiener.classList.add('inactive')//agrega clase inactive a el aside
    }   
}

function toggleMobileMenu(){ //funcion
    mobileMenu.classList.toggle('inactive')
    const isAsideClosed= shoppingCartContaiener.classList.contains('inactive')
    if(!isAsideClosed){ //aside=menu carrito
        shoppingCartContaiener.classList.add('inactive')//agrega clase inactive a el aside
    }    
}

function toggleCarritoAside(){
    shoppingCartContaiener.classList.toggle('inactive') 
    const isMobileMenuCosed= mobileMenu.classList.contains('inactive')//boolean
    if(!isMobileMenuCosed){ //! cambia el balor boleano si es true devuelve false (invierte pos)
        mobileMenu.classList.add('inactive') //si no tiene inactive 
    }
}

const productList=[];//array vacio con la lista de productos
productList.push({
    name:'bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Pantalla',
    price:220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Computadora',
    price:620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
function renderProducts(arr){
    //por cada producto hacemos un ciclo de for in 

//for of, (algo asi como el for in)
for(product of arr){ //'product' es cada uno de los objetos
    const productCard= document.createElement('div')//crea la etiqueta en en html
    productCard.classList.add('product-card')//añade la clase a la etiqueta del html
 
    const productImg=document.createElement('img');
    productImg.setAttribute('src',product.image);//extrae la aimagen del del elemento product,del producto, del array 
    //product={name,price,image}-->product.image(para meter el src a la imagen)
 
    const productInfo= document.createElement('div')
    productInfo.classList.add('product-info')
 
    const productInfoDiv= document.createElement('div');
 
    const productPrice= document.createElement('p');
     productPrice.innerText='$'+product.price;//agrega el texto '$'a el <p> y el precio
    const productName= document.createElement('p')
    productName.innerText=product.name;
 
    productInfoDiv.appendChild(productPrice);//'productPrice'  va a ser hijo de 'productInfoDiv'
    productInfoDiv.appendChild(productName);
 
    const productInfoFigure= document.createElement('figure');
    const productImgCart=document.createElement('img');//crea un <img> en el HTML
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')//agrega un src=direccion a la imagen
 
    productInfoFigure.appendChild(productImgCart);//Con Element.append() podriamos haber agregar varias etiquetas  y texto mientras que con appendChild solo 1
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
 
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
 
    cardsContainer.appendChild(productCard);
 } 
}
renderProducts(productList); //ejecuta la funccion render products y cargamos el array producLIst