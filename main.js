const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/*Función para que desaparezca el menuDesktop del nav una vez que 
llegumos a cierta resolución de pantalla*/ 
function toggleDesktopMenu(){
    const isAsaidClosed = aside.classList.contains('inactive');
    if(!isAsaidClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

/*Función para abrir el menu de hamburguesa cuando presionemos el icono*/ 
function toggleMobileMenu(){
    const isAsaidClosed = aside.classList.contains('inactive');
    if(!isAsaidClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
/*Función para abrir el aside cuando presionenmos el carrito*/ 
function toggleCarritoAside(){    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    //si mobileMenu esta open hay que cerrarlo
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
/*Estp debe reemplzar con un código para consumir un API REST */
const productList = [];
productList.push({
    name: 'Sillon',
    price: '2900',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Toallero',
    price: '3900',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Mesa',
    price: '2500',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText =  product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');   
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }    
}

renderProducts(productList);
/* Esto es lo que se maqueta dentro del for each
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

