const desktop_menu = document.querySelector('.desktop-menu');
const menuEmail =document.querySelector('.navbar-email');
const menu =document.querySelector('.menu');
const menuMobil =document.querySelector('.mobile-menu');
const shoppingCart =document.getElementById('shoppingCart');
const carrito = document.querySelector('.navbar-shopping-cart');
const cardContainer = document.querySelector('.cards-container');
const productDetail =document.getElementById('productDetail');
const closeCart = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktop_menu);
menu.addEventListener('click', toggleMobil_menu);
carrito.addEventListener('click', toggleShoppingCart);
closeCart.addEventListener('click',cerrarCarrito);




function toggleDesktop_menu (){
    closeShoppingCart = shoppingCart.classList.contains('inactive');
    closeMenuEmail = desktop_menu.classList.contains('inactive');
    cerrarCarrito();
    if(!closeShoppingCart){
        shoppingCart.classList.toggle('inactive');   
    }
    desktop_menu.classList.toggle('inactive');    
    
    }

function toggleMobil_menu (){
    closeMobil = menuMobil.classList.contains('inactive');
    closeShoppingCart = shoppingCart.classList.contains('inactive');
    closeMenuEmail = desktop_menu.classList.contains('inactive');
    cerrarCarrito();
    if(!closeShoppingCart){
        shoppingCart.classList.toggle('inactive');
    }
    menuMobil.classList.toggle('inactive');       
    }

function toggleShoppingCart (){ 
    closeMobil = menuMobil.classList.contains('inactive');
    closeShoppingCart = shoppingCart.classList.contains('inactive');
    closeMenuEmail = desktop_menu.classList.contains('inactive');
    cerrarCarrito();
    if(!closeMobil){
        menuMobil.classList.toggle('inactive');
         }
     if(!closeMenuEmail){
            desktop_menu.classList.toggle('inactive');
         }
         shoppingCart.classList.toggle('inactive');
    }

    function openCart(){
        productDetail.classList.remove('inactive');
        shoppingCart.classList.add('inactive');
        menuMobil.classList.add('inactive');
        desktop_menu.classList.add('inactive');
    };

    function cerrarCarrito(){
        productDetail.classList.add('inactive');
    };

const productList = [];
productList.push({
    name: 'Bike',
    Precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'mueble',
    Precio: 420,
    image:'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400'
});

productList.push({
    name: 'celular',
    Precio: 320,
    image:'https://images.pexels.com/photos/4526473/pexels-photo-4526473.jpeg?auto=compress&cs=tinysrgb&w=400'
    
});
productList.push({
    name: 'Bike',
    Precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'mueble',
    Precio: 420,
    image:'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400'
});

productList.push({
    name: 'celular',
    Precio: 320,
    image:'https://images.pexels.com/photos/4526473/pexels-photo-4526473.jpeg?auto=compress&cs=tinysrgb&w=400'
    
});
productList.push({
    name: 'Bike',
    Precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'mueble',
    Precio: 420,
    image:'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400'
});

productList.push({
    name: 'celular',
    Precio: 320,
    image:'https://images.pexels.com/photos/4526473/pexels-photo-4526473.jpeg?auto=compress&cs=tinysrgb&w=400'
    
});
productList.push({
    name: 'Bike',
    Precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'mueble',
    Precio: 420,
    image:'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400'
});

productList.push({
    name: 'celular',
    Precio: 320,
    image:'https://images.pexels.com/photos/4526473/pexels-photo-4526473.jpeg?auto=compress&cs=tinysrgb&w=400'
    
});
productList.push({
    name: 'Bike',
    Precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'mueble',
    Precio: 420,
    image:'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400'
});

productList.push({
    name: 'celular',
    Precio: 320,
    image:'https://images.pexels.com/photos/4526473/pexels-photo-4526473.jpeg?auto=compress&cs=tinysrgb&w=400'
    
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
</div>*/


/*se creo esta función para dilgencie los productos automaticamente y así pueda ser llamada para que los cargue,
a futuro , en el backep, esta función pude servir para llenar los productos, miles de ellos, a través de una base de datos*/
function renderProducts(arr){
    for (product of arr){
        /*se crea el div inicial, osea el que tiene la clase product-card*/
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        /*se crea la imagen del producto y se crea el atributo SRC  */
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        img.addEventListener('click',openCart);
    
        /*se crea el div que tiene la clase product-info*/
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
     /////--DIV--//////   
        /*se crea el div que esta solito sin clase debajo del div class="product-name"*/
        const productInfoDiv = document.createElement('div');
    
    
         /*se crea los parrafos del nombre y precio*/
    
        const pPrecio = document.createElement('p');
        pPrecio.innerHTML = '$' + product.Precio;
    
        const pName = document.createElement('p');
        pName.innerHTML = product.name;
    
     
    
        /////--FIGURE--//////
          /*se crea la etiqueta figure*/
        const productInfoFigure = document.createElement('figure');
    
        /*se crea el imagen dentro de la etiqueta figure figure*/
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src','/icons/bt_add_to_cart.svg');
    
        /*se mete dentro de la etiqueta figure la imagen del figure */
    
        productInfoFigure.appendChild(imgFigure);
        productInfoDiv.appendChild(pPrecio);
        productInfoDiv.appendChild(pName);
        
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
        
    }

};

renderProducts(productList);

