const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const deskTopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const asideCard = document.querySelector('.product-detail-card');
const cardsContainer = document.querySelector('.cards-container');
const imagen = document.querySelector('#infoImages');
const priceProduct = document.querySelector('#price');
// const descriptionProduct = document.querySelector('#description');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAsite);

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    deskTopMenu.classList.toggle('inactive');

};

function toggleMobileMenu() {

    const isAsideClosed = aside.classList.contains('inactive'); 
     const isProductDetailCardClosed = asideCard.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    if(!isProductDetailCardClosed) {
        asideCard.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

};

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = deskTopMenu.classList.contains('inactive');
    const isProductDetailCardClosed = asideCard.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        deskTopMenu.classList.add('inactive');
    }

    if(!isProductDetailCardClosed) {
        asideCard.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
};

function openProductDetailCard(event) {
    asideCard.classList.remove('inactive');
    imagen.setAttribute('src', event.target.src);
    priceProduct.innerText = event.target.nextElementSibling.innerText;
    // descriptionProduct.innerText = event.target.nextElementSibling.innerText;
};

function closeProductDetailAsite() {

    const isAsideClosed = aside.classList.contains('inactive'); 

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    asideCard.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Tv also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Laptop can help you to increase your skills in Programation at Platzi.',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Tv also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Laptop can help you to increase your skills in Programation at Platzi.',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Tv also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Laptop can help you to increase your skills in Programation at Platzi.',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Tv also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Laptop can help you to increase your skills in Programation at Platzi.',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Tv also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Laptop can help you to increase your skills in Programation at Platzi.',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Tv also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Laptop can help you to increase your skills in Programation at Platzi.',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Tv also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Laptop can help you to increase your skills in Programation at Platzi.',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Tv also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'this Laptop can help you to increase your skills in Programation at Platzi.',
});




function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product = {name, price, image} -> product.image
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        imgProduct.setAttribute('id', 'imagen');
        imgProduct.addEventListener('click', openProductDetailCard);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name; 
        // const productDescription = document.createElement('p');
        // productDescription.innerText = product.description;  

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(imgFigure);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);

