//Variables
const navEmail = document.querySelector('.navbar-email');
const navMobile = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCar = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const producContainerCard = document.querySelector('.cards-container');
const producDetail = document.querySelector('.product-detail-info');
const producDetailClose = document.querySelector('.product-detail-info-close');

//Events
navEmail.addEventListener('click', toggleDesktopMenu);
navMobile.addEventListener('click', toggleMobileMenu);
menuShoppingCar.addEventListener('click', toggleMenuShoppingCar);
producDetailClose.addEventListener('click', closeProducDetail)

//Fuctions
function toggleDesktopMenu(){
    const isMenuShoppingCarClosed = aside.classList.contains('.inactive');
    const isproductDetailClosed = producDetail.classList.contains('.inactive');
    if(!isMenuShoppingCarClosed)
        {
            aside.classList.add("inactive");
        }
    if(!isproductDetailClosed)
        {
            producDetail.classList.add("inactive");
        }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isMenuShoppingCarClosed = aside.classList.contains('.inactive');
    const isproductDetailClosed = producDetail.classList.contains('.inactive');
    if(!isMenuShoppingCarClosed)
        {
            aside.classList.add("inactive");
        }
    if(!isproductDetailClosed)
        {
            producDetail.classList.add("inactive");
        }
    mobileMenu.classList.toggle("inactive");
}

function toggleMenuShoppingCar() {
    const isMenuMoibileClosed = mobileMenu.classList.contains('.inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('.inactive');
    const isproductDetailClosed = producDetail.classList.contains('.inactive');
    if(!isMenuMoibileClosed)
        {
            mobileMenu.classList.add("inactive");
        }
    if(!isDesktopMenuClosed)
        {
            desktopMenu.classList.add("inactive");
        }
    if(!isproductDetailClosed)
        {
            producDetail.classList.add("inactive");
        }
    aside.classList.toggle("inactive");
}

function openProductDetail(){
    producDetail.classList.remove('inactive');
    const isMenuShoppingCarClosed = aside.classList.contains('.inactive');
    const isMenuMoibileClosed = mobileMenu.classList.contains('.inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('.inactive');
    const idImage = Number(this.getAttribute('data-id'));
    const imgProductDetail = producDetail.querySelector('.product-inf-img');
    const priceProductDetail = producDetail.querySelector('.price');
    const nameProductDetail = producDetail.querySelector('.name');
    const decriptionProductDetail = producDetail.querySelector('.description');
    productsList.forEach(function (i){
        if(idImage == i.id) {
            imgProductDetail.setAttribute('src', i.image);
            priceProductDetail.innerText = `$ ${i.price}`;
            nameProductDetail.innerText = i.name;
            decriptionProductDetail.innerText = i.description;
        }
        
    });
    if(!isMenuMoibileClosed)
        {
            mobileMenu.classList.add("inactive");
        }
    if(!isDesktopMenuClosed)
        {
            desktopMenu.classList.add("inactive");
        }
    if(!isMenuShoppingCarClosed)
        {
            aside.classList.add("inactive");
        }
}

function closeProducDetail(){
    producDetail.classList.add('inactive');
}

const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Bike, With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
    id: 1001
});
productsList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://exitocol.vtexassets.com/arquivos/ids/16228089/Televisor-XIAOMI-43-Pulgadas-Uhd-4K-Smart-Tv-Televisor-Xiaomi-43-P1-4K-UHD-LED-3220004_c.jpg?v=638089789301370000',
    description: 'Pantalla, With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
    id: 1002
});
productsList.push({
    name: 'PC',
    price: 520,
    image: 'https://www.movilnet-e.com.ve/wp-content/uploads/2021/10/Componentes-PC-Gamer.jpg',
    description: 'PC, With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
    id: 1003
});

function renderProducts(arr) {
    for (product of arr){ 
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgCard = document.createElement('img');
        imgCard.setAttribute('src', product.image);
        imgCard.setAttribute('data-id', product.id);
        imgCard.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productContentInfo = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = `$ ${product.price}`;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
        const productInfoFigure = document.createElement('figure');
        const productInfoAddCar = document.createElement('img');
        productInfoAddCar.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoAddCar);
        productContentInfo.appendChild(productInfoPrice);
        productContentInfo.appendChild(productInfoName);
        productInfo.appendChild(productContentInfo);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(imgCard);
        productCard.appendChild(productInfo);
        producContainerCard.appendChild(productCard);
    }
}

renderProducts(productsList);


/// iteracion de elemento por elemento de un array
// for (product of productsList){ 
//     console.log(product.name);
// }
/// iteracion de elemento por elemento de un array para realizar un conteo de su tamaño
// for (product in productsList){ 
//     console.log(product);
// }



//contador de digitos numericos
// function contador(numero) {
//     let digitos = 0; 
//     while ( numero > 0 ){
//         numero = (Math.trunc(numero/10));
//         digitos++;
//     }
//     console.log(digitos);
// }