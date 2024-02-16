const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Smart watch',
    price: 100,
    image:'https://bodegavirtualmedellin.com/cdn/shop/files/Capturadepantalla2023-08-16005445.png?v=1694145011&width=600',
});
productList.push({
    name: 'Computer',
    price: 3200,
    image:'https://images.droidsans.com/wp-content/uploads/2022/01/asus-zenbook-14x-oled-space-edition-zenbook-17-fold-oled-specs-07.jpg',
});


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
}

function toggleCarritoAside(){
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
        
}
function toggleProductDetailAside(){
    productDetailContainer.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

function renderProducts(arr){

    // creamos este ciclo para publicar artículos
    for (product of arr){
    //empezamos creando los elemento de afuera hacia adentro
    //primero creamos el div class="product-card 
        const productCard =document.createElement('div');
        productCard.classList.add('product-card');
       
    
    // insertamos la imagen del producto...la img del product = img del productList[.product.image]
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetailAside)
    
    //segundo creamos el div class="product-info
        const productInfo =document.createElement('div');
        productInfo.classList.add('product-info');
    
    //después creamos el div anónimo
        const productInfoDiv =document.createElement('div');
    
        //dentro del div anónimo insertamos el precio y el nombre
        const productPrice =document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName =document.createElement('p');
        productName.innerText = product.name;
    
    // empezamos a insertar los elementos de adentro hacia afuera
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure =document.createElement('figure');
        const productImgCart =document.createElement('img');
        productImgCart .setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    // finalmente cada producto lo metemos en el contenedor general
    
        cardsContainer.appendChild(productCard)
    
    }
    

}

renderProducts(productList);