const menuEmail =  document.querySelector('.navbar-email');
const menuHamIcon =  document.querySelector('.menu');
const menuCarritoIcon =  document.querySelector('.navbar-shopping-cart');
const desktopMenu =  document.querySelector('.desktop-menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const shoppingCardContainer =  document.querySelector('#shoppingCardContainer');
const cardsContainer =  document.querySelector('.cards-container ');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// .toggle('inactive')
function toggleDesktopMenu(){
    const isAsideClose = shoppingCardContainer.classList.contains('inactive');

    if(!isAsideClose) {
        shoppingCardContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideClose = shoppingCardContainer.classList.contains('inactive');

    if(!isAsideClose) {
        shoppingCardContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const isMobileClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCardContainer.classList.toggle('inactive');
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
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
        const productInfoCart = document.createElement('img');
        productInfoCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoCart); 
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg );
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
        
        // let theProduct =`
        //     <div class="product-card">
        //     <img src="${product.image}" alt="">
        //     <div class="product-info">
        //         <div>
        //             <p>$${product.price}</p>
        //             <p>${product.name}</p>
        //         </div>
        //         <figure>
        //             <img src="./icons/bt_add_to_cart.svg" alt="">
        //         </figure>
        //     </div>
        //     </div>
        // `;
        
        // cardsContainer.innerHTML += theProduct;
    
    }

}

renderProducts(productList);