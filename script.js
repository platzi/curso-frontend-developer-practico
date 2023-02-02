const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('#productDetail');
const cambioImgPorProducto = document.getElementById('productDetail');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);





function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
        mobileMenu.classList.toggle('inactive');

        closeProductDetailAside()
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); 


    const isProductDetailsClosed = productDetails.classList.contains('inactive');

    if (!isProductDetailsClosed) {
        productDetails.classList.add('inactive');
 
    }
}

function openProductDetailAside() {
    aside.classList.add('inactive');
    productDetails.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetails.classList.add('inactive');
}


function cambiarImgPorProducto(productIndex){
    cleanProductDetailAside();

    const selectedProduct = productList[productIndex];

    const closeButtonContainer = document.createElement('div');
    closeButtonContainer.classList.add('product-details-close');
    closeButtonContainer.setAttribute('onclick', 'closeProductDetailAside()');

    const closeButtonImage = document.createElement('img');
    closeButtonImage.setAttribute('src','./icons/icon_close.png');

    closeButtonContainer.appendChild(closeButtonImage);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+selectedProduct.price;

    const productName = document.createElement('p');
    productName.innerText = selectedProduct.name;

    const productDescription = document.createElement('p');
    productDescription.innerText = selectedProduct.description;

    const productImage = document.createElement('img');
    productImage.setAttribute('src', selectedProduct.image);

    const addToCardButton = document.createElement('button');
    addToCardButton.classList.add('add-to-cart-button');
    addToCardButton.classList.add('primary-button');
    
    const iconButton = document.createElement('img');
    iconButton.setAttribute('src','./icons/bt_add_to_cart.svg');

    addToCardButton.appendChild(iconButton);
    addToCardButton.innerText ='Add to Cart';

    cambioImgPorProducto.appendChild(closeButtonContainer)
    cambioImgPorProducto.appendChild(productImage);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);
    cambioImgPorProducto.appendChild(productInfo);
    cambioImgPorProducto.appendChild(addToCardButton);

}

function cleanProductDetailAside() {
    cambioImgPorProducto.innerHTML = '';
}



const productList = [];
productList.push({
    name: 'Marco de madera MOD. Antell',
    price: 490,
    description: 'texto',
    image:"https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Sillon MOD. Tavari Color Gris',
    price: 12100,
    image:"https://images.pexels.com/photos/6707630/pexels-photo-6707630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Florero decorativo MOD. Mooon Stone ',
    price: 634,
    image:'https://images.pexels.com/photos/8251592/pexels-photo-8251592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"',
});
productList.push({
    name: 'Perchero MOD. Sierra',
    price: 900,
    image:"https://images.pexels.com/photos/4210317/pexels-photo-4210317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Busto MOD. Asia paradisso',
    price: 1400,
    image:"https://images.pexels.com/photos/4203101/pexels-photo-4203101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Sillon MOD. Alessandrina Color Esmeralda ',
    price: 16340,
    image:"https://images.pexels.com/photos/6373660/pexels-photo-6373660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Candelero De Vidrio Blanco Con Marco De Latón MOD. Queensland',
    price: 540,
    image:"https://images.pexels.com/photos/6186511/pexels-photo-6186511.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productList.push({
    name: 'Sillon MOD. Klein',
    price: 11400,
    image:"https://images.pexels.com/photos/3965512/pexels-photo-3965512.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productList.push({
    name: 'Juego silla y mesa de madera strell MOD. Luxith ',
    price: 10100,
    image:"https://images.pexels.com/photos/6368951/pexels-photo-6368951.jpeg",
});
productList.push({
    name: 'Sillon Gris MOD. Especially ',
    price: 21900,
    image:"https://images.pexels.com/photos/4846432/pexels-photo-4846432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Mesa de centro MOD. Marmolee ',
    price: 1600,
    image:"https://images.pexels.com/photos/6621078/pexels-photo-6621078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Sillon doble MOD. SkyLove ',
    price: 20000,
    image:"https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Sillon individual MOD. SunKiss',
    price: 11540,
    image:"https://images.pexels.com/photos/5490306/pexels-photo-5490306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Marco Fotografico MOD. Klints',
    price: 900,
    image:"https://images.pexels.com/photos/7318973/pexels-photo-7318973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Biombo de madera Gris y Negro MOD. Lilith ',
    price: 4000,
    image:"https://images.pexels.com/photos/6186514/pexels-photo-6186514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Juego de Cuadro y banca MOD. Magic Woods ',
    price: 3900,
    image:"https://images.pexels.com/photos/4993081/pexels-photo-4993081.jpeg",
});
productList.push({
    name: 'Espejo Grande MOD. Sheeld ',
    price: 4200,
    image:"https://images.pexels.com/photos/8888147/pexels-photo-8888147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: 'Lampara MOD. Quest ',
    price: 2000,
    image:"https://images.pexels.com/photos/12908581/pexels-photo-12908581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});



function renderProducts(arr) {
    for (const [index,product] of arr.entries()) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('onclick', 'cambiarImgPorProducto('+index+')');
     
         //PRODUCT = {NAME, PRICE, IMAGE} --> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
     
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
     
        const productInfoFigure = document.createElement('figure');
         const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCard);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardContainer.appendChild(productCard);
     }
}
renderProducts(productList);