const show = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHambur = document.querySelector('.menu');
const mHambur = document.querySelector('.mobile-menu');

const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const cardsContainer = document.querySelector('.cards-container');

show.addEventListener('click', toggleDesktopMenu);
menuHambur.addEventListener('click', toggleMobileMenu);
menuCarritoIcon .addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', toggleProductDetailAside);

function toggleMobileMenu(){
    mHambur.classList.toggle('inactive');
    shoppingCartDetail.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartDetail.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function toggleCarritoAside(){
    shoppingCartDetail.classList.toggle('inactive');
    mHambur.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleProductDetailAside(){
    productDetailContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mHambur.classList.add('inactive');
    shoppingCartDetail.classList.add('inactive');
}

const productList = [];

// Creamos un array y agregamos los productos
productList.push({
    name : 'Fruit Basket',
    price : 520,
    image: 'https://images.pexels.com/photos/5217965/pexels-photo-5217965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
});

productList.push({
    name : 'Kiwi ayee',
    price : 20,
    image: 'https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
});

productList.push({
    name : 'Blueberries',
    price : 100,
    image: 'https://images.pexels.com/photos/2539177/pexels-photo-2539177.jpeg?auto=compress&cs=tinysrgb&w=940&h=650',
});

productList.push({
    name : 'Pineapple',
    price : 40,
    image: 'https://images.pexels.com/photos/6157056/pexels-photo-6157056.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});

productList.push({
    name : 'Oranges',
    price : 80,
    image: 'https://images.pexels.com/photos/7195248/pexels-photo-7195248.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});

productList.push({
    name : 'Grapefuit',
    price : 50,
    image: 'https://images.pexels.com/photos/7065187/pexels-photo-7065187.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});

productList.push({
    name : 'Avocado',
    price : 90,
    image: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});

productList.push({
    name : 'Banana',
    price : 60,
    image: 'https://images.pexels.com/photos/5217996/pexels-photo-5217996.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});

productList.push({
    name : 'Greens',
    price : 30,
    image: 'https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});

productList.push({
    name : 'Mango',
    price : 30,
    image: 'https://images.pexels.com/photos/5217960/pexels-photo-5217960.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=2',
});

// Ya con el array listo, insertamos los productos al HTML recorriendo el array

/* <div class="product-card">
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

//Las funciones sirven para reutilizar codigo y tambien para ORDENAR 
function renderProducts(arr){
    for (product of arr){
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        // product = {name,price,image} -> product.image
        const productImg = document.createElement('img'); 
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        // Creando Div sin clase 
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        //Anidando elementos 
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);   
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        //Anidando los elementos que acabamos de crear arriba 
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     
     }
}

// Podemos llamar al arreglo que hicimos manualmente pero puede ser infomación del backend gracias al asincronismo y API rest. 
renderProducts(productList);
