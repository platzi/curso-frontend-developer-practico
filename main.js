const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShopCartIcon = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobilepMenu)
menuShopCartIcon.addEventListener('click', toggleShoppingCartepMenu)

function toggleDesktopMenu() {
    const isAsideClosed = asideMenu.classList.contains('inactive');

    if (!isAsideClosed) {
        asideMenu.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu() {
    const isAsideClosed = asideMenu.classList.contains('inactive');

    if (!isAsideClosed) {
        asideMenu.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartepMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    asideMenu.classList.toggle('inactive')
}

const productsList = [];
productsList.push({
    name:'Bike',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name:'Skateoard',
    price: 90,
    image: 'https://images.pexels.com/photos/3773656/pexels-photo-3773656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productsList.push({
    name:'Skates in Line',
    price: 110,
    image: 'https://images.pexels.com/photos/914996/pexels-photo-914996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

function renderProducts(arr) {
    for (product of arr) {
        // console.log(product.name + ' $' + product.price);
    
        const productCard = document.createElement('div');
        productCard.classList.add ('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const producctInfo = document.createElement('div');
        producctInfo.classList.add ('product-info');
    
        const producctInfoDiv = document.createElement('div');
        
        const producctPrice = document.createElement('p');
        producctPrice.innerText = '$' + product.price;
        const producctName = document.createElement('p');
        producctName.innerText = product.name;
    
        producctInfoDiv.appendChild(producctPrice);
        producctInfoDiv.appendChild(producctName);
    
        const producctInfoFigure = document.createElement('figure');
        const producctImgCart = document.createElement('img');
        producctImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        producctInfoFigure.appendChild(producctImgCart);
        
        producctInfo.appendChild(producctInfoDiv);
        producctInfo.appendChild(producctInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(producctInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productsList)