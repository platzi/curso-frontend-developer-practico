const menuEmail= document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click',toggleMobileMenu);
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }


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
});
productList.push({
    name: 'Laptop',
    price: 980,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

const productDetailContainer=document.querySelector('#productDetail');
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}

const productDetailCloseIcon=document.querySelector('.product-detail-close');
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


function renderProduct(arr){
for(product of arr){
    //product = {name, price e image} ->product.image
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside);



    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv=document.createElement('div');
        const productPrice=document.createElement('p');    
        productPrice.innerText='$'+product.price;
        const productName=document.createElement('p');
        productName.innerText= product.name;

        const productInfoFigure=document.createElement('figure');
        const figureImg=document.createElement('img');
        figureImg.setAttribute('src','./icons/bt_add_to_cart.svg');        

    productInfoFigure.appendChild(figureImg);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
        
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.appendChild(productCard);

    }
}

renderProduct(productList);
