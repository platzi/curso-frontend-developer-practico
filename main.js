
const menuEmail   = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

const productList = [];

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    // toggle quita o pone la clase, dependiendo de si la tiene o no
    desktopMenu.classList.toggle('inactive');    
    aside.classList.add('inactive');   
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');  
    aside.classList.add('inactive');  
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for( product of productList ){
    // Se crea el contenedor padre
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    cardContainer.appendChild(productCard);

    // Se crea la etiqueta img y se le añade el src
    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', product.image );
    productCard.appendChild(ProductImg);

    // Se crea el contenedor hijo
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productCard.appendChild(productInfo);

    // Se crean los demás elementos de la card y se agregan los elementos a la card container
    const childDivInfo = document.createElement('div');
    productInfo.appendChild(childDivInfo);

    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+product.price;
    childDivInfo.appendChild(productPrice);

    const productName = document.createElement('p');
    productName.innerText = product.name;
    childDivInfo.appendChild(productName);

    const productFigure = document.createElement('figure');
    productInfo.appendChild(productFigure);

    const imgCar = document.createElement('img'); 
    imgCar.setAttribute('src','./icons/bt_add_to_cart.svg' );
    productFigure.appendChild(imgCar);    

}