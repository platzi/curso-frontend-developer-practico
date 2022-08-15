const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMobileMenu = document.querySelector('.iconMobileMenu');
const MobileMenu = document.querySelector('.mobile-menu');

const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrderMenu = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', taggDesktopMenu);
iconMobileMenu.addEventListener('click', taggMobileMenu);
iconShoppingCart.addEventListener('click', taggOrderMenu);

function taggDesktopMenu(){

    if (!myOrderMenu.classList.contains('inactive')){
        myOrderMenu.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');
    } else {
        desktopMenu.classList.toggle('inactive');
    }

}

function taggMobileMenu(){

    if (!myOrderMenu.classList.contains('inactive')){
        myOrderMenu.classList.add('inactive')
        MobileMenu.classList.toggle('inactive');
    } else {
        MobileMenu.classList.toggle('inactive');
    }
    

}
function taggOrderMenu(){

    // const isMobileMenuClosed=MobileMenu.classList.contains('inactive')
    // const isAsideClosed= myOrderMenu.classList.contains('inactive')


    //myOrderMenu.classList.toggle('inactive');

    if (!MobileMenu.classList.contains('inactive')){
        MobileMenu.classList.add('inactive')
        myOrderMenu.classList.toggle('inactive')
    } else if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive')
        myOrderMenu.classList.toggle('inactive')
    } else{
        myOrderMenu.classList.toggle('inactive')
    }

}

const productList =[];
productList.push({ 
   name: "bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Computador",
    price: 555,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

/* <div class="product-card">
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

function renderProducts (arr){
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText='$'+product.price;
    
        const productName = document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);