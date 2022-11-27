const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const menuHamICon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamICon.addEventListener('click', togglemobileMenu);
menuCarrito.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(){
    const isAsideClosed1 = aside.classList.contains('inactive');

    if (!isAsideClosed1) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inavtive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }    

    aside.classList.toggle('inactive');
}

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

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 450,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.xo303gcJZRTV9DLZ46qhawHaEM%26pid%3DApi&f=1&ipt=33d0871df2ef93379bfa213bbe99e45bdeedb202fee2de466c7a998607b6d4ca&ipo=images'
});
productList.push({
    name: 'Computador',
    price: 740,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ri7Op_nPlmycX0Fj2ak_UgHaE6%26pid%3DApi&f=1&ipt=e14a499fead46329a6bbd4a3b096d1222f9dd1fe4eb91d11f0e682c3ee2edb6a&ipo=images'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 450,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.xo303gcJZRTV9DLZ46qhawHaEM%26pid%3DApi&f=1&ipt=33d0871df2ef93379bfa213bbe99e45bdeedb202fee2de466c7a998607b6d4ca&ipo=images'
});
productList.push({
    name: 'Computador',
    price: 740,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ri7Op_nPlmycX0Fj2ak_UgHaE6%26pid%3DApi&f=1&ipt=e14a499fead46329a6bbd4a3b096d1222f9dd1fe4eb91d11f0e682c3ee2edb6a&ipo=images'
});

/* for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

// product = {name,price,image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

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
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
} */
    function renderProducts(arr){
        for(product of arr){
            const productCard=document.createElement('div');
            productCard.classList.add('product-card');

            // product = {name,price,image} -> product.image
            const productImg=document.createElement('img');
            productImg.setAttribute('src',product.image);

            const productInfo=document.createElement('div');
            productInfo.classList.add('product-info');

            const productInfoDiv=document.createElement('div');
            const productPrice=document.createElement('p');
            productPrice.innerText='$'+product.price;
            const productName=document.createElement('p');
            productName.innerText=product.name;

            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
            
            const productInfoFigure=document.createElement('figure');
            const productImgCart=document.createElement('img');
            productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

            productInfoFigure.appendChild(productImgCart);

            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);

            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);

            cardsContainer.appendChild(productCard);
        }
    }
renderProducts(productList);
