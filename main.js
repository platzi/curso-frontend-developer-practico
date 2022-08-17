const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const shopingCartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

const menuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopingCartMenu = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleMenu);
menuMobile.addEventListener('click', toggleMenu);
shopingCartIcon.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    if(event.target.className == 'navbar-email'){
        deskTopMenu.classList.toggle('inactive');
        shopingCartMenu.classList.add('inactive');
    }else if (event.target.className == 'menu'){
        mobileMenu.classList.toggle('inactive');
        shopingCartMenu.classList.add('inactive');
    }else{
        shopingCartMenu.classList.toggle('inactive');
        mobileMenu.classList.add('inactive');
        deskTopMenu.classList.add('inactive');
    }
}

function setProducts(productList){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDetail = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const addButtonFigure = document.createElement('figure');
        const addButtonImage = document.createElement('img');
        addButtonImage.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        addButtonFigure.append(addButtonImage);
        productInfoDetail.append(productPrice,productName);
        productInfo.append(productInfoDetail,addButtonFigure);
        
        
        productCard.append(img,productInfo);
        cardsContainer.append(productCard);
    }
}

let productList = [];
productList.push({
    name : 'Bike',
    price : '120.00',
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name : 'TV',
    price : '1200.00',
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name : 'Computadora',
    price : '12000.00',
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

setProducts(productList);
