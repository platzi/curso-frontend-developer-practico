const menuEmail = document.querySelector('.navbar-email');
const menuIcon = document.querySelector('.menu');
const carIconMain = document.querySelector('.navbar-shopping-cart');
const shopContainerCloseIcon = document.querySelector(".close-shop-container");
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');
let isToggleElementMenu = false;

// funciones para abrir y cerrar los contenedores

function toggleElementMenu(element)
{
    isToggleElementMenu = true;
    if(element == shoppingCartContainer)
    {
        shoppingCartContainer.classList.toggle('inactive');
        desktopMenu.classList.add('inactive')
        mobileMenu.classList.add('inactive')
    }else{
        element.classList.toggle('inactive');
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
}

function openProductDetailAside()
{
    productDetailContainer.classList.remove('inactive');
    if(isToggleElementMenu)
    {
        desktopMenu.classList.add('inactive')
        mobileMenu.classList.add('inactive')
        shoppingCartContainer.classList.add('inactive');
    }
}
function closeProductDetailAside()
{
    productDetailContainer.classList.add('inactive');
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
menuEmail.addEventListener('click', () => toggleElementMenu(desktopMenu));
menuIcon.addEventListener('click', () => toggleElementMenu(mobileMenu));
carIconMain.addEventListener('click', () => toggleElementMenu(shoppingCartContainer));
shopContainerCloseIcon.addEventListener('click', () =>toggleElementMenu(shoppingCartContainer));

//! agregando productos

const productList = [];
productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'La bicicleta es de color negro, cuenta con 20 cambios de velocidad, es completamente nuevo'
});
productList.push({
    name: 'Tv',
    precio: 4000,
    imagen: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La tv es de color gris, es de marca X, una de las marcas mas antiguas'
});
productList.push({
    name: 'Laptop',
    precio: 6000,
    imagen: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La laptop es de color gris, es una buena opción para quienes les gusta programar, para quienes aman el código'
});
productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'La bicicleta es de color negro, cuenta con 20 cambios de velocidad, es completamente nuevo'
});
productList.push({
    name: 'Tv',
    precio: 4000,
    imagen: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La tv es de color gris, es de marca X, una de las marcas mas antiguas'
});
productList.push({
    name: 'Laptop',
    precio: 6000,
    imagen: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La laptop es de color gris, es una buena opción para quienes les gusta programar, para quienes aman el código'
});
productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'La bicicleta es de color negro, cuenta con 20 cambios de velocidad, es completamente nuevo'
});
productList.push({
    name: 'Tv',
    precio: 4000,
    imagen: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La tv es de color gris, es de marca X, una de las marcas mas antiguas'
});
productList.push({
    name: 'Laptop',
    precio: 6000,
    imagen: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'La laptop es de color gris, es una buena opción para quienes les gusta programar, para quienes aman el código'
});

//funcion que manda los datos del producto a la ventana de detalles

const detailsProduct = product => {
    openProductDetailAside();

    const detailImage = document.querySelector('#product-detail>img');
    const detailPrice = document.querySelector('.product-info p:nth-child(1)');
    const detailName = document.querySelector('.product-info p:nth-child(2)');
    const detailDescription = document.querySelector(
        '.product-info p:nth-child(3)'
    );

    detailImage.setAttribute('src', product.imagen);
    detailPrice.innerText = `$${product.precio}`;
    detailName.innerText = product.name;
    detailDescription.innerText = product.description;
};

//funcion de maquetacion - listar productos al

function renderProducts(arr)
{
    for(let product of arr)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.setAttribute('alt', product.name);
        
        productImg.addEventListener('click', function(){
            detailsProduct(product);
        });
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.precio}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
}


renderProducts(productList);