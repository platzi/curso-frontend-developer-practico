// TresD: Tienda Online 
// Any Omaña: iamanyyeei en GitHub
// 24.01.2024 

// SECCION DEL NAVBAR: Completo

const navEmail = document.querySelector('.nav-email');
const mobileMenuWeb = document.querySelector('.mobileMenuWeb');
const imgCarrito = document.querySelector('.added');


const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const detailsProduct = document.querySelector('.details');

const cardsContainer = document.querySelector('.cards-container');
const productImgContainer = document.querySelector('#individualDetails');
const productImgCloseIcon = document.querySelector('.closeIcon');

// Mostrar funcion y quitar 

navEmail.addEventListener('click',toogleDesktopMenu);
menuIcon.addEventListener('click',toogleMobileMenuWeb);
imgCarrito.addEventListener('click',toogleDetailProd);
productImgCloseIcon.addEventListener('click',closeProductImg);

function toogleDesktopMenu(){

    // Cerrar detalle de producto

    const isDetailProdClosed = detailsProduct.classList.contains('inactive');

    if (!isDetailProdClosed) {
        detailsProduct.classList.add('inactive');
    }

    closeProductImg();

    desktopMenu.classList.toggle('inactive');
};

function toogleMobileMenuWeb(){

    // Cerrar detalle de producto

    const isDetailProdClosed = detailsProduct.classList.contains('inactive');

    if (!isDetailProdClosed) {
        detailsProduct.classList.add('inactive');
    }

    closeProductImg();

    mobileMenuWeb.classList.toggle('inactive');
};

function toogleDetailProd(){

    // Cerrar menú mobile

    const isMobileMenuClosed = mobileMenuWeb.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenuWeb.classList.add('inactive');
    }

    // Cerrar menú desktop

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    //Cerrar detalle de imagen si abrimos carrito
    const isProductImgContainerClosed = productImgContainer.classList.contains('inactive');
    
    if (!isProductImgContainerClosed) {
        productImgContainer.classList.add('inactive');
    }
    

    detailsProduct.classList.toggle('inactive');
};


//Abrir detalle de imagen
function openProductImg(){
    
    detailsProduct.classList.add('inactive');

    productImgContainer.classList.remove('inactive');
};

//Cerrar detalle de imagen
function closeProductImg(){
    
    productImgContainer.classList.add('inactive');
};


// SECCION DEL HOME: Con productos 

const productList = [];

productList.push ({
    name: 'Jointed octupus',
    price: 5,
    image: './products/1.jpg',
});

productList.push ({
    name: 'Squid Game Figure',
    price: 10,
    image: './products/2.png',
});

productList.push ({
    name: 'Dragon',
    price: 15,
    image: './products/3.jpg',
});

productList.push ({
    name: 'Red Dinosaur',
    price: 12,
    image: './products/4.jpg',
});

productList.push ({
    name: 'Yoguis Pots',
    price: 20,
    image: './products/5.png',
});

productList.push ({
    name: 'Bear Yogui',
    price: 15,
    image: './products/6.jpg',
});

productList.push ({
    name: 'Stich Cup',
    price: 8,
    image: './products/7.jpeg',
});

productList.push ({
    name: 'Baby Groot',
    price: 10,
    image: './products/8.jpeg',
});

productList.push ({
    name: 'Genius',
    price: 25,
    image: './products/9.jpg',
});

productList.push ({
    name: 'Pencil Holders',
    price: 5,
    image: './products/10.jpg',
});

productList.push ({
    name: 'Pencil Holders',
    price: 15,
    image: './products/11.jpg',
});

productList.push ({
    name: 'Dinosaur Watering',
    price: 32,
    image: './products/12.jpg',
});

productList.push ({
    name: 'Drone',
    price: 30,
    image: './products/13.jpg',
});

productList.push ({
    name: 'Baby Yoda',
    price: 22,
    image: './products/14.jpg',
});

function renderProducts(productList){

    //Recorrer el array de productos
    for (product of productList) {
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
    
        //product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.classList.add('product');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductImg);    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('info');
    
    
        const productInfoDiv = document.createElement('div');
    
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productFigure = document.createElement('figure');
        const imgAddToCar = document.createElement('img');
        imgAddToCar.setAttribute('src', './icons/addtocar.png');

        
        productFigure.appendChild(imgAddToCar);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);