const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.detalles-close')
const mobileMenu = document.querySelector('.mobile-menu');
const carritoAside = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.detalles');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeCarritoAside);

function toggleDesktopMenu() {
    const isCarritoAsideClosed = carritoAside.classList.contains('inactive');

    if(!isCarritoAsideClosed){
        carritoAside.classList.add('inactive');
    }
    
    closeCarritoAside ()
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCarritoAsideClosed = carritoAside.classList.contains('inactive');

    if (!isCarritoAsideClosed){
        carritoAside.classList.add('inactive');
    }
    closeCarritoAside ()
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');   
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }

    carritoAside.classList.toggle('inactive'); 

}   

function openProductDetailCarritoAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    carritoAside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeCarritoAside () {
    productDetailContainer.classList.add('inactive');
}

const productsList = [];
productsList.push({
    name: 'Rosa esperanza',
    price:  120,
    image: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'
});

productsList.push({
    name: 'Rosa pasión',
    price:  240,
    image: 'https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_960_720.jpg'
});
productsList.push({
    name: 'Rosa imaginación',
    price:  360,
    image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg'
});
productsList.push({
    name: 'Rosa terciopelo',
    price:  360,
    image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productsList.push({
    name: 'Rosa pálida',
    price:  360,
    image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productsList.push({
    name: 'Girasol',
    price:  360,
    image: 'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productsList.push({
    name: 'Violeta',
    price:  360,
    image: 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1600'
});
productsList.push({
    name: 'Orquidea',
    price:  360,
    image: 'https://images.pexels.com/photos/40744/orchid-flower-plant-exotic-40744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});



function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailCarritoAside);
     
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

renderProducts(productsList);
