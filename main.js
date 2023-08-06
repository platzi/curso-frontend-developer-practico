const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}

const productList = [];
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Tv',
    price: 250,
    image: 'https://images.pexels.com/photos/5490302/pexels-photo-5490302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Nintendo',
    price: 180,
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Guitar',
    price: 80,
    image: 'https://images.pexels.com/photos/3714523/pexels-photo-3714523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Grill',
    price: 400,
    image: 'https://images.pexels.com/photos/8522752/pexels-photo-8522752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Laptop',
    price: 600,
    image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Camera',
    price: 100,
    image: 'https://images.pexels.com/photos/16130228/pexels-photo-16130228/free-photo-of-camara-libros-vintage-vista-de-alto-angulo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

for (product of productList){
    const productCard = document.createElement('div');
     productCard.classList.add('product-card');

     const productImg = document.createElement('img');
     productImg.setAttribute('src', product.image);
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