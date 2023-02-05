const MenuE = document.querySelector(".navbar-email");
const MenuMobile = document.querySelector(".menu");
const DesktopMenu = document.querySelector(".desktop-menu");
const MobileMenu = document.querySelector(".mobile-menu");
const MenuCarIcon= document.querySelector('.navbar-shopping-cart');
const asideCar = document.querySelector('.product-detail');
const CardsContainer = document.querySelector('.cards-container')

MenuE.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    let isasideCarClosed= asideCar.classList.contains('inactive');
    if(!isasideCarClosed){
        asideCar.classList.add('inactive');
    } 
    DesktopMenu.classList.toggle('inactive')
}

MenuMobile.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    let isasideCarClosed= asideCar.classList.contains('inactive');

    if(!isasideCarClosed){
        asideCar.classList.add('inactive');
    } 
    MobileMenu.classList.toggle('inactive');

}

MenuCarIcon.addEventListener('click', toggleMenuCarIcon);

function toggleMenuCarIcon() {

    MobileMenu.classList.add('inactive');
    DesktopMenu.classList.add('inactive');

    asideCar.classList.toggle('inactive');
}

const ProductoList = [];

ProductoList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

ProductoList.push({
    name: 'Tv',
    price: 350,
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

ProductoList.push({
    name: 'Pc',
    price: 450,
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

ProductoList.push({
    name: 'Phone',
    price: 500,
    image: 'https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function ProductsRenders(arr) {
    for (product of arr){
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        let img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        let productInfoDiv = document.createElement('div');
    
        let productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
        let productName = document.createElement('p');
        productName.innerText=  product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        let productFigure = document.createElement('figure');
        let ImageCard = document.createElement('img');
        ImageCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(ImageCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(img);
        productCard.append(productInfo);
    
        CardsContainer.appendChild(productCard);
    
    }
}

ProductsRenders(ProductoList);