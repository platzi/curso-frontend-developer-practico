const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menuHam');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cadrsContainer =document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive'); 

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive'); 

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    // Si contiene la clase inactive, es porque está cerrado.
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDestopMenuClosed = desktopMenu.classList.contains('inactive'); 
   
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    
    if (!isDestopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Computadora',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

renderProducts(productList);


// Lo siguiente que haremos será crear la siguiente estructura pero desde JS. 

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
    </div> 
*/

//Pero lo haremos dentro de una función para que podamos utilizarlo cuando lo necesitemos.
function renderProducts(arr){ 
//Con el siguiente bucle for podemos hacer queque cada elemento dentro del array productList cree la estructura anterior en
    for (product of arr){

        //Creamos un div y le asignamos una clase .
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //Luego creamos una etiqueta img y le asignamos un elemnto src.
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        //Ahora creamos otro div que tambien tendrá una clase.
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        //Este div no tendrá clase.
        const productInfoDiv = document.createElement('div');

        // Ahora creamos una etiqueta p que dentro de ella incluirá detalles del precio.
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        //Tenemos otra equiqueta p pero ahora tendrá la información del nombre.
        const productName = document.createElement('p');
        productName.innerText = product.name;

        // En esta parte es donde vamos a empezar a anidar las etiquetas que creamos anteriormente.

        //Agregamos productPrice dentro de la etiqueta procductInfoDiv y luego le inyectamos el nombre.
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        // Aquí creamos dos elementos más en donde les pondremos a prodcutImgCart le pondremos una imagen de nuestra ruta local.
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');    
        
        // Insertamos productImgCart dentro de productInfoFigure.
        productInfoFigure.appendChild(productImgCart);

        // Insertamos productInfoDiv y productInfoFigure dentro de productInfo.
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        // Y tambien insertamos productImg y productInfo dentro de productCard.
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        // Y por último insertamos productCard detnro carsContainer
        cadrsContainer.appendChild(productCard)
}
}
