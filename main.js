const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const shoppingCartList = document.querySelector('.shopping-cart');
const myOrderContainer = document.querySelector('.my-order-content');

const cardsContainer = document.querySelector('.cards-container');

let cartCounter = document.querySelector('.cart-counter');
cartCounter.innerText = 0;

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);

//Cada vez que le den click al correo de arriba a la derecha o al carrito de compras
function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    // const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isShoppingCartContainerClosed) {
        //Si esta abierto el shoppingCartContainer, cerrarlo
        shoppingCartContainer.classList.add('inactive');
    };

    addInactive();


    // if(!isProductDetailClosed) {
    //     //Si esta abierto el product detail container, cerrarlo
    //     productDetailContainer.classList.add('inactive');
    // };

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    // const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if(!isShoppingCartContainerClosed) {
        //Si esta abierto el shoppingCartContainer, cerrarlo
        shoppingCartContainer.classList.add('inactive');
    };

    addInactive();

    // if(!isProductDetailClosed) {
    //     //Si esta abierto el product detail container, cerrarlo
    //     productDetailContainer.classList.add('inactive');
    // };

    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    // const isProductDetailClosed = asideDetail.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        //Si esta abierto el mobileMenu, cerrarlo
        mobileMenu.classList.add('inactive');
    };

    if(!isDesktopMenuClosed) {
        //Si esta abierto el shoppingCartContainer, cerrarlo
        desktopMenu.classList.add('inactive');
    };

    // if(!isProductDetailClosed) {
    //     //Si esta abierto el product detail container, cerrarlo
    //     productDetailContainer.classList.add('inactive');
    // };
    addInactive();
    shoppingCartContainer.classList.toggle('inactive');
};

// Hace un loop en toda la lista de los detalles de producto y les agrega la clase inactive
function addInactive() {
    for (product of allProductsDetail) {
        product.classList.add('inactive');
    }
}

const productList = [];
const shoppingCart = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://mx.kingsbikes.net/1798-thickbox_default/kink-gap-xl-21-2020-matte-trans-maroon-bmx-bike.jpg",
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Tv stand',
    price: 250,
    image: 'https://www.ikea.com/mx/en/images/products/lack-tv-bench-black-brown__0955265_pe803705_s5.jpg?f=s',
    description: ''
});
productList.push({
    name: 'Wall decoration',
    price: 60,
    image: "https://m.media-amazon.com/images/I/51edUAatM4L.jpg",
    description: ''
});
productList.push({
    name: 'Playstation 5',
    price: 500,
    image: "https://mxsonyb2c.vtexassets.com/arquivos/ids/263350/PS5_Fisica_DS.jpg?v=1751909001",
    description: `Experimenta una velocidad sorprendente de carga con una inmersión más intensa gracias a la SSD de ultra alta velocidad, compatible con retrolimentación háptica, gatillos adaptables y audio 3D, y una generación totalmente nueva de increíbles juegos de PlayStation®.
    Velocidad sorprendente: Disfruta de la potencia de una CPU, una GPU y una SSD personalizadas con E/S integradas que redefinirán lo que una consola PlayStation® puede hacer. `
});
productList.push({
    name: 'Bed',
    price: 600,
    image: "https://cdn.shopify.com/s/files/1/0099/2867/1291/products/FIQBGUNNERQBBDWG_2000x.jpg?v=1654062840",
    description: `Are you searching for a bed that provides storage without compromising on looks? Then your search for the perfect bed ends here with the Gunner Queen Bed. This bed looks stunning and has ample storage space for all your things. It has a sturdy construction of engineered wood that provides optimal support that lasts for years. In terms of storage, this bed will never disappoint you. It has six spacious compartments that can accommodate your things easily. Furthermore, the headboard of the bed comprises shelves and a cabinet. These shelves can be used to keep your photo frames or small showpiece items and the cabinet can be used to store medicines or books. The bed has a warm wenge colour that gives your room a relaxing look and inviting feel. Its impeccable colour also works with many styles of decor. With the Gunner Queen Bed, add a classic and refined style to your bedroom.`
});
productList.push({
    name: 'iPhone 14 Pro Max',
    price: 1099,
    image: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/10/05/realtime/18875614.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600",
    description: ''
});
productList.push({
    name: 'Asus Gamer TUF',
    price: 1199,
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6466/6466906cv1d.jpg",
    description: ''
});

