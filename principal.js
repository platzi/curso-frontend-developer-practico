const emailMenu = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const  menuShoppingCar= document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container')

emailMenu.addEventListener('click', toggleDescktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCar.addEventListener('click', toggleCarAside);


function toggleDescktopMenu() {
    const shoppingMenuClosed = shoppingCar.classList.contains('inactive');
    
    if (!shoppingMenuClosed) {
        shoppingCar.classList.add('inactive');
    }

    descktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const shoppingMenuClosed = shoppingCar.classList.contains('inactive');
    
    if (!shoppingMenuClosed) {
        shoppingCar.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    // const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    // if (!mobileMenuClosed) {
    //     mobileMenu.classList.add('inactive');
    // }

    // shoppingCar.classList.toggle('inactive');

    const shoppingMenuClosed = shoppingCar.classList.contains('inactive');

    if (shoppingMenuClosed) {
        mobileMenu.classList.add('inactive');
        descktopMenu.classList.add('inactive')
    }

    shoppingCar.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computadora',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computadora',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

{/* <div class="product-card">
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
</div> */}

function renderProducts(arr) {
    for (product of arr) {
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
        const productImgCart = document.createElement('img')
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