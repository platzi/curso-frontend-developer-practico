const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu); // aquí decimos que cuando se de un clic, se ejecute la función toggleDesktopMenu.
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleshoppingCartContainer);

// funcion que abre y cierra el menú en desktop
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); // llamamos a nuestra constante/utilizamos la palabra reservada classList para listar una clase / toggle sirve para intercabiar(poner o quitar la clase) / y dentro de los parentesis ponemos la clase que queremos que se intercambie.
};

// funcion que abre y cierra el menú en mobil
function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive'); // Aquí cerramos el product-detail en caso de que este abierto para que no se sobrepongan
    mobileMenu.classList.toggle('inactive'); // llamamos a nuestra constante/utilizamos la palabra reservada classList para listar una clase / toggle sirve para intercabiar(poner o quitar la clase) / y dentro de los parentesis ponemos la clase que queremos que se intercambie.
};

// funcion que abre y cierra el detalle de los productos
function toggleshoppingCartContainer() {
    mobileMenu.classList.add('inactive'); // Aquí cerramos el mobile-menu en caso de que este abierto para que no se sobrepongan
    desktopMenu.classList.add('inactive'); // cerramos el menú desktop en caso de que esté abierto
    shoppingCartContainer.classList.toggle('inactive'); // aquí abrimos el product-detail si esta cerrado o lo cerramos si está abierto. Toggle es un iterable.
}

const productList = []; // Este es un array en donde guardaremos nuestros productos
productList.push({  // aquí estamos agregando objetos a nuestro array
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Television',
    price: '220',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.chZCG5V441pNRpcC6-zZGwHaFN%26pid%3DApi&f=1&ipt=89427d6e3d702fa1a714889b9e0d306cb2f25ca9ea144093a77aa12546a6401f&ipo=images',
});
productList.push({
    name: 'Computer',
    price: '420',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcredimas.hn%2Fonline%2Fwp-content%2Fuploads%2F2020%2F08%2Fc003-80910302.jpg&f=1&nofb=1&ipt=47c225d9464b6fd123deb3edafba88327c0aa4a91e1ecc2127a5711ac134d170&ipo=images',
});


function renderProducts(arr) {
    for(product of productList) { // Para cada product(nueva variable) del array productList.
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);  // aquí estamos agregando dentro del div de la constante productInfoDiv el parrafo que contiene el precio
        productInfoDiv.appendChild(productName); // aquí estamos agregando dentro del div de la constante productInfoDiv el parrafo que contiene el nombre
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart) // aquí estamos agregando dentro del figure de la constante productInfoFigure la img
    
        productInfo.appendChild(productInfoDiv);  // aquí estamos agregando dentro del productInfo de la constante productInfoDiv
        productInfo.appendChild(productInfoFigure);  // aquí estamos agregando dentro del productInfo de la constante productInfoFigure
    
        productCard.appendChild(productImg);   // aquí estamos agregando dentro del productCard de la constante img
        productCard.appendChild(productInfo);   // aquí estamos agregando dentro del productCard de la constante productInfo
    
        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);


{/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
             <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */}