const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleShowDesktopMenu);
menuHamIcon.addEventListener('click', toogleShowMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);


function toogleShowDesktopMenu(event) {
    event.preventDefault();
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleShowMobileMenu(event) {
    event.preventDefault();
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(event) {
    event.preventDefault();
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 200,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Pantalla',
    price: 500,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Laptop',
    price: 800,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

// <div class="product-card">
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//     <div class="product-info">
//         <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//         </div>
//         <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//         </figure>
//     </div>
// </div>

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        // productInfo.appendChild(productInfoDiv);
        // productInfo.appendChild(productInfoFigure);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }   
}

renderProducts(productList);