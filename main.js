const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const aside = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-window')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeproductDetailWindow);

function toggleDesktopMenu () {
    const isAsideclosed = aside.classList.contains('inactive');
        
   if (!isAsideclosed) {
    aside.classList.add('inactive')
    }

    closeproductDetailWindow();

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu () {
    const isAsideclosed = aside.classList.contains('inactive');
    
   if (!isAsideclosed) {
    aside.classList.add('inactive')
    }

    closeproductDetailWindow();

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside () {
    const isMobileMenuclosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive');
        
   if (!isMobileMenuclosed) {
    mobileMenu.classList.add('inactive')
    } else if (!isDesktopMenuclosed) {
        desktopMenu.classList.add('inactive')
        }
    closeproductDetailWindow();
    
    aside.classList.toggle('inactive')
}

function openproductdetailwindow() {
    const isAsideclosed = aside.classList.contains('inactive');
    const isMobileMenuclosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive');
    
   if (!isAsideclosed) {
    aside.classList.add('inactive')
    } else if (!isMobileMenuclosed) {
        mobileMenu.classList.add('inactive')
        } else if (!isDesktopMenuclosed) {
            desktopMenu.classList.add('inactive')
        }

    /*aside.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')*/

    productDetailContainer.classList.remove('inactive')
}

function closeproductDetailWindow() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'
});

function renderProducts(productos) { 
    let product
    for (product of productos) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product= {name, price, image} -> product.image
    const productImg = document.createElement('Img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openproductdetailwindow)

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
    console.log(productCard);

    cardsContainer.appendChild(productCard);
    
    }
    
}

renderProducts(productList);