// Crea la estructura para los detalles del producto
for (product of productList) {
    const asideDetail = document.createElement('aside');
    asideDetail.classList.add('inactive');
    asideDetail.setAttribute('id', 'product-detail');

    const productCloseIconContainer = document.createElement('div'); // Crea el contenedor del icono para cerrar el product-detail
    productCloseIconContainer.classList.add('product-detail-close'); // Agrega la clase
    const closeIconImage = document.createElement('img'); // Crea el <img>
    closeIconImage.setAttribute('src', './icons/icon_close.png'); // Agrega el url del icono de la tachita
    closeIconImage.classList.add('close-icon');

    const productImage = document.createElement('img'); // Crea el <img>
    productImage.setAttribute('src', product.image); // Agrega la imagen del producto

    const productInformation = document.createElement('div'); // Crea el contenedor para la informacion del producto
    productInformation.classList.add('product-info');
    const productPrice = document.createElement('p'); // Crea el tag <p> para el precio del producto
    productPrice.innerText = '$' + product.price; // Asigna el precio del producto
    const productName = document.createElement('p'); // Crea el tag <p> para el nombre del producto
    productName.innerText = product.name; // Asigna el nombre del producto
    const productDescription = document.createElement('p'); // Crea el tag <p> para la descripcion del producto
    productDescription.innerText = product.description; // Asigna la descripcion del producto
    const addBtn = document.createElement('button'); // Crea el contenedor del icono para añadir producto al carrito
    addBtn.classList.add('primary-button'); // Agrega la clase
    addBtn.classList.add('add-to-cart-button'); //Agrega la segunda clase
    const btnImage = document.createElement('img'); // Crea el <img>
    btnImage.setAttribute('src', './icons/bt_add_to_cart.svg'); // Agrega la imagen del carrito
    addBtn.innerText = 'Add to cart';

    // Ahora a hacer el append de adentro hacia fuera de todo los tags 
    addBtn.appendChild(btnImage);

    productInformation.append(productPrice, productName, productDescription, addBtn);

    productCloseIconContainer.appendChild(closeIconImage);

    asideDetail.append(productCloseIconContainer, productImage, productInformation);
    document.body.appendChild(asideDetail);
}

// Crea la estructura de los productos en el menu principal
for (product of productList) {
    const productCard = document.createElement('div'); // Crea el <div> principal
    productCard.classList.add('product-card'); // Agrega la clase al div principal
        
    const productImage = document.createElement('img'); // Crea el tag <img> del producto
    productImage.setAttribute('src', product.image); // Agrega la url de la imagen
        
    const productInformation = document.createElement('div'); // Crea el <div> que va a contener el precio, el nombre del producto, asi como el icono para agregar al carrito de compras
    productInformation.classList.add('product-info'); // Agrega la clase al div

    const productNameAndPrice = document.createElement('div'); // Crea el <div> que contiene precio y nombre del producto 
    const productName = document.createElement('p'); // Crea el tag <p> para el nombre del producto
    productName.innerText = product.name; // Asigna el nombre del producto
    const productPrice = document.createElement('p'); // Crea el tag <p> para el precio del producto
    productPrice.innerText = '$' + product.price; // Asigna el precio del producto

    const cartFigure = document.createElement('figure'); // Crea el tag <figure> donde pondremos la imagen del icono para agregar al carrito de compras
    cartFigure.classList.add('add-cart-btn'); // Agrega la clase al boton para cada producto
    const productShoppingCartIcon = document.createElement('img'); // Crea el tag <img>
    productShoppingCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg'); // Agrega la url de la imagen del carrito de compras

    // Vamos haciendo el append en orden de cada elemento desde dentro hacia fuera para generar la estructura correcta del "product-card"
    cartFigure.appendChild(productShoppingCartIcon);
    productNameAndPrice.append(productPrice, productName);
    productInformation.append(productNameAndPrice, cartFigure);
    productCard.append(productImage, productInformation);

    // Por ultimo, agregamos la estructura al div existente <div class="cards-container"> declarado e inicializado en la linea 10
    cardsContainer.appendChild(productCard);
}

