//Aparece y desaparece el menu del email
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    //Está el aside cerrado?
    const isasideclosed = aside.classList.contains('inactive');

    //Si el aside no está cerrado, hágalo
    if (!isasideclosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//Aparece y desaparece el menu de la izquierda
const HamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

HamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    //Esta constante me dice cuándo el aside está abierto, y cuándo está cerrado (true=cerrado, false=abierto)
    const isasideclosed = aside.classList.contains('inactive');
    const isproductInfoclosed = productInfo.classList.contains('inactive');

    //Si el aside no está cerrado, hágalo
    if (!isasideclosed || !isproductInfoclosed) {
        aside.classList.add('inactive');
        productInfo.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

//Aparece y desaparece el carro de compras
const CarroIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

CarroIcon.addEventListener('click', toggleCarro);

function toggleCarro() {
    //Esta constante me dice cuándo el mobileMenu está abierto, y cuándo está cerrado
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopclosed = desktopMenu.classList.contains('inactive');
    const isproductInfoclosed = productInfo.classList.contains('inactive');

    //Si el menu mobile o el desktopmenu no ésta cerrado, hágalo
    if (!ismobileMenuClosed || !isdesktopclosed || !isproductInfoclosed)  {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productInfo.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'PC',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


const cardsContainer = document.querySelector('.cards-container')

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        //el sgte EventListener se utiliza para luego abrir el productinfo
        productCard.addEventListener('click', openproductInfo);
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        // product ={name, price, image} -> product.image
    
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
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);


const productInfo = document.querySelector('.product-detail-main');

//Función para cerrar manualmente productinfo desde el símbolo de close icon
const closeIcon = document.querySelector('.product-detail-close');

closeIcon.addEventListener('click', closeproductInfo);
function closeproductInfo(){
    productInfo.classList.add('inactive');
}

//función para abrir product info
function openproductInfo(){
    const isasideclosed = aside.classList.contains('inactive');
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isasideclosed || !ismobileMenuClosed){
        aside.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }

    productInfo.classList.remove('inactive');
}