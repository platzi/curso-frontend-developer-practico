const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const asideProductDetail =document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){ 
    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideProductDetailClosed){
        asideProductDetail.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideProductDetailClosed){
        asideProductDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");

}

function toggleCarritoAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    asideProductDetail.classList.toggle("inactive");
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
    
            const ProductImg = document.createElement('img');
            ProductImg.setAttribute('src',product.image);
            // product = {name , price, image} ->product.image 
    
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
    
        productInfoFigure.appendChild(productImgCard);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productInfo);
        productCard.appendChild(ProductImg);
        cardContainer.appendChild(productCard)
    }
}

renderProducts(productList)
