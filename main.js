const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);

burgerMenuIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
//    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    
    const isCarritoAsideClosed = aside.classList.contains('inactive');

    if(!isCarritoAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
//console.log('JS funcionando');

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Pantalla',
    price: 80,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computador',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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

function renderProducts(arr){

    for (product of productList) {
        const productCard = document.createElement('div'); //Crea elemento div productCard.
        productCard.classList.add('product-card'); //Añade clase product-card a elemento div
    
        //product= {name, price, image} -> product.image
    
        const productImg = document.createElement('img'); //Crea elemento img productImg
        productImg.setAttribute('src', product.image); //Añade objeto image con la ruta de la imagen al elemento img
    
        const productInfo = document.createElement('div'); //Crea elemento div productInfo
        productInfo.classList.add('product-info'); //Añade clase product-info a elemento div
    
        const productInfoDiv = document.createElement('div'); //Crea nuevo elemento div para albergar dos párrafos
    
        const productPrice = document.createElement('p'); //Crea elemento p para primer párrafo
        productPrice.innerText = '$' + product.price; //Agrega texto a primer párrafo
        const productName = document.createElement('p'); //Crea elemento p para segundo párrafo
        productName.innerText = product.name; //Agrega texto a segundo párrafo con objeto name
    
        productInfoDiv.appendChild(productPrice); //Define ingreso de párrafo productPrice al div productInfoDiv 
        productInfoDiv.appendChild(productName); //Define ingreso de párrafo productName al div productInfoDiv
    
        const productInfoFigure = document.createElement('figure'); //Crea elemento figure
        const productImgCart = document.createElement('img'); //Crea elemento img
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); //Añade ruta con imagen al elemento img productImgCart
    
        productInfoFigure.appendChild(productImgCart); //Define ingreso de imagen dentro del elemento figure
    
        productInfo.appendChild(productInfoDiv); //Define ingreso del elemento div con dos párrafos, dentro del elemento div productInfo
        productInfo.appendChild(productInfoFigure); //Define ingreso del elemento figure con imagen, dentro del elemento div productInfo
    
        productCard.appendChild(productImg); //Define ingreso de la primera imagen (productImg) dentro del elemento div productCard
        productCard.appendChild(productInfo); //Define ingreso del elemento div productInfo dentro del elemento div productCard
    
        cardsContainer.appendChild(productCard); //Define ingreso del elemento div productCard dentro del contenedor div general cardsContainer definido en la parte html
    }
}

renderProducts(productList);