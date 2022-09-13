const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu() {
    const isAsaidClosed = aside.classList.contains('inactive');
    if (!isAsaidClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsaidClosed = aside.classList.contains('inactive');

    if (!isAsaidClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');    
    
  }
        aside.classList.toggle('inactive');
    

}



const productList = [];
productList.push({
    name: 'FAJC 5832',
    precio: 24,
    image: 'https://lh3.googleusercontent.com/4P9eskycIJHwokZ6p_0420LNjHGImMqxveKz2uHKjFnOkb2t2cOozzlr9KKxH05dQW7RH0fIDiZ04lLQ-5AWJk0kgkKn_4OVSOLf=w600',   
})
productList.push({
    name: 'FAJC 5833',
    precio: 10,
    image: 'https://lh3.googleusercontent.com/8II5BvLgWgC9C4EDomKV_f61zm1bvqf21173ydEFagWhojvUun8WTXJQ8Iq_-oewPqNzknGIiDpLcil3_sneeOF-RD5r5OaK-aaM=w600',   
})
productList.push({
    name: 'FAJC 5834',
    precio: 40,
    image: 'https://lh3.googleusercontent.com/59TM6D7ZjAIF_32eLG73HiX3yrACEo7ZbMTVIK5_F5sJ2DXzhbY2EB9AKgZEcERTBkqldp2-yIVT42myeNLscRp-su4YCL0FM6V1=w600',   
})
productList.push({
    name: 'FAJC 5836',
    precio: 120,
    image: 'https://lh3.googleusercontent.com/9vnsILutDDoPO6z0T06nLlaxNRgfI12Ea-FPDxMsap5XYTeehaBjNG9VUf7An5IsdXtS6vBH-R28Y0NQqslLP2nsSCYqJCe0UYnNTw=w600',   
})
productList.push({
    name: 'FAJC 5837',
    precio: 40,
    image: 'https://lh3.googleusercontent.com/oprzLI6Ffxi0eSWRoIcy5we4NB3aJ8CiFuzZBfRjA_mkEONyC_aoG32eHZ6TQb--I6bR9V9J-lp2YSgSscUc0MoXXh_lOFJyYpAM=w600',   
})
productList.push({
    name: 'FAJC 5839',
    precio: 16,
    image: 'https://lh3.googleusercontent.com/L4YR1Fq2kchlMJUinudpqgHF8X78TYowFyyjIlyfhop4klqWxPx5gMelyCoSR8lV1AX9sF2x_Q8hb7SQMPhHGpso9aQ81B6udSaimA=w600',   
})

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const porductInfoFigure = document.createElement('figure');
        const porductImgCart = document.createElement('img');
        porductImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        porductInfoFigure.appendChild(porductImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(porductInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);