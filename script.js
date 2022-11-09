const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click' , toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
};

menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
};

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
};


const productList = [];
productList.push({
    name : 'Bike',
    price : 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name : 'Computer',
    price : 200,
    image : 'https://www.superprof.co/blog/wp-content/uploads/2018/08/1.-Ordenadores-Apple-Top-1060x707.jpeg',
});
productList.push({
    name : 'Tablet',
    price : 180,
    image : 'https://www.apple.com/v/ipad-air/s/images/overview/design/colors_ipad_3__c3iufslzn3au_large.jpg',
});

/*
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

function renderProduct(arr) {
    
    for(product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }

}

renderProduct(productList);