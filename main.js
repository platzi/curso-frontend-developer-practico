const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const mobilMenu= document.querySelector('.mobile-menu');
const aside= document.querySelector('.product-detail');
const cardsContainer= document.querySelector('.cards-container');
const productDetailSecond = document.querySelector('.product-detail-second');
const productDetailCloseIcon = document.querySelector('.product-detail-close-second');
const productDetailCloseIconThird = document.querySelector('.product-detail-close-third');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function closeProductDetailAside () {
        productDetailSecond.classList.add('inactive');

}


function viewDetail () {
       productDetailSecond.classList.remove('inactive');
       mobilMenu.classList.add('inactive');
       aside.classList.add('inactive');
       desktopMenu.classList.add('inactive');

}

function toggleDesktopMenu(){
        const isAsideClosed = aside.classList.contains('inactive');
        const isProductDetailClosed=productDetailCloseIcon.classList.contains('inactive');
        if (!isAsideClosed || !isProductDetailClosed) {
                aside.classList.add('inactive');
                productDetailSecond.classList.add('inactive');
        }
            desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
        const isAsideClosed = aside.classList.contains('inactive');
        const isProductDetailClosed=productDetailCloseIcon.classList.contains('inactive');
        if (!isAsideClosed || !isProductDetailClosed) {
                aside.classList.add('inactive');
                productDetailSecond.classList.add('inactive');
        }
        mobilMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
        const isMobileMenuClosed = mobilMenu.classList.contains('inactive');
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
        const isProductDetailClosed=productDetailCloseIcon.classList.contains('inactive');

        if (!isMobileMenuClosed || !isDesktopMenuClosed ||!isProductDetailClosed) {
             mobilMenu.classList.add('inactive');
             desktopMenu.classList.add('inactive')
             productDetailSecond.classList.add('inactive');   
        }
        aside.classList.toggle('inactive')
}



const productList=[];

productList.push({
        name: 'bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
        name: 'tv',
        price: 220,
        image: 'https://media-www.canadiantire.ca/product/living/electronics/home-entertainment-systems/3999846/skyworth-55-4k-android-tv-b73d2882-4b4d-4451-8ac3-2cdbf1b79fda.png'
});

productList.push({
        name: 'pc',
        price: 320,
        image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE55U7F'
});

for (product of productList) {
    const productCard = document.createElement('div'); 
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv= document.createElement('div');

    const productPrice= document.createElement('p');
    productPrice.innerText='$' + product.price;

    const productName= document.createElement('p');
    productName.innerText=product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productImg.addEventListener('click', viewDetail);
    
    
    const productInfoFigure= document.createElement('figure');

    const productImgCart= document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)
}