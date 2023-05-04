const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglemobileMenu);
shoppingCart.addEventListener('click', toggleproductDetail);


function toggleDesktopMenu(){
    const isproductDetailClosed = productDetail.classList.contains('incative');

    if(!isproductDetailClosed){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function togglemobileMenu(){
    const isproductDetailClosed = productDetail.classList.contains('incative');

    if(!isproductDetailClosed){
        productDetail.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}
function toggleproductDetail(){
    const isMobileMenuClosed = mobileMenu.classList.contains('incative');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});  
productList.push({
    name: 'Coso',
    price: 11220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 
productList.push({
    name: 'Mas coso',
    price: 13440,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}); 

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="../icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>  */


for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + productPrice;

    const productName = document.createElement('p');
    productName.innerText = productName;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    img.setAttribute('src', "../icons/bt_add_to_cart.svg" );


}
