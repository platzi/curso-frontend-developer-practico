// Se colocan las variables en primer lugar
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
// Constante que va a contener <DIV CLASS="PRODUCT-CARD">
const cardsContainer = document.querySelector('.cards-container');



// ----------------------------------------------------------------------------------------------

// Escucha y activa la funcion (toggleDesktorMenu) mediante el click
menuEmail.addEventListener('click', toggleDesktopMenu);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada.
// Constante (isAsideClosed) verifica que (aside) contenga la clase INACTIVE.
// IF condicional que verifica que la constante (isAsideClosed) no ( ! ) tenga la clase INACTIVE, de ese modo puede agregarsela a la constante (aside) mediante CLASSLIST.ADD
function toggleDesktopMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
};

// ----------------------------------------------------------------------------------------------

// Escucha y activa la funcion (toggleMobileMenu) mediante el click
menuHamIcon.addEventListener('click', toggleMobileMenu);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada.
// Constante (isAsideClosed) verifica que (aside) contenga la clase INACTIVE.
// IF condicional que verifica que la constante (isAsideClosed) no ( ! ) tenga la clase INACTIVE, de ese modo puede agregarsela a la constante (aside) mediante CLASSLIST.ADD
function toggleMobileMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
};

// ----------------------------------------------------------------------------------------------

// Escucha y activa la funcion (toggleAside) mediante el click
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada.
// Constante (isMobileMenuClosed) (isDesktopMenuClosed) verifica que (mobileMenu) (desktopMenu) contenga la clase INACTIVE.
// IF condicional que verifica que la constante (isMobileMenuClosed) (isDesktopMenuClosed) no ( ! ) tenga la clase INACTIVE, de ese modo puede agregarsela a la constante (mobileMenu) (desktopMenu) mediante CLASSLIST.ADD
function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}



// ----------------------------------------------------------------------------------------------

// Constante que va a contener el array de productos
const productList = [];

// Metodo PUSH para insertar los nuevos objetos en el array vacio (productList)
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg",
});
productList.push({
    name: "Iphone 14",
    price: 350000,
    image: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-front.png",
});
productList.push({
    name: "Escritorio",
    price: 55000,
    image: "https://www.costco.com.mx/medias/sys_master/products/h5f/h0d/32302073479198.jpg",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg",
});
productList.push({
    name: "Iphone 14",
    price: 350000,
    image: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-front.png",
});
productList.push({
    name: "Escritorio",
    price: 55000,
    image: "https://www.costco.com.mx/medias/sys_master/products/h5f/h0d/32302073479198.jpg",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg",
});
productList.push({
    name: "Iphone 14",
    price: 350000,
    image: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-front.png",
});
productList.push({
    name: "Escritorio",
    price: 55000,
    image: "https://www.costco.com.mx/medias/sys_master/products/h5f/h0d/32302073479198.jpg",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg",
});
productList.push({
    name: "Iphone 14",
    price: 350000,
    image: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-front.png",
});
productList.push({
    name: "Escritorio",
    price: 55000,
    image: "https://www.costco.com.mx/medias/sys_master/products/h5f/h0d/32302073479198.jpg",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg",
});
productList.push({
    name: "Iphone 14",
    price: 350000,
    image: "https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-front.png",
});

// FOR OF metodo para recorrer el array (productList), CREATEELEMENT metodo para crear el elemeto que se mostrara en el HTML y CLASSLIST.ADD metodo para agregar una clase al elemento creado. Con SETATRIBUTE establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.

{/* <div class="product-card">
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
</div> */}

function renderProducts(arrayNuevo){
    
    for(product of arrayNuevo){

    // CREACION DE ELEMENTOS QUE ELEMENTO <DIV CLASS="PRODUCT-CARD">

    // CLASSLIST.ADD propiedad para agregar una clase al elemento creado.
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
     
    // SETATTRIBUTE establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    // CLASSLIST.ADD propiedad para agregar una clase al elemento creado.
    const productInfo = document.createElement('div');
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement('div');

    // INNERTEXT nos permite cambiar el contenido de texto de un elemento de texto o consultar su valor.
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    // INNERTEXT nos permite cambiar el contenido de texto de un elemento de texto o consultar su valor.
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productFigure = document.createElement('figure');

    // SETATTRIBUTE establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');



    // APPENDCHILD metodo para agregar un nodo, APPEND metodo para agregar varios nodos
    productFigure.appendChild(productFigureImg);
    productInfoDiv.append(productPrice, productName);

    productInfo.append(productInfoDiv, productFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}}
renderProducts(productList);