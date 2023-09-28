const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamDesktop = document.querySelector('.menu');
const desktopMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const CardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamDesktop.addEventListener('click', tooggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
     }
    desktopMenu.classList.toggle('inactive');
}

function tooggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
     }

     closeProductDetailAside();

    desktopMobile.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClosed = desktopMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProducDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    
    if(!isMobileMenuClosed) {
       desktopMobile.classList.add('inactive');
    }

    if(!isProducDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
   shoppingCartContainer.classList.add('inactive');
   productDetailContainer.classList.remove('inactive');
};

function closeProductDetailAside() {
   productDetailContainer.classList.add('inactive');
};


const productList = [];
productList.push({
    name:"Bike",
    price: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:"Pantalla",
    price: 300,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:"Computadora",
    price: 620,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:"Laptop",
    price: 720,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:"Celular",
    price: 800,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:"Pelota",
    price: 150,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProduct(array) {
    for(product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const Productimg = document.createElement('img');
        Productimg.setAttribute('src',product.imagen);
        Productimg.addEventListener('click',openProductDetailAside);
    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
        const productInfoDiv=document.createElement('div');
        const productInfoPrice =document.createElement('p');
        productInfoPrice.innerText = "$" + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
        const productInfofigure = document.createElement('figure');
        const productFigureimage = document.createElement('img');
        productFigureimage.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfofigure.appendChild(productFigureimage);
    
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(Productimg);
        productCard.appendChild(productInfo);
    
        CardContainer.appendChild(productCard);
    }
}

renderProduct(productList);


