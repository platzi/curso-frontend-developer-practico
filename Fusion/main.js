const emailNav = document.querySelector('.navbar-email');
const deskNav = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const carroIcon = document.querySelector('.navbar-shopping-cart');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardProduct = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail-secondary');
const closeIcon = document.querySelector('.product-detail-secondary-close');
const orderCart = document.querySelector('.product');

emailNav.addEventListener('click', togglesDesktopMenu);
menuIcon.addEventListener('click', togglesMobileMenu);
carroIcon.addEventListener('click', openCarritoAside);
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

function openCarritoAside() {
    // esta cerrado = inactive esta en la clase
    const ismenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDeskmenuClosed = deskNav.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    // si menu mobile no esta cerrado (esta abierto) lo cierra agregando la clase inactive
    if (!ismenuMobileClosed) {
        menuMobile.classList.add('inactive');
    } else if (!isDeskmenuClosed) {
        deskNav.classList.add('inactive')
    } else if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }

    aside.classList.toggle('inactive');
}

function addToCarrito(productName) {
    // Busca el producto en productList según el nombre
    const product = getProductByName(productName);

    // Verifica si el producto ya está en el carrito
    const existingProduct = carritoProductos.find(p => p.name === product.name);

    if (existingProduct) {
        // Si ya está en el carrito, incrementa la cantidad
        existingProduct.cantidad += 1;
    } else {
        // Si no está en el carrito, agrégalo con cantidad 1
        carritoProductos.push({ name: product.name, precio: product.precio, cantidad: 1 });
    }

    // Actualiza el carrito
    productCart(product);
    console.log(carritoProductos);
}

function openDetail(productName) {
    aside.classList.add('inactive');
    deskNav.classList.add('inactive');
    productDetail.classList.remove('inactive');

    // Busca el producto en productList según el nombre
    const product = getProductByName(productName);

    // Actualiza el carrito
    createProductDetail(product);
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
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.imag);
    
    // Utiliza una función intermedia para capturar el valor correcto de product.name
    const clickHandler = (productName) => {
        return function() {
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
    const clickHandler1 = (productName) => {
        return function() {
            if (product) {
                addToCarrito(productName);
            } else {
                console.error('El producto no se encontró.');
            }
        };
    };

    productIcon.addEventListener('click', clickHandler1(product.name));

    productInfoFig.appendChild(productIcon);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFig);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardProduct.appendChild(productCard);
}

function createProductDetail(product) {
    const productDetail = document.querySelector('.product-detail-secondary');
    productDetail.innerHTML = ''; // Limpiar el contenido existente

    const detailImg = document.createElement('div');
    detailImg.classList.add('product-detail-secondary-close');
    const productIconClosed = document.createElement('img');
    productIconClosed.setAttribute('src', '/icons/icon_close.png');
    detailImg.addEventListener('click', closeDetail);
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
    addCart.addEventListener('click', function() {
        const product = getProductByName('Xbox');
        if (product) {
            addToCarrito(product.name);
        } else {
            console.error('El producto no se encontró.');
        }
    });

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

const carritoProductos = [];

function productCart(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('shopping-cart');

    const productImgFig = document.createElement('figure');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.imag);
    productImgFig.appendChild(productImg);

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;

    const closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', "/icons/icon_close.png");

    productDiv.appendChild(productImgFig);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(closeIcon);

    orderCart.appendChild(productDiv);
}