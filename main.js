const menuEmail = document.querySelector('.navbar-email');
const menuIcon = document.querySelector('.menu');
const carIconMain = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');
let isToggleElementMenu = false;

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

//! AGREGANDO PRODUCTOS

const productList = [];
productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    precio: 4000,
    imagen: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    precio: 6000,
    imagen: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    precio: 4000,
    imagen: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    precio: 6000,
    imagen: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    precio: 4000,
    imagen: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    precio: 6000,
    imagen: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

//funcion de maquetacion - lista de productos

function renderProducts(arr)
{
    for(product of arr)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openProductDetailAside);
    
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