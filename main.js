const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileIconMenu = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuShoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const container = document.querySelector('.container');


menuEmail.addEventListener('click', toggleDesktopMenu);
mobileIconMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCartIcon.addEventListener('click', toggleShoppingCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    //const isMenuEmailClosed = menuEmail.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive'); 

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive'); 

    modal.className = "modal is-visuallyHidden";
    setTimeout(function() {
        container.className = "container is-blurred";
        modal.className = "modal";
    }, 100);
    container.parentElement.className = "modal-open";

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

    modal.className = "modal is-hidden is-visuallyHidden";
    container.className = "";
    container.className = "main-container";
    container.parentElement.className = "";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "modal is-hidden";
        modal.className = "";
        container.className = "main-container";
        container.parentElement.className = "";
        modal.classList.add('inactive');
    }
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Moto',
    price: 500,
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
});
productList.push({
    name: 'Computadora',
    price: 300,
    image: 'https://plus.unsplash.com/premium_photo-1687892170417-f9a11a402ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
});
productList.push({
    name: 'Monopatín',
    price: 258,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJR1KAN3KbLu1XisORQT5BDZx8W5OgjezD9_ik_fWNqoQ86nHCEgUR3SHne6LIg2aW0w&usqp=CAU',
});
productList.push({
    name: 'Triciclo',
    price: 800,
    image: 'https://http2.mlstatic.com/D_NQ_NP_915957-MLA40209647048_122019-O.webp',
});
productList.push({
    name: 'Auto',
    price: 3000,
    image: 'https://www.infobae.com/new-resizer/7WPn0J30BXBWcZ49ADBkpStQYNY=/arc-anglerfish-arc2-prod-infobae/public/NNC7TA7K2NG5HM2REZSAE244XE.jpg',
});

function renderProducts(array){
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        //productName.classList.add('product-name-card');
    
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
}

renderProducts(productList);