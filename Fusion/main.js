const emailNav = document.querySelector('.navbar-email');
const deskNav = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const carroIcon = document.querySelector('.navbar-shopping-cart');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardProduct = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail-secondary');
const closeIcon = document.querySelector('.product-detail-secondary-close');

emailNav.addEventListener('click', togglesDesktopMenu);
menuIcon.addEventListener('click', togglesMobileMenu);
carroIcon.addEventListener('click', togglesCarritoAside);
closeIcon.addEventListener('click', closeDetail);

function togglesDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    const isDetailsClosed = productDetail.classList.contains('inactive');

    if(!isDetailsClosed) {
        productDetail.classList.add('inactive');
    }

    deskNav.classList.toggle('inactive');
}

function togglesMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    closeDetail()

    menuMobile.classList.toggle('inactive');
}

function togglesCarritoAside() {
    //esta cerrado = inactive esta en la clase
    const ismenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDeskmenuClosed = deskNav.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    //si menu mobile no esta cerrado (esta abierto) lo cierra agregando la clase inactive
    if(!ismenuMobileClosed) {
        menuMobile.classList.add('inactive');
    } else if(!isDeskmenuClosed) {
        deskNav.classList.add('inactive')
    } else if(!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}

function openDetail(productName) {
    const product = getProductByName(productName); // Obtener el producto según el nombre
    createProductDetail(product); // Crear la vista detallada del producto
    aside.classList.add('inactive');
    deskNav.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function closeDetail() {
    productDetail.classList.add('inactive')
}

//recorre el for y product guarda los diferentes arreglos
// for(product of productList){
//     console.log(product.name);
// }
// //Bike
// //Xbox
// //Computador gamer

const productList = [];
productList.push({
    name: 'Bike',
    precio: 120,
    descripcion: 'Rin 29',
    imag: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Xbox',
    precio: 350,
    descripcion: 'Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.',
    imag: "https://cdn.forbes.com.mx/2022/01/louis-philippe-poitras-WMMh6BtmTMo-unsplash-640x360.jpg"
});
productList.push({
    name: 'Computador gamer',
    precio: 1200,
    descripcion: 'Laptop Lenovo V14 (14”, AMD Ryzen 5 7520U )',
    imag: "https://cuarteldelmetal.com/wp-content/uploads/2023/07/armado-pc-gamers-sp-digital.jpg"
});

for (product of productList) {
    console.log(product.name); // Agrega este log para verificar si se está capturando el nombre correctamente

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.imag);
    
    // Utiliza una función intermedia para capturar el valor correcto de product.name
    const clickHandler = (productName) => {
        return function() {
            console.log(productName); // Agrega este log para verificar si se está pasando correctamente al evento click
            openDetail(productName);
        };
    };

    productImg.addEventListener('click', clickHandler(product.name));

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFig = document.createElement('figure');
    const productIcon = document.createElement('img');
    productIcon.setAttribute('src', "/icons/bt_add_to_cart.svg");

    productInfoFig.appendChild(productIcon);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFig);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardProduct.appendChild(productCard);
}


// for()
// {
//     const detailImg = document.createElement('div');
//     detailImg.classList.add('product-detail-secondary-close');

//     const productIconClosed = document.createElement('img');
//     productIconClosed.setAttribute('src', '/icons/icon_close.png');

//     const productImg = document.createElement('img');
//     productImg.setAttribute('src', product.imag);

//     const detailText = document.createElement('div');
//     detailText.classList.add('product-info-secondary');

//     const priceText = document.createElement('p');
//     priceText.innerText = '$' + product.precio;

//     const nametext = document.createElement('p');
//     nametext.innerText = product.name;

//     const descriptiontext = document.createElement('p');
//     descriptiontext.innerText = product.descripcion;

//     const buttonCart = document.createElement('button');
//     buttonCart.classList.add('primary-button-secondary', 'add-to-cart-button');

//     const addCart = document.createElement('img');
//     addCart.setAttribute('src', "/icons/bt_add_to_cart.svg");

//     const buttonText = document.createTextNode('Add to cart');

//     buttonCart.appendChild(buttonText);
//     buttonCart.appendChild(addCart);

//     detailText.appendChild(priceText);
//     detailText.appendChild(nametext);
//     detailText.appendChild(descriptiontext);
//     detailText.appendChild(buttonCart);

//     detailImg.appendChild(productIconClosed);
    
//     productDetail.appendChild(detailText);
//     productDetail.appendChild(productImg);
//     productDetail.appendChild(detailImg);
// }

function createProductDetail(product) {
    const productDetail = document.querySelector('.product-detail-secondary');
    productDetail.innerHTML = ''; // Limpiar el contenido existente

    const detailImg = document.createElement('div');
    detailImg.classList.add('product-detail-secondary-close');
    const productIconClosed = document.createElement('img');
    productIconClosed.setAttribute('src', '/icons/icon_close.png');
    productIconClosed.addEventListener('click', closeDetail);
    detailImg.appendChild(productIconClosed);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.imag);

    const detailText = document.createElement('div');
    detailText.classList.add('product-info-secondary');

    const priceText = document.createElement('p');
    priceText.innerText = '$' + product.precio;

    const nametext = document.createElement('p');
    nametext.innerText = product.name;

    const descriptiontext = document.createElement('p');
    descriptiontext.innerText = product.descripcion;

    const buttonCart = document.createElement('button');
    buttonCart.classList.add('primary-button-secondary', 'add-to-cart-button');

    const addCart = document.createElement('img');
    addCart.setAttribute('src', '/icons/bt_add_to_cart.svg');

    const buttonText = document.createTextNode('Add to cart');

    buttonCart.appendChild(buttonText);
    buttonCart.appendChild(addCart);

    detailText.appendChild(priceText);
    detailText.appendChild(nametext);
    detailText.appendChild(descriptiontext);
    detailText.appendChild(buttonCart);

    productDetail.appendChild(detailImg);
    productDetail.appendChild(productImg);
    productDetail.appendChild(detailText);
}

// Función para obtener el producto por nombre
function getProductByName(productName) {
    // Recorre la lista de productos para encontrar el producto por nombre
    for (const product of productList) {
        if (product.name === productName) {
            return product;
        }
    }
    return null; // Devuelve null si no se encuentra el producto
}