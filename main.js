
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleMenuCarrito);
productDetailClose.addEventListener('click', closeProductDetails);

function toggleDesktopMenu(){
    const isActive = !desktopMenu.classList.contains('inactive');
    inactiveAll();
    if(isActive)
        desktopMenu.classList.add('inactive');
    else
        desktopMenu.classList.remove('inactive');
}

function toggleMobileMenu(){

    const isActive = !mobileMenu.classList.contains('inactive');
    inactiveAll();
    if(isActive)
        mobileMenu.classList.add('inactive');
    else
        mobileMenu.classList.remove('inactive');
}

function toggleMenuCarrito(){

    const isActive = !aside.classList.contains('inactive');
    inactiveAll();
    if(isActive)
        aside.classList.add('inactive');
    else
        aside.classList.remove('inactive');
}

function inactiveAll(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function openProductDetails(){
    inactiveAll();
    productDetail.classList.remove('inactive');
}

function closeProductDetails(){
    productDetail.classList.add('inactive');
}





/* <
div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
</div> 
*/
/* Carga de Productos*/
const productList = [];
productList.push({
    name:'Bike',
    price:6000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Tv',
    price:12000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Mesa',
    price:4000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);



function renderProducts(products){
    for (product of products) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetails)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDetails = document.createElement('div');
    
        const price = document.createElement('p');
        price.innerText = `$${product.price}`;
    
        const name = document.createElement('p');
        name.innerText = `$${product.name}`;
    
        const figure = document.createElement('figure');
    
        const imgCard = document.createElement('img');
        imgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        figure.appendChild(imgCard);
    
        productInfoDetails.appendChild(price);
        productInfoDetails.appendChild(name);
    
        productInfo.appendChild(productInfoDetails);
        productInfo.appendChild(figure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}



