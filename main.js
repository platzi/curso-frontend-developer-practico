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
    image: "https://biciurbana.com.ar/11006-thickbox_default/bicicleta-gt-karakoram-monoplato-deore-1x10.jpg",
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
    image: "https://arcencohogar.vtexassets.com/arquivos/ids/296571-800-800?v=637665757847400000&width=800&height=800&aspect=true",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://www.bidcom.com.ar/publicacionesML/productos/BICIMT01X/1000x1000-BICIMT01N.jpg",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://images.start.com.ar/90NB0TY1-M03540-2.jpg",
});
productList.push({
    name: "Iphone 13",
    price: 350000,
    image: "https://images.fravega.com/f1000/584d269b9ea76ad3c474789eaa3e207c.jpg",
});
productList.push({
    name: "Escritorio",
    price: 55000,
    image: "https://images.fravega.com/f1000/5d6be021c74265618cdefa84178fdd35.jpg",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://www.max-you.com.ar/images/000000000000000540959GIRL-16-02-min.jpg",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://www.brandimia.com/productos/94N14WD21-3.jpg",
});
productList.push({
    name: "Iphone 13 Pro",
    price: 350000,
    image: "https://images.fravega.com/f1000/fd127ad03bb0ed21691b43f6bcc0a4cc.jpg",
});
productList.push({
    name: "Escritorio",
    price: 55000,
    image: "https://arcencohogar.vtexassets.com/arquivos/ids/313912/1329335-1.jpg?v=637794251516970000",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://www.lamborghinikids.com.ar/wp-content/uploads/2020/05/rodado-16-crossweb-rojo.jpg",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/057/630/products/dreamshop-notebook-lenovo-81w8-i51-31e4ee5a786e5a6a5116071135912719-1024-1024.png",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://www.max-you.com.ar/images/000000000000000641171BOY-16-ROJA-01-min.jpg",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://eclypse.com.ar/wp-content/uploads/2022/05/HP-PAVILLION.jpg",
});
productList.push({
    name: "Iphone SE",
    price: 350000,
    image: "https://images.fravega.com/f1000/98fa6c9c873d95fb00396189792a823f.jpg",
});
productList.push({
    name: "Escritorio",
    price: 55000,
    image: "https://www.officedepot.com.mx/medias/100069486.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDUwODA3fGltYWdlL2pwZWd8aGVkL2hlYS8xMDkxODU3ODM4OTAyMi8xMDAwNjk0ODYuanBnXzEyMDBmdHd8NTI4MzNjOTgzMWNkNDAyNDhhMjM5OWE4MmQ2NGJjZDY1MDA4MmVmZjQzOWJjZGQwNTUzZDk2NWFlZTI4MzRiYw",
});
productList.push({
    name: "Bike",
    price: 120000,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/062/773/products/kore-chacao-21-hidra-11-322225b4749c7a5d0116427701558059-1024-1024.jpg",
});
productList.push({
    name: "Notebook",
    price: 249000,
    image: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2022/10/19095535/AN515-57_red_01-PNR-692.jpg",
});
productList.push({
    name: "Iphone 13 Pro Max",
    price: 350000,
    image: "https://images.fravega.com/f1000/222d2afe5822512bb54ce3a50535add3.jpg",
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



// ----------------------------------------------------------------------------------------------