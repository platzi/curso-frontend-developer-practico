const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector ('.product-detail');
const cardsContainer = document.querySelector ('.cards-container');

//Esto hara que al picarle al emial, se abra el menu secundario
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


//Con la funcion classList.toggle hacemos que este o no este nuestra clase seleccionada, pero hay que recordar que tenemos que agregar la clase inactive a nuestra clase en HTML, la clase que estamos usando en nuestra variable. 

//Agregamos el condicional que estamos aplicando en las funciones de abajo, donde si el menu de carrito de compras esta abierto (aside), al momento de abrir el desktop menu, el carrito de compras automaticamente se cierra. 

function toggleDesktopMenu () {

    const isAsideClosed = aside.classList.contains ('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};


// Esta funcion es para cerrar el carrito de compras (aside) en dado caso que este abierto, porque si queremos abrir el mobileMenu, se va a empalmar, al momento que abro el mobileMenu, automaticamente el carrito de compras se cierra. 
function  toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains ('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
};


// Esta funcion es para cerrar el mobile menu en dado caso que este abierto, porque si queremos abrir el menu del carrito, se va a empalmar, al momento que abro el menu del carrito de compras, automaticamente el mobile menu se cierra. 
function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    

    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
};

// Array de productos 
const productList = [];
productList.push({
    name: 'Bike',
    price: 220.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});

productList.push({
    name: 'Pantalla',
    price: 220.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});

productList.push({
    name: 'Compu',
    price: 220.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});



//Estamos haciendo un loop para crear desde el DOM los product cards, maquetando HTML desde JS. Lo metimos dentro de una funcion para poder llamar luego a esa funcion en dado caso de ser necesario.   
function renderProducts (arr) {
    for (product of arr) {
   
        // Estamos creando un div para el product card
       const productCard = document.createElement('div');
       productCard.classList.add ('product-card');
    
       //Lo que hicimos aqui abajo es agarrar de nuestro producto el atributo de image para tomarlo como src en lugar de poner el link de la imagen 
       const productImg = document.createElement('img');
       productImg.setAttribute('src', product.image);
    
        // Estamos creando un div para el product info
       const productInfo = document.createElement('div');
       productInfo.classList.add ('product-info');
    
        //Div sin clase para meter la info de nuestro producto 
        const productInfoDiv = document.createElement('div');
        
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        //Con los appendChild estamos metiendo el product name y el product price dentro de product info div. Y asi sucesivamente con los otros appendChild dentro del codigo. 
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        // Este appendChild es el que contiene todo lo que los demas contienen, como metios dentro product child, que a su vez este tiene adentro productIngo y productImg, y asi sucesivamente. 
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);