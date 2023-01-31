
const navEmail = document.querySelector('.navbar-email');   // E-mail que esta arriba
const myOrdersMenu = document.querySelector ('.desktop-menu'); // menu del E-mail
const menuBurger = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu')
const iconCarrito = document.querySelector ('.navbar-shopping-cart')
const aside = document.querySelector ('.shoppingCartContainer')
const productDetail = document.querySelector ('.product-detail'); // Tarjeta 
const iconClose = document.querySelector ('.product-detail-close'); // Boton cerrar
const cardsContainer = document.querySelector('.cards-container');

// Beim Anclicken wird das Menü My Orders angezeigt.
navEmail.addEventListener('click', toggleDesktopMenu);

//Agrega la classe 'inactive' (aunque ya la tenga) al elemento que está desplegado para que se oculte y con el Toggle intercambia el estado del otro menú que está oculto

function toggleDesktopMenu (){
    myOrdersMenu.classList.toggle ('inactive');
    aside.classList.add ('inactive');
    productDetail.classList.add ('inactive');
}

// Beim <640px und Anclicken tauch das Menü Burger auf.
menuBurger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu (){
    mobileMenu.classList.toggle ('inactive');
    aside.classList.add('inactive');
    productDetail.classList.add ('inactive');
}

// Beim Anclicken ercheinen die Artikel im Warenkorb.
iconCarrito.addEventListener('click', showCarritoAside);
iconClose.addEventListener('click', console.log); /// Por que funciona???

function showCarritoAside (){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add ('inactive');
    myOrdersMenu.classList.add ('inactive');
    productDetail.classList.add ('inactive');
    
 }
// Cierra la vista Preliminar
function openCloseProductDetail (){
    productDetail.classList.toggle ('inactive');
    aside.classList.add('inactive');
}

const productList =[];
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"'
});
productList.push ({
    name: 'Laptop',
    price: 800,
    image: 'pexels-hasan-albari-1229861.jpg'
});

productList.push ({
    name: 'Coffee',
    price: 300,
    image: 'pexels-charlotte-may-5825346.jpg'
});
productList.push ({
    name: 'Auto',
    price: 1500,
    image: 'pexels-alexgtacar-1592384.jpg'
});

// Funcion Array de creacion de productos

for (product of productList) {

    const productCard= document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute ('src', product.image);
   
    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement ('div');

    const productPrice= document.createElement('p');
    productPrice.innerText ='$' + product.price;

    const productName= document.createElement('p');
    productName.innerText = product.name; 

    const productInfoFigure = document.createElement('figure');
    
    const productImgCart = document.createElement ('img');
    productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');

    productDetail.addEventListener('click', openCloseProductDetail); // sacar una tarjeta

     // Agregamos El nombre y precio al DIV de info dle producto
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild (productImg);
    productCard.appendChild (productInfo);

    // Inserto la tarjeta en el Cards Container
    cardsContainer.appendChild(productCard);
}
