const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

navbarEmail.addEventListener('click', toogleDesktopMenu);
burguerMenu.addEventListener('click', toogleMobileMenu);
navbarShoppingCart.addEventListener('click', toogleAsideDetail);

function toogleDesktopMenu(){
    // Constant that show us if the element isn't being displayed
    const isAsideClosed = aside.classList.contains('inactive');
    
    // if aside is open we add the inactive class to close it
    if (!isAsideClosed){
        aside.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive');
    
}

function toogleMobileMenu(){
     // Constant that show us if the element isn't being displayed
    const isAsideClosed = aside.classList.contains('inactive');
    
    // if aside is open we add the inactive class to close it
    if (!isAsideClosed){
        aside.classList.add('inactive');
    } 
    mobileMenu.classList.toggle('inactive');
}

function toogleAsideDetail(){
    // Constant that show us if the element isn't being displayed
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // if mobile menu is open we add the inactive class to close it
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } // Also if desktop menu is open we add the inactive class to close it
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Cupressus',
    img: './img/bonsai_1.png',
    price: 500,
});
productList.push({
    name: 'Fraxinus',
    img: './img/bonsai_2.png',
    price: 650,
});
productList.push({
    name: 'Ginkgo',
    img: './img/bonsai_3.png',
    price: 450,
});
productList.push({
    name: 'Pinus',
    img: './img/bonsai_4.png',
    price: 700,
});
productList.push({
    name: 'Cupressus',
    img: './img/bonsai_1.png',
    price: 500,
});
productList.push({
    name: 'Fraxinus',
    img: './img/bonsai_2.png',
    price: 650,
});
productList.push({
    name: 'Ginkgo',
    img: './img/bonsai_3.png',
    price: 450,
});
productList.push({
    name: 'Pinus',
    img: './img/bonsai_4.png',
    price: 700,
});


/*  We bring the original HTML to better see what we have to add via JS

<div class="product-card">
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
*/

function productRender(listOfProducts) {
    for (product of listOfProducts) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
        
        const productInfoDiv = document.createElement('div');
        
        const paragraph1 = document.createElement('p');
        paragraph1.innerText = '$ '+ product.price;
        
        const paragraph2 = document.createElement('p');
        paragraph2.innerText = '$ '+ product.name;
        
        const figure = document.createElement('figure');
       
        const cart = document.createElement('img');
        cart.setAttribute('src', './icons/bt_add_to_cart.svg');
        cart.setAttribute('alt', 'cart');
        
        figure.appendChild(cart)
        
        productInfoDiv.appendChild(paragraph1);
        productInfoDiv.appendChild(paragraph2);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure)
       
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

productRender(productList);