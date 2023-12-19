const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')

const productDetailContainer =document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', togglemobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClose= shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
};

function togglemobileMenu(){
    const isAsideClose= mobileMenu.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside('inactive')

    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside(){
    const isMobileMenuClose= mobileMenu.classList.contains('inactive');
    const isDesktClose = desktopMenu.classList.contains('inactive')
    const isProductDetailclosed = productDetailContainer.classList.contains('inactive')

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktClose){
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailclosed){
        productDetailContainer.classList.add('inactive');

    }

    shoppingCartContainer.classList.toggle('inactive');
};

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    
    productDetailContainer.classList.remove('inactive')
    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList =[];
productList.push({
    name: 'bike',
    price:'120',
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name :'phone',
    price: '500',
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "laptop",
    price:"800",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "watch",
    price: "300",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})


function renderProducts(arr){

    for (product  of arr){

        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price,image}    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.img);
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure=document.createElement('figure');
        const productImgCard=document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    };
}

renderProducts(productList);