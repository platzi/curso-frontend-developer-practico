const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.shoppingCartContainer-close');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailAside = document.querySelector('.shoppingCartContainer')


menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');
    if(isAsideOpen){
        aside.classList.add('inactive');
    }

    const IsProductDetailOpen = !productDetailAside.classList.contains('inactive');
    if(IsProductDetailOpen){
        closeProductDetailAside();
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    };
    const IsProductDetailOpen = !productDetailAside.classList.contains('inactive');
    if(IsProductDetailOpen){
        productDetailAside.classList.add('inactive');
    };

    aside.classList.toggle('inactive');

}
function openProductDetailAside(){
    productDetailAside.classList.remove('inactive');

    const IsProductDetailOpen = !productDetailAside.classList.contains('inactive');
    if(IsProductDetailOpen){
        aside.classList.add('inactive');
    }
}
function closeProductDetailAside(){
    productDetailAside.classList.add('inactive');
}
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
});
productList.push({
    name: 'Compu',
    price: 620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
});
productList.push({
    name: 'Pantalla',
    price: 320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
});

function renderProducts(arr){
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
      
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
      
        cardsContainer.appendChild(productCard);
      };
}
renderProducts(productList);


