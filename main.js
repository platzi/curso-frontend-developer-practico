const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer =document.querySelector('#shoppingCardContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');



menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){ 
    const isShoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');

    if(!isShoppingCardContainerClosed){
        shoppingCardContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
    closeProductDetailAside();
}

function toggleMobileMenu(){
    const isShoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');

    if(!isShoppingCardContainerClosed){
        shoppingCardContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
    closeProductDetailAside();
}

function toggleCarritoAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    } else if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCardContainer.classList.toggle("inactive");
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCardContainer.classList.add('inactive');
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");


}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList =[];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Teclado',
    price: 80,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Mouse',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Case',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(array){

    for (product of array){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

            // product = {name , price, image} ->product.image
            const ProductImg = document.createElement('img');
            ProductImg.setAttribute('src',product.image);
            ProductImg.addEventListener('click',openProductDetailAside);
             
    
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
     
                const productInfoDiv = document.createElement('div');
       
                    const productPrice = document.createElement('p');
                    productPrice.innerText = '$' + product.price;
                    const productName = document.createElement('p');
                    productName.innerText = product.name;
    
                const productInfoFigure = document.createElement('figure');
        
                    const productImgCard = document.createElement('img');
                    productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        
        
        cardContainer.appendChild(productCard);
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure);
        productInfoFigure.appendChild(productImgCard);  
        
    }
}

renderProducts(productList)
