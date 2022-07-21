// SELECTORES !!!!!!!!!!!!
// desktop 
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu"); //el HTML que aparece o desaparece
// Mobile
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu"); //el HTML que aparece o desaparece
// carrito
const shoppingCartContainer = document.querySelector("#shoppingCartContainer"); //el HTML que aparece o desaparece
const carrito = document.querySelector(".navbar-shopping-cart");

// product detail
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// contenedor de las cards
const cardsContainer = document.querySelector('.cards-container');


// EVENTOS!!!!!!!!!!!!!!!!

//evento1 va con la funcion "toggleDesktopMenu"
navEmail.addEventListener("click", toggleDesktopMenu);

//evento 2 va con la funcion "toggleMobileMenu"
burgerMenu.addEventListener("click", toggleMobileMenu);

//evento 3 va con la funcion "toggleshoppingCartContainer"
carrito.addEventListener("click",toggleshoppingCartContainer);

//evento 5 va con la funcion "closeProductDetail"
productDetailCloseIcon.addEventListener('click', closeProductDetail);

// FUNCIONES!!!!!!!!!!!!!!!!!

function toggleDesktopMenu(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive'); //de esta forma lo que logro es que cuando le den click a la etiqueta desktopmenu me quita o me ponga la clase dependiendo si esta existe ya o no
}

function toggleMobileMenu(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle("inactive");
}

function toggleshoppingCartContainer(){
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
    shoppingCartContainer.classList.toggle("inactive");
}

// esta funcion no tiene evento directamente declarado aca el evento se declara en la funcion renderProducts al ser un elemento HTML creado desde js 

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'pantalla',
    price: 200,
    image: 'https://okdiario.com/img/2016/10/22/television-mecanica-b.jpg',
});

productList.push({
    name: 'Pc',
    price: 300,
    image: 'https://bunny.pcware.com.co/wp-content/uploads/2020/10/ArmadaPC-Ryzen-R5-3400G-300x300.jpg',
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
    for (product of productList){ //for of me trae el contenido de los elementos de mi lista y el for in me trae la posicion de los elementos. por ej: for of me trae el nombre o el valor de la variable mientras el for in me trae en donde esta posicionado 1,2,3 etc

        //inicialmente creamos los elementos correspondientes a cada card de HTML desde js 
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener("click",openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice= document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        //cuando se terminen de crear lo que sigue es introducir cada etiqueta en su padre como se realizo en HTML
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
