const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productCardContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetailContainer');
const productDetailCloseButton=document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseButton.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
   
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    closeProductDetail();
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
   
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetail();
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
    closeProductDetail()
}

function openProductDetail() {
    const isProductDetailContainerOpen = productDetailContainer.classList.contains('inactive');
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (isProductDetailContainerOpen) {
        productDetailContainer.classList.remove('inactive');
    }
   
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    


    
}
function closeProductDetail() {
    const isProductDetailContainerOpen = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailContainerOpen) {
        productDetailContainer.classList.add('inactive');
    }    
}



const productList = [];
const productName=['Bike','Laptop','Xbox','Bike','Laptop','Xbox','Bike','Laptop','Xbox'];
const productPrice=['$120,00','$520,00','$1020,00','$120,00','$520,00','$1020,00','$120,00','$520,00','$1020,00'];

for (let index = 0; index < productName.length; index++) {
    productList.push({
        name:productName[index],
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price:productPrice[index]
    })
    
}

for(product of productList){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');
    const img=document.createElement('img');
    img.src=product.image;
    img.addEventListener('click',openProductDetail)
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv=document.createElement('div');
    const productPrice=document.createElement('p');
    productPrice.innerText=product.price;
    const productName=document.createElement('p');
    productName.innerText=product.name;
    const productInfoFigure=document.createElement('figure');
    const imgFigure=document.createElement('img');
    imgFigure.src='./icons/bt_add_to_cart.svg';
    
    productInfoFigure.appendChild(imgFigure);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    productCardContainer.appendChild(productCard);
}