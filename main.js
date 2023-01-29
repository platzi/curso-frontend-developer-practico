const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const productDescription = document.querySelector('.product-description');
const productDescriptionClose = document.querySelector('.product-description-close');

navbar_email.addEventListener('click', navbar_email_click);
menuHamIcon.addEventListener('click', menu_ham_icon_click);
menuCarritoIcon.addEventListener('click', menu_carrito_icon_click);
productDescriptionClose.addEventListener('click', product_description_close_click);

function navbar_email_click(e){
    closeProductDetail();
    closeProductDescription();
    desktop_menu.classList.toggle('inactive');

}
function menu_ham_icon_click(e){
    closeProductDetail();
    closeProductDescription();

    mobileMenu.classList.toggle('inactive');

}
function menu_carrito_icon_click(e){
    closeProductDescription();
    closeEmailOrHamMenu();
    productDetail.classList.toggle('inactive');
    
}

function onProductClick(e){
    closeProductDetail();
    closeEmailOrHamMenu();

    productDescription.classList.remove('inactive');

}
function product_description_close_click(e){
    productDescriptionClose.parentElement.classList.add('inactive');
}

const productList = [];
for(let i = 0; i < 5; i++){
    productList.push({
        name : 'Bike',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
    
    });

}
renderProducts(productList);


function renderProducts(productList){


for (product of productList){
    const productCard= document.createElement('div')
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', onProductClick);
    img.style.cursor = 'pointer';
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const unorderedList = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = "$"+ product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    unorderedList.append(productPrice, productName);
    productFigure = document.createElement('figure');

    figureImg = document.createElement('img');
    figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    productFigure.appendChild(figureImg);

    productInfo.append(unorderedList,productFigure );

    productCard.append(img,productInfo);
    const cards_container = document.querySelector('.cards-container');
    cards_container.appendChild(productCard);

}
}




// Helpers
function closeProductDetail(){

    const isProductDetailOpen = !productDetail.classList.contains('inactive');    
    if(isProductDetailOpen){        
        productDetail.classList.add('inactive');
    }
}
function closeProductDescription(){
    const isProductDescriptionOpen = !productDescription.classList.contains('inactive');    
    if(isProductDescriptionOpen){        
        productDescription.classList.add('inactive');
    }
}

function closeEmailOrHamMenu(){
    isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    isDesktopMenuOpen = !desktop_menu.classList.contains('inactive');
    if (isMobileMenuOpen || isDesktopMenuOpen ){
        desktop_menu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }
}