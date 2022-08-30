const email = document.querySelector('.navbar-email');
const menuEmail = document.querySelector('.desktop-menu');
const iconHamburger = document.querySelector('.menuHam');
const menuHamburger = document.querySelector('.menuCategorias');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail'); //shoppingCartContainer
const cardsContainer =  document.querySelector('.cards-container');
const productItemsDetails = document.querySelector('.item-details'); //productDetailContainer
const iconItemsClose = document.querySelector('.item-details-close');

email.addEventListener('click', toggleMenuEmail);
iconHamburger.addEventListener('click', toggleMenuHamburger);
iconCarrito.addEventListener('click', toggleMenuCarrito);
iconItemsClose.addEventListener('click', closeItemsDetails);

function toggleMenuHamburger(){
    menuCarrito.classList.add('inactive');
    productItemsDetails.classList.add('inactive');
    menuHamburger.classList.toggle('inactive');
}

function toggleMenuEmail(){
    menuCarrito.classList.add('inactive');
    productItemsDetails.classList.add('inactive');
    menuEmail.classList.toggle('inactive');
}
    
function toggleMenuCarrito(){
    menuHamburger.classList.add('inactive');
    menuEmail.classList.add('inactive');
    productItemsDetails.classList.add('inactive');
    menuCarrito.classList.toggle('inactive');
}
    
function openItemsDetails(){
    productItemsDetails.classList.remove('inactive');
    menuCarrito.classList.add('inactive');
    menuEmail.classList.add('inactive');
}

function closeItemsDetails(){
    productItemsDetails.classList.add('inactive');
}

// function toggleMenuHamburger(){
//     const menuCarritoIsClose = menuCarrito.classList.contains('inactive');
//     const menuItemsIsClose = productItemsDetails.classList.contains('inactive');
    
//     if(!menuCarritoIsClose){
//         menuCarrito.classList.add('inactive');
//     }

//     if(!menuItemsIsClose){
//         productItemsDetails.classList.add('inactive');
//     }

//     menuHamburger.classList.toggle('inactive');
// }

// function toggleMenuEmail(){
//     const menuCarritoIsClose = menuCarrito.classList.contains('inactive');
//     const menuItemsIsClose = productItemsDetails.classList.contains('inactive');

//     if(!menuCarritoIsClose){
//         menuCarrito.classList.add('inactive');
//     }

//     if(!menuItemsIsClose){
//         productItemsDetails.classList.add('inactive');
//     }

//     menuEmail.classList.toggle('inactive');
// }

// function toggleMenuCarrito(){
//     const menuHamburgerIsClose = menuHamburger.classList.contains('inactive');
//     const menuEmailIsClose = menuEmail.classList.contains('inactive');
//     const menuItemsIsClose = productItemsDetails.classList.contains('inactive');

//     if(!menuHamburgerIsClose){
//         menuHamburger.classList.add('inactive');
//     }
    
//     if(!menuEmailIsClose){
//         menuEmail.classList.add('inactive');
//     }

//     if(!menuItemsIsClose){
//         productItemsDetails.classList.add('inactive');
//     }

//     menuCarrito.classList.toggle('inactive');
// }

// function openItemsDetails(){
//     productItemsDetails.classList.remove('inactive');
//     menuCarrito.classList.add('inactive');
//     menuEmail.classList.add('inactive');
// }

/***************************
****** PRODUCT LIST *******
**************************/

//Se crea un array que se irá llenando con los objetos que iremos asignando dependiendo de la cantidad de cards que queramos.
const productList = [];

productList.push({
    name : 'Bike',
    price : 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name : 'Pantalla',
    price : 250,
    image : 'https://img.blogs.es/samsungqledtv/wp-content/uploads/2018/06/Abre_Longevidad-1080x640.jpg'
});
productList.push({
    name : 'Laptop',
    price : 560,
    image : 'https://images.pexels.com/photos/246340/pexels-photo-246340.jpeg?auto=compress&cs=tinysrgb&w=1600'
    //image : 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

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

//Aquí se crea con JS un HTML que es el que contiene los cards. Practicamente se crea el HTML que está comentado arriba.

function products(producto){
    for (product of producto){
        const productCard = document.createElement('div'); //Aquí se está creando como tal la etiqueta de HTML.
        productCard.classList.add('product-card'); //Aquí le agrego su clase.

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openItemsDetails); //Le agregué el evento de que al dar click sobre cualquier imagen, me abra una vista con los detalles del producto. 
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
        
        productDiv.append(productPrice, productName); //Lo que se está haciendo es meter las etiquetas de productPrice y productName en la etiqueta de prductDiv. Esto para seguir el orden del HTML.
        
        const productFigue = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productFigue.append(productFigureImg);
        productInfo.append(productDiv, productFigue);
        productCard.append(productImg, productInfo);
        cardsContainer.append(productCard);
    }
    
}

products(productList); //Puede ser o no una función, podría dejarlo solo como un for, pero al ser una función puedo mandar llamarlo después en cualquier parte del código. Ya sea en un texto, al apretar un botón, etc.
