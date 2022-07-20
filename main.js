// desktop 
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu"); //el HTML que aparece o desaparece
// Mobile
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu"); //el HTML que aparece o desaparece
// carrito
const productDetail = document.querySelector(".product-detail"); //el HTML que aparece o desaparece
const carrito = document.querySelector(".navbar-shopping-cart");

// contenedor de las cards
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    productDetail.classList.add("inactive");
    desktopMenu.classList.toggle('inactive'); //de esta forma lo que logro es que cuando le den click a la etiqueta desktopmenu me quita o me ponga la clase dependiendo si esta existe ya o no
}

burgerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    productDetail.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

carrito.addEventListener("click",toggleProductDetail);

function toggleProductDetail(){
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add('inactive');
    productDetail.classList.toggle("inactive");
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
