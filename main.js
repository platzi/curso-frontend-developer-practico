const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".burger-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener('click', ()=> {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
});

menuIcon.addEventListener('click', ()=> {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    productDetailContainer.classList.add("inactive");

    mobileMenu.classList.toggle('inactive');
});

shoppingIcon.addEventListener('click', ()=> {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
});

productDetailCloseIcon.addEventListener("click", ()=> {
    productDetailContainer.classList.add("inactive");
});

const productList = [
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Screen',
        price: 550,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Computer',
        price: 1000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
];

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-list-item-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove("inactive");
}

renderProducts(productList);