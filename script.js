                        //VARIABLES GENERALES
// #01# var desplegar menu al dar click al email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// #02# var Desplegar menu hamburguesa al dar click al icono 
const burgerIcon = document.querySelector('.burgerIcon');
const mobileMenu = document.querySelector('.mobile-menu');

// #03# var Desplegar menu carrito de compras al dar click al icono 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
// #04# var lista de productos 
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


// #01# desplegar menu al dar click al email
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
   
    // En caso de que el menu mobile y el carrito de compras se encuentren los dos abiertos en la vista de mobile y no se solapen el uno con el otro se puede aplicar el siguiente codigo
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    else if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    // al ejecutar la funcion classList.toggle va a quitar o colocar la clase inactive dependiendo del evento click a*adido anteriormente
    desktopMenu.classList.toggle('inactive');
}
console.log('js funcionando');



// #02# Desplegar menu hamburguesa al dar click al icono 
burgerIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    // En caso de que el menu mobile y el carrito de compras se encuentren los dos abiertos en la vista de mobile y no se solapen el uno con el otro se puede aplicar el siguiente codigo
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    else if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }


     // al ejecutar la funcion classList.toggle va a quitar o colocar la clase inactive dependiendo del evento click a*adido anteriormente
     mobileMenu.classList.toggle('inactive');
}



// #03# Desplegar menu carrito de compras al dar click al icono 
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    // NOTA:esta variable lo que esta preguntando al productDetailContainer si tiene la clase inactive
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    // En caso de que el menu mobile y el carrito de compras se encuentren los dos abiertos en la vista de mobile y no se solapen el uno con el otro se puede aplicar el siguiente codigo

        // si el mobileMenu esta open, hay que cerrarlo 
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    else if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive'); 
}



// #04# lista de productos 

        // La funcion openProductDetailAside (funcion general) esta siendo llamada desde otra funcion la cual es renderProducts a travez de un escuchador de eventos de la variable productImg
function openProductDetailAside() {
    // para remover la clase inactive usamos la propiedad remove
    productDetailContainer.classList.remove('inactive');
    // Para cerrar el carrito de compras aplicamos solo esto ya que no estamos usando toggle
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
        
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}




const productList = []; 
        // dentro del Array vamos a agregar un objeto
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Reloj',
    price: 50,
    image: 'https://images.pexels.com/photos/210528/pexels-photo-210528.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Vaso',
    price: 2,
    image: 'https://media.istockphoto.com/id/1183424538/es/foto/agua-que-vierte-en-el-vidrio.jpg?b=1&s=612x612&w=0&k=20&c=wwAqjo8wowpSQuggOtxFRW_Jhj1wU2nuvndeUmdb3_c=',
});
productList.push({
    name: 'Pantalla',
    price: 70,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Telefono',
    price: 220,
    image: 'https://images.pexels.com/photos/13039078/pexels-photo-13039078.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Laptop',
    price: 300,
    image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Reloj',
    price: 50,
    image: 'https://images.pexels.com/photos/210528/pexels-photo-210528.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Vaso',
    price: 2,
    image: 'https://media.istockphoto.com/id/1183424538/es/foto/agua-que-vierte-en-el-vidrio.jpg?b=1&s=612x612&w=0&k=20&c=wwAqjo8wowpSQuggOtxFRW_Jhj1wU2nuvndeUmdb3_c=',
});
productList.push({
    name: 'Pantalla',
    price: 70,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Telefono',
    price: 220,
    image: 'https://images.pexels.com/photos/13039078/pexels-photo-13039078.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Laptop',
    price: 300,
    image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=600',
});

function renderProducts(arr) {
    for (product of arr) {
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
        
        // DENTRO DE ESTE "FOR" vamos a recrear el html de cada producto
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
        
            
            
            const productImg = document.createElement('img');
            //product = {name, price, image} -> product.image
            //para mdificar su propiedad src usamos  el siguiente codigo
            productImg.setAttribute('src', product.image);
            productImg.addEventListener('click', openProductDetailAside);
        
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
            
        
            const productInfoDiv = document.createElement('div');
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
            //NOTA: Luego de replicar el html integramos todos los elementros dentro de su contenedor padre
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
        
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
            //NOTA: Luego de replicar el html integramos todos los elementros dentro de su contenedor padre
            productInfoFigure.appendChild(productImgCart);
        
        
            //NOTA: Luego de replicar el html integramos todos los elementros dentro de su contenedor padre
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
            
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardsContainer.appendChild(productCard);
        }
}

renderProducts(productList);
