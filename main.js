const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', toggleProductDetail)

function toggleDesktopMenu(){
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    //Lógica para ocultar el menú del carrito para poder abrir el menu mobile
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    //cambia de estado la clase inactive lo que hace que aparezca o desaparezca el menu
    mobileMenu.classList.toggle('inactive')
}

function toggleProductDetail(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');

}

//Esta es la parte encargada de los productos, va insertar elementos en HTML
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/* Esta es la maqueta que debemos seguir 
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
      </div> */

// Lo que hacemos es ir agregando todos los elementos div, img, div, div
function renderProducts(arr){
    for(product of productList){

        //Agregamos el 'div'
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //Agregamos el 'img'
        const productImg = document.createElement('img');
         //Modificamos su propiedad src con la imagen que venga en product.image
         productImg.setAttribute('src', product.image); 
    
    
        //Agregamos el 'div' product-info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //Agregamos el otro 'div' y los 'p'
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        //Metemos los párrafos dentro del div
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        //Agregamos el figure y el resto que falta
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        //Metemos el 'img' dentro del 'figure' 
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
}

renderProducts(productList);