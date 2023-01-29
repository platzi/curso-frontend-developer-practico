const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailPrice = document.querySelector('#productDetail-price');
const productDetailName = document.querySelector('#productDetail-name');
const productDetailImg = document.querySelector('#productDetail-img');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerIcon.addEventListener('click',toggleMobileMenu);
carritoIcon.addEventListener('click',togglecarritoaside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    shoppingCardContainer.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    shoppingCardContainer.classList.add('inactive');//Lo cerramos agregando la clase inactive que hace que desaparezca
    productDetailContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function togglecarritoaside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
  
    //Hacemos que aparezca el aside quitandole la clase inactive
    shoppingCardContainer.classList.toggle('inactive');
}

function openProductDetailAside(event){
    shoppingCardContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");
    productDetailImg.setAttribute("src", event.target.src);
    productDetailPrice.innerText = event.target.nextElementSibling.innerText; 
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive'); //Agrega una clase llamada inactive
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
    price: 320,
    image: 'https://m.media-amazon.com/images/I/71nmlGZAlOL._SL1500_.jpg'
});

productList.push({
    name: 'Computer',
    price: 1150,
    image: 'https://www.muycomputer.com/wp-content/uploads/2021/03/iMacPro.jpg?mrf-size=m'
});

productList.push({
    name: 'Wireless headphones',
    price: 345,
    image: 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/plp/bbd.plpasset.headphones.studio3-v2.jpg.large.2x.jpg'
});

productList.push({
    name: 'Wireless headphones',
    price: 200,
    image: 'https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/plp/bbd.plpasset.earbuds.fitpro-v2.jpg.large.2x.jpg'
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
    for (product of array){//Product en este caso es el nombre que le vamos a dar a cada elemento de nuestro array.
        
        //CREACIÓN DE ELEMENTOS HTML
        const productCard = document.createElement('div');//Creamos un div
        productCard.classList.add('product-card');//le agregamos una clase llamada product-card
        
        const productImg = document.createElement('img'); //Creamos una etiqueta img
        //Tenemos un objeto product = {name, price, image}. De ahí tenemos que sacar la imagen para este elemento.
        productImg.setAttribute('src', product.image); //Vamos a modificar el valor del atributo src de la etiqueta img
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div'); //Creamos un div
        
        const productPrice = document.createElement('p'); //Creamos una etiqueta p
        productPrice.innerText = '$' + product.price; //Con innerText le agregamos el texto '$' y lo que sea que traiga product.Price
        const productName = document.createElement('p');
        productName.innerText = product.name;

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
