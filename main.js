const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const detalleCompra = document.querySelector('.product-detail');
const contenedorProductos = document.querySelector('.main-container');
const cardsContainer = document.querySelector('.cards-container');

hamburguesa.addEventListener('click',toggleMenuHamburguesa);
menuEmail.addEventListener('click',toggleDesktopMenu);
carrito.addEventListener('click',toggleDetalleCompra);
contenedorProductos.addEventListener('click',funcionClick);

function funcionClick(){
    detalleCompra.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    
}

function toggleDesktopMenu () {
   

   
     detalleCompra.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    
    
}

function toggleMenuHamburguesa (){

     detalleCompra.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    
}
function toggleDetalleCompra(){
   
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
   
   detalleCompra.classList.toggle('inactive');
   
    
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computadora',
    price: 140,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Monitor',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
<div>
<p>$120,00</p>
<cp>Bike</cp>
</div>
<figure>
<img src="./icons/bt_add_to_cart.svg" alt="">
</figure>
</div>
</div>
*/


/*Recreamos el codigo html pero ahora desde javascript*/ 
function rederProducts(arr){
    for (product of arr) {
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        //product = name, price, image
        
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice= document.createElement('p');
        productPrice.innerText='$' + product.price;
        const productNmae = document.createElement('p');
        productNmae.innerText=product.name;
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    /*Empezando a devolver osea a meter a todos los hijos a los divs padres*/ 
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.append(productPrice,productNmae);
        
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(productImg,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
}

rederProducts(productList);

