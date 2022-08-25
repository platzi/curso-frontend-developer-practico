const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
const menuHamIcon = document.querySelector('.menu'); 
const mobileMenu = document.querySelector('.mobile-menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarrito);
//***Funciones*********************************************************************** */
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!desktopMenu.classList.contains('inactive')) {
        shoppingCarContainer.classList.add('inactive');
    }
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    if (!mobileMenu.classList.contains('inactive')) {
        shoppingCarContainer.classList.add('inactive');
    }
    
}
function toggleCarrito() {
    
    if (!mobileMenu.classList.contains('inactive')) {
        shoppingCarContainer.classList.add('inactive');
        return;
    }
    if (!desktopMenu.classList.contains('inactive')) {
         shoppingCarContainer.classList.add('inactive');
        return;
    }
    shoppingCarContainer.classList.toggle('inactive');
    
}
function renderProducts(array) {

    for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

   


    const fig = document.createElement('figure');
    const imgFigure = document.createElement('img');
    imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    //COnstruyendo el HTML
    fig.appendChild(imgFigure);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(fig);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);

}
}

//Simulando la base de datos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Pantalla',
    price: 1200,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Laptop',
    price: 12500,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

renderProducts(productList);

