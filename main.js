//Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

//Mobile
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Desktop
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);

function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive')
}

//Mobile
menuBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: '220',
    image: 'https://picsum.photos/250/250',
});
productList.push({
    name: 'Computadora',
    price: '420',
    image: 'https://picsum.photos/250/251',
});
productList.push({
    name: 'Pantalla',
    price: '220',
    image: 'https://picsum.photos/250/249',
});
productList.push({
    name: 'Computadora',
    price: '420',
    image: 'https://picsum.photos/250/252',
});
productList.push({
    name: 'Pantalla',
    price: '220',
    image: 'https://picsum.photos/251/250',
});
productList.push({
    name: 'Computadora',
    price: '420',
    image: 'https://picsum.photos/251/251',
});
productList.push({
    name: 'Pantalla',
    price: '220',
    image: 'https://picsum.photos/249/250',
});
productList.push({
    name: 'Computadora',
    price: '420',
    image: 'https://picsum.photos/249/249',
});

function renderProducts(array) {
    for (product of array) {
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
       
       const productInfoFigure = document.createElement('figure');
       
       const productImgCart = document.createElement('img');
       productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
       productInfoFigure.appendChild(productImgCart);
       
       productInfoDiv.append(productPrice, productName);
    
       productInfo.append(productInfoDiv, productInfoFigure);
    
       productCard.append(productImg ,productInfo);
    
       cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);