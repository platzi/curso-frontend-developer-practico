const menuEmail = document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    
    //Cierra el shoppingCartContainer si esta activo
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    //Activa o desactiva el desktopMenu
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    //Cierra el shoppingCartContainer si esta activo
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

    //Activa o desactiva el mobileMenu
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    
    //Cierra mobileMenu si esta activo
    if(!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }

    //Cierra desktopMenu si esta activo
    if(!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }

    //Acitva o desactiva el shoppingCartContainer
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // product= {name, price, image} => product.image
    
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
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);