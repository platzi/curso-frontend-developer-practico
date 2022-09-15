const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu); 
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){  // para mostrar y ocultar menú
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productsList = [];
productsList.push({ 
    name: 'Bike',
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
});
productsList.push({
    name: 'Computadora',
    price: 620,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productsList.push({
    name: 'Televisor',
    price: 850,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> 
*/


for (product of productsList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    
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
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
}