const allProducts = document.querySelectorAll('.product-card'); // Seleccionamos todos los productos que creamos
const allProductsDetail = document.querySelectorAll('#product-detail'); // Seleccionamos todos los aside o product details
const closeDetailIcon = document.querySelectorAll('.product-detail-close'); // Seleccionamos cada tachita  de cada product detail

//Procedemos a hacerles un loop a cada producto que tenemos para que se le asigne un eventListener unico
for (let i = 0; i < allProducts.length; i++) {
    allProducts[i].firstChild.addEventListener('click', () => {
        shoppingCartContainer.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
            
        addInactive();
        allProductsDetail[i].classList.remove('inactive'); // Se le quita el inactive unicamente al producto al que el usuario hace el click
    });
    closeDetailIcon[i].addEventListener('click', () => { // Evento para que cuando se haga el click en la tacha, se cierre el detail del producto
        allProductsDetail[i].classList.add('inactive');
    });
}
    

// Crea la estructura del carrito de compras
function addShoppingCart(){
    myOrderContainer.replaceChildren(); // Hace reset del contenedor del carro de compras
    for (let i = 0; i < shoppingCart.length; i++) {
        const cartDiv = document.createElement('div');
        cartDiv.classList.add('shopping-cart');

        const productFigure = document.createElement('figure');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', shoppingCart[i].image);

        productFigure.appendChild(productImg);
        
        const productName = document.createElement('p');
        productName.innerText = shoppingCart[i].name;

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + shoppingCart[i].price;

        const deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('src', './icons/icon_close.png');
        deleteIcon.classList.add('remove-from-cart-btn')

        cartDiv.append(productFigure, productName, productPrice, deleteIcon);
        myOrderContainer.appendChild(cartDiv);
    }

    cartCounter.innerText = shoppingCart.length
    const removeCartBtn = document.querySelectorAll('.remove-from-cart-btn');
    for(let i = 0; i < shoppingCart.length; i++) {
        removeCartBtn[i].addEventListener('click', () => {
        shoppingCart.splice(i, 1);
        addShoppingCart();
        })
    }

    // Agrega el feature para saber el costo total del carrito de compras
    const totalCartCost = document.createElement('div');
    totalCartCost.classList.add('total-shopping-cart')
    const cartTotalText = document.createElement('p');
    let cartCostText = document.createElement('p');
    cartTotalText.innerText = 'Total: '
    let cartTotalArr = []
    for (product of shoppingCart) {
        cartTotalArr.push(product.price);
    }
    const cartCost = cartTotalArr.reduce((acc, currentValue) => {
        return acc + currentValue;
    })
    cartCostText.innerText = '$' + cartCost;
    totalCartCost.appendChild(cartTotalText);
    totalCartCost.appendChild(cartCostText);
    myOrderContainer.appendChild(totalCartCost);

    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('primary-button');
    checkoutButton.innerText = 'Checkout';
    myOrderContainer.appendChild(checkoutButton);
}

// Feature para agregar un producto al carrito de compras desde la pantalla principal
const addCartBtn = document.querySelectorAll('.add-cart-btn');
for (let i = 0; i < productList.length; i++) {
    addCartBtn[i].addEventListener('click', () => {
        shoppingCart.push(
            productList[i]
        );
        addShoppingCart();
    })
}

// Feature para agregar un producto al carrito de compras desde el aside del detalle de producto
const detailAddCartBtn = document.querySelectorAll('.add-to-cart-button');
for (let i = 0; i < productList.length; i++) {
    detailAddCartBtn[i].addEventListener('click', () => {
        shoppingCart.push(
            productList[i]
        );
        addShoppingCart();
    })
}