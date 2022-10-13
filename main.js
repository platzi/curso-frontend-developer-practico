document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM se cargado completamente')
});

const navBarEmail = document.querySelector('.navbar-email');

const hamburMenuIcon = document.querySelector('.menu');

const carritoIcon = document.querySelector('.navbar-shopping-cart');

const cardsContainer = document.querySelector('.cards-container')



// Menus
const menuMobile = document.querySelector('.mobile-menu ');
const aside = document.querySelector('.product-detail');
const desktopMenu = document.querySelector('.desktop-menu')


navBarEmail.addEventListener('click', toggleDestopMenu );
hamburMenuIcon.addEventListener('click', toggleMobileMenu );
carritoIcon.addEventListener('click', toggleMenuCarrito);

//CARRITO DE COMPRAS

function toggleMenuCarrito(){
    const isMobileMenuClose  = menuMobile.classList.contains('inactive');
    

    if(!isMobileMenuClose){
        menuMobile.classList.add('inactive');
    }

    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
   

};

//MENU DE ESCRITORIO
function toggleDestopMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive')
    }
    
    
    desktopMenu.classList.toggle('inactive');

};

//MENU MOBILE

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive')
    }
    
    menuMobile.classList.toggle('inactive');
    
};

const productList = [];
productList.push({
    
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
});

productList.push({
    name: 'TvLED',
    price: 220,
    image: 'https://drive.google.com/uc?id=19l9apui5pmSENS7wx8ZYIPwmehbp2l6M'
});

productList.push({
    name: 'Moto Honda CB1 125',
    price: 420,
    image: 'https://drive.google.com/uc?id=15GpeB1YHHDWSgLGTCUWvgeE_-U7Y68tS'
});

{/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img .carritoImg src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
      </div> */}

for(product of productList){

    //Product-Card
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const ProductImage = document.createElement('img')
    ProductImage.setAttribute('src', product.image )

    //Product-info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    //Div sin clase
    const productDivSolo = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    //Figure
    const productFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
    //figure
    productFigure.appendChild(productFigureImg);
    //div solo
    productDivSolo.appendChild(productPrice);
    productDivSolo.appendChild(productName);
    //INFO
    productInfo.appendChild(productDivSolo);
    productInfo.appendChild(productFigure);
    //PRODUCT CARD
    productCard.appendChild(ProductImage);
    productCard.appendChild(productInfo);

    
   
    cardsContainer.appendChild(productCard);
}