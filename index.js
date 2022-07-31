const show = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHambur = document.querySelector('.menu');
const mHambur = document.querySelector('.mobile-menu');

const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const menuProdDetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

show.addEventListener('click', toggleDesktopMenu);
menuHambur.addEventListener('click', toggleMobileMenu);
menuCarritoIcon .addEventListener('click', toggleCarritoAside);

function toggleMobileMenu(){
    mHambur.classList.toggle('inactive');
    menuProdDetail.classList.add('inactive');
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    menuProdDetail.classList.add('inactive');
}

function toggleCarritoAside(){
    menuProdDetail.classList.toggle('inactive');
    mHambur.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

const productList = [];

// Creamos un array y agregamos los productos
productList.push({
    name : 'Bike',
    price : 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Car',
    price : 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Motorbike',
    price : 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// Ya con el array listo, insertamos los productos al HTML recorriendo el array

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
</div> */

//Las funciones sirven para reutilizar codigo y tambien para ORDENAR 
function renderProducts(arr){
    for (product of arr){
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        // product = {name,price,image} -> product.image
        const productImg = document.createElement('img'); 
        productImg.setAttribute('src', product.image);
        
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
