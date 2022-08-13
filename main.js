const navEmail = document.querySelector('.navbar-email');
const iconMenu = document.querySelector('.desktop-menu');
const iconCart = document.querySelector('.navbar-shopping-cart')

const navMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenuMobile);
iconCart.addEventListener('click', toggleShopping);

function toggleMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if(isAsideOpen) {
        aside.classList.add('inactive');
    }


    iconMenu.classList.toggle('inactive');
}

function toggleMenuMobile() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if(isAsideOpen) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShopping() {
   const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
   const isdestopMenuOpen = !iconMenu.classList.contains('inactive')
   
   if(isdestopMenuOpen) {
       iconMenu.classList.add('inactive');
   }

   if(isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
   }
   
   aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'pantalla',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'computador',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'pantalla',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
    name: 'computador',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src' , product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(ProductImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}


renderProducts(productList